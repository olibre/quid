(function(t){function e(e){for(var a,s,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d09e9":"20299a94","chunk-2d209aff":"dec9f51e","chunk-2d21a3d2":"23206ac6","chunk-4a595d8e":"fd4b602e","chunk-9c7d460c":"10698512"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"051a":function(t,e,n){"use strict";var a=n("130d"),r=n.n(a);r.a},"130d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=(n("d3b7"),n("8c4f")),o=n("2f62"),s=n("bc3a"),i=n.n(s),c={quidUrl:"http://localhost:8082"},u=c;a["default"].use(o["a"]);var l=new o["a"].Store({state:{isAuthenticated:!1,key:null,action:null,showActionBar:!1,refreshAction:null},mutations:{action:function(t,e){t.action=e,t.showActionBar=!0},endAction:function(t){t.action=null,t.showActionBar=!1},refreshAction:function(t,e){t.action=e,t.showActionBar=!0},endRefreshAction:function(t){t.action=null,t.showActionBar=!1},authenticate:function(t,e){t.isAuthenticated=!0,t.key=e;var n=i.a.create({baseURL:u.quidUrl,timeout:1e3,headers:{Authorization:"Bearer "+e}});a["default"].prototype.$axios=n},unauthenticate:function(t){t.isAuthenticated=!1,t.key=null;var e=i.a.create({baseURL:u.quidUrl,timeout:1e3});a["default"].prototype.$axios=e}},getters:{showActionBar:function(t){return t.showActionBar}}}),d=l;a["default"].use(r["a"]);var f=[{path:"/",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/users",component:function(){return n.e("chunk-9c7d460c").then(n.bind(null,"ed81"))}},{path:"/groups",component:function(){return n.e("chunk-2d0d09e9").then(n.bind(null,"696f"))}},{path:"/tokens",component:function(){return n.e("chunk-2d209aff").then(n.bind(null,"a9b3"))}},{path:"/namespaces",component:function(){return n.e("chunk-4a595d8e").then(n.bind(null,"75d4"))}}],p=new r["a"]({mode:"history",base:"/",routes:f});p.afterEach((function(){d.commit("endAction")}));var m=p,h=n("2b27"),b=n.n(h),v=n("5f5b"),k=n("b1e0"),g=(n("f9e3"),n("2dd8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[t.isAuthenticated?n("navbar"):t._e(),t.isAuthenticated?n("b-container",{staticClass:"h-100",attrs:{fluid:""}},[n("b-row",{staticStyle:{"align-items":"stretch",height:"100%"}},[n("b-col",{staticClass:"bg-light"},[n("sidebar")],1),n("b-col",{attrs:{cols:"10"}},[n("router-view")],1)],1)],1):n("div",{staticClass:"vertical-center"},[n("div",{staticClass:"inner-block"},[n("login")],1)])],1)}),y=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{tag:"router-link",to:{path:"/"}}},[t._v("Quid")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{tag:"router-link",to:{path:"/namespaces"}}},[t._v("Namespaces")]),n("b-nav-item",{attrs:{tag:"router-link",to:{path:"/users"}}},[t._v("Users")]),n("b-nav-item",{attrs:{tag:"router-link",to:{path:"/groups"}}},[t._v("Groups")]),n("b-nav-item",{attrs:{tag:"router-link",to:{path:"/tokens"}}},[t._v("Tokens")]),n("b-button",{staticClass:"ml-3 my-2 my-sm-0",attrs:{size:"sm"},on:{click:t.logout}},[t._v("Logout")])],1)],1)],1)],1)},x=[],_={methods:{logout:function(){this.$cookies.remove("quidkey",null,""),this.$store.commit("unauthenticate"),this.$axios.defaults.headers.common={}}}},$=_,C=n("2877"),A=Object(C["a"])($,w,x,!1,null,null,null),j=A.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-3"},[n("div",[n("h4",{staticClass:"text-muted",on:{click:function(e){return t.$router.push("/namespaces")}}},[n("b-icon-person",{staticClass:"mr-1 text-muted"}),t._v("Namespaces ")],1),n("a",{on:{click:function(e){return t.action("/namespaces","addNamespace")}}},[n("b-icon-plus",{staticClass:"mr-1 text-muted"}),t._v("Add ")],1)]),n("div",{staticClass:"mt-3"},[n("h4",{staticClass:"text-muted",on:{click:function(e){return t.$router.push("/users")}}},[n("b-icon-person",{staticClass:"mr-1 text-muted"}),t._v("Users ")],1),n("a",{on:{click:function(e){return t.action("/users","addUser")}}},[n("b-icon-plus",{staticClass:"mr-1 text-muted"}),t._v("Add ")],1)]),n("div",{staticClass:"mt-3"},[n("h4",{staticClass:"text-muted",on:{click:function(e){return t.$router.push("/groups")}}},[n("b-icon-people",{staticClass:"mr-1"}),t._v("Groups ")],1),n("a",{on:{click:t.a}},[n("b-icon-plus",{staticClass:"mr-1 text-muted"}),t._v("Add ")],1)]),n("div",{staticClass:"mt-3"},[n("h4",{staticClass:"text-muted",on:{click:function(e){return t.$router.push("/tokens")}}},[n("b-icon-puzzle",{staticClass:"mr-1"}),t._v("Tokens ")],1),n("a",{on:{click:t.a}},[n("b-icon-plus",{staticClass:"mr-1 text-muted"}),t._v("Add ")],1)])])},S=[],q=(n("2ca0"),n("96cf"),n("1da1")),U={methods:{action:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$route.path.startsWith(e)){t.next=3;break}return t.next=3,this.$router.push(e);case 3:this.$store.commit("action",n);case 4:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),a:function(){}}},L=U,P=(n("051a"),Object(C["a"])(L,O,S,!1,null,"64ebfbd2",null)),B=P.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:"Login",tag:"article"}},[n("b-card-text",[n("b-form-group",[n("b-form-input",{attrs:{placeholder:"name"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),n("b-form-group",[n("b-form-input",{attrs:{type:"password",placeholder:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),n("b-button",{attrs:{variant:"primary"},on:{click:t.postForm}},[t._v("Submit")])],1)},T=[],R={data:function(){return{form:{username:"",password:""}}},methods:{postForm:function(){var t=this;t.$axios.post("/request_token",{username:this.form.username,password:this.form.password}).then((function(e){t.$cookies.set("quidkey",e.data.key),t.$store.commit("authenticate",e.data.key)})).catch((function(e){401===e.response.status&&t.$bvToast.toast("Login refused",{title:"Authentication failed",variant:"danger"})}))}}},z=R,M=Object(C["a"])(z,E,T,!1,null,null,null),N=M.exports,F={components:{Navbar:j,Sidebar:B,Login:N},created:function(){var t=this.$cookies.isKey("quidkey");if(t){var e=this.$cookies.get("quidkey");this.$store.commit("authenticate",e)}},computed:Object(o["c"])(["isAuthenticated"])},G=F,J=(n("5c0b"),Object(C["a"])(G,g,y,!1,null,null,null)),K=J.exports;a["default"].config.productionTip=!1,a["default"].use(v["a"]),a["default"].use(k["a"]),a["default"].use(b.a),a["default"].$cookies.config("1d","","",!1,"Strict");var Q=i.a.create({baseURL:u.quidUrl,timeout:1e3});a["default"].prototype.$axios=Q,new a["default"]({router:m,store:d,render:function(t){return t(K)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.10823def.js.map