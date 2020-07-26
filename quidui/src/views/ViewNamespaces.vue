<template>
  <div>
    <h1 class="text-muted mt-3">
      Namespaces&nbsp;
      <b-icon-plus
        v-if="action!=='addNamespace'"
        class="mr-1"
        style="color:lightgrey"
        @click="$store.commit('action', 'addNamespace')"
      />
    </h1>
    <div>
      <b-collapse id="collapse-4" v-model="showActionBar" class="mt-2">
        <namespace-add v-if="action === 'addNamespace'" @refresh="refresh"></namespace-add>
      </b-collapse>
    </div>
    <b-table hover bordeless :items="data" :fields="fields" class="mt-4" style="max-width:850px">
      <template v-slot:cell(public_endpoint_enabled)="row">
        <b-form-group class="text-center" v-if="row.item.name !== 'quid'">
          <b-form-checkbox
            v-model="row.item.public_endpoint_enabled"
            switch
            @change="toggleEndpoint(row)"
          ></b-form-checkbox>
        </b-form-group>
      </template>
      <template v-slot:cell(max_token_ttl)="row">
        <b-icon-stopwatch
          class="mr-1 text-superlight"
          @click="toggleEditTtl(row.item.id,row.item.max_token_ttl)"
        />&nbsp;
        <span
          v-if="editTtl !== row.item.id || row.item.name=='quid'"
        >{{ row.item.max_token_ttl }}</span>
        <b-form-input
          v-else
          :value="newTtl"
          v-on:keyup.enter="submitTt(row)"
          v-on:keyup.escape="undeditTtl"
          v-model="newTtl"
          style="display:inline-block;width:52px"
          size="sm"
          autofocus
        ></b-form-input>
      </template>
      <template v-slot:cell(action)="row">
        <b-button
          class="mr-2"
          variant="outline-secondary"
          @click="toggleDetails(row)"
        >{{ row.detailsShowing ? 'Hide' : 'Show'}} info</b-button>
        <b-button
          class="mr-2"
          variant="outline-secondary"
          v-if="row.item.name !== 'quid'"
          @click="showKey(row.item.id, row.item.name)"
        >Show key</b-button>
        <b-button
          variant="outline-danger"
          v-if="row.item.name !== 'quid'"
          @click="confirmDeleteNamespace(row.item.id, row.item.name)"
        >Delete</b-button>
      </template>
      <template v-slot:row-details="row">
        <namespace-info v-if="rowDetails[row.index] != undefined" :details="rowDetails[row.index]"></namespace-info>
      </template>
    </b-table>
    <b-modal title="Delete namespace" ref="delete-modal">
      Delete {{ namespaceToDelete.name }}?
      <template v-slot:modal-footer="{ ok, cancel }">
        <b-button variant="danger" @click="deleteNamespace(namespaceToDelete)">Delete</b-button>
        <b-button variant="warning" @click="cancel()">Cancel</b-button>
      </template>
    </b-modal>
    <b-modal :title="'Key for namespace '.concat(selectedNs.title)" ref="nskey-modal">
      {{ selectedNs.key }}
      <template v-slot:modal-footer="{ cancel }">
        <b-button variant="warning" @click="cancel()">Ok</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import NamespaceAdd from "@/components/namespace/NamespaceAdd";
import NamespaceInfo from "@/components/namespace/NamespaceInfo";

export default {
  components: {
    NamespaceAdd,
    NamespaceInfo,
  },
  data() {
    return {
      data: [],
      fields: [
        { key: "id", sortable: true },
        { key: "name", sortable: true },
        { key: "public_endpoint_enabled", sortable: false },
        { key: "max_token_ttl", sortable: true },
        { key: "action", sortable: false },
      ],
      namespaceToDelete: {},
      rowDetails: {},
      selectedNs: { title: "" },
      editTtl: null,
      isEditTtl: false,
      newTtl: null,
    };
  },
  methods: {
    async submitTt(row) {
      let { error } = await this.$api.post("/admin/namespaces/maxttl", {
        id: row.item.id,
        max_ttl: this.newTtl,
      });
      if (error == null) {
        this.editTtl = null;
        this.isEditTtl = false;
        this.data[row.index].max_token_ttl = this.newTtl;
        this.$bvToast.toast(`Namespace max token ttl set to ${this.newTtl}`, {
          title: "Ok",
          variant: "success",
          autoHideDelay: 1500,
        });
        this.newTtl = null;
      }
    },
    undeditTtl() {
      this.editTtl = false;
      this.editTtl = null;
      this.newTtl = null;
    },
    toggleEditTtl(id, value) {
      if (this.isEditTtl) {
        this.editTtl = null;
        this.isEditTtl = false;
      } else {
        this.editTtl = id;
        this.newTtl = value;
        this.isEditTtl = true;
      }
    },
    async toggleEndpoint(row) {
      let enabled = !row.item.public_endpoint_enabled;
      let { error } = await this.$api.post("/admin/namespaces/endpoint", {
        id: row.item.id,
        enable: enabled,
      });
      if (error === null) {
        let msg = row.item.public_endpoint_enabled ? "enabled" : "disabled";
        this.$bvToast.toast(`Namespace endpoint ${msg}`, {
          title: "Ok",
          variant: "success",
          autoHideDelay: 1500,
        });
      }
    },
    async showKey(id, title) {
      this.selectedNs = { id: id, title: title, key: null };
      let { response, error } = await this.$api.post("/admin/namespaces/key", {
        id: id,
      });
      if (!error) {
        this.selectedNs.key = response.data.key;
        this.$refs["nskey-modal"].show();
      }
    },
    getRowDetails(row) {
      if (!row.detailsShowing) {
        if (this.rowDetails[row.index] !== undefined) {
          return this.rowDetails[row.index];
        }
      }
      return { num_users: 0, groups: [] };
    },
    async toggleDetails(row) {
      if (!row.detailsShowing) {
        let { response } = await this.$api.post("/admin/namespaces/info", {
          id: row.item.id,
        });
        this.rowDetails[row.index] = response.data;
      }
      row.toggleDetails();
    },
    refresh() {
      this.fetchNamespaces();
      this.$bvToast.toast("ok", {
        title: "Namespace saved",
        variant: "success",
        autoHideDelay: 1500,
      });
    },
    async fetchNamespaces() {
      let { response } = await this.$api.get("/admin/namespaces/all");
      this.data = response.data;
    },
    confirmDeleteNamespace(id, name) {
      this.namespaceToDelete = {
        name: name,
        id: id,
      };
      this.$refs["delete-modal"].show();
    },
    async deleteNamespace(ns) {
      this.$refs["delete-modal"].hide();
      let { error } = await this.$api.post("/admin/namespaces/delete", {
        id: ns.id,
      });
      if (error === null) {
        this.$bvToast.toast("Ok", {
          title: "Namespace deleted",
          autoHideDelay: 1000,
          variant: "success",
        });
        this.fetchNamespaces();
      }
    },
    nsKeyModalTitle() {
      if (this.selectedNs === null) return;
      return `Key for namespace ${this.selectedNs.title}`;
    },
  },
  mounted: function () {
    this.fetchNamespaces();
  },
  computed: {
    ...mapState(["action"]),
    ...mapGetters({
      s: "showActionBar",
    }),
    showActionBar: {
      get() {
        return this.s;
      },
      set(newName) {
        return newName;
      },
    },
  },
};
</script>