(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c7d460c"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),c=r("9112");for(var a in o){var s=n[a],f=s&&s.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(u){f.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),c=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),c=r("ae40"),a=i("filter"),s=c("filter");n({target:"Array",proto:!0,forced:!a||!s},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),c=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,i(0,r)):t[c]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),c=r("c430"),a=r("83ab"),s=r("4930"),f=r("fdbf"),u=r("d039"),l=r("5135"),d=r("e8b5"),b=r("861d"),p=r("825a"),h=r("7b0b"),m=r("fc6a"),v=r("c04e"),y=r("5c6c"),g=r("7c73"),w=r("df75"),O=r("241c"),S=r("057f"),j=r("7418"),L=r("06cf"),x=r("9bf2"),P=r("d1e7"),E=r("9112"),A=r("6eeb"),k=r("5692"),C=r("f772"),T=r("d012"),D=r("90e3"),M=r("b622"),$=r("e538"),N=r("746f"),_=r("d44e"),B=r("69f3"),V=r("b727").forEach,F=C("hidden"),G="Symbol",R="prototype",H=M("toPrimitive"),J=B.set,U=B.getterFor(G),I=Object[R],q=o.Symbol,Q=i("JSON","stringify"),W=L.f,z=x.f,K=S.f,X=P.f,Y=k("symbols"),Z=k("op-symbols"),tt=k("string-to-symbol-registry"),et=k("symbol-to-string-registry"),rt=k("wks"),nt=o.QObject,ot=!nt||!nt[R]||!nt[R].findChild,it=a&&u((function(){return 7!=g(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W(I,e);n&&delete I[e],z(t,e,r),n&&t!==I&&z(I,e,n)}:z,ct=function(t,e){var r=Y[t]=g(q[R]);return J(r,{type:G,tag:t,description:e}),a||(r.description=e),r},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},st=function(t,e,r){t===I&&st(Z,e,r),p(t);var n=v(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,F)&&t[F][n]&&(t[F][n]=!1),r=g(r,{enumerable:y(0,!1)})):(l(t,F)||z(t,F,y(1,{})),t[F][n]=!0),it(t,n,r)):z(t,n,r)},ft=function(t,e){p(t);var r=m(e),n=w(r).concat(pt(r));return V(n,(function(e){a&&!lt.call(r,e)||st(t,e,r[e])})),t},ut=function(t,e){return void 0===e?g(t):ft(g(t),e)},lt=function(t){var e=v(t,!0),r=X.call(this,e);return!(this===I&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,F)&&this[F][e])||r)},dt=function(t,e){var r=m(t),n=v(e,!0);if(r!==I||!l(Y,n)||l(Z,n)){var o=W(r,n);return!o||!l(Y,n)||l(r,F)&&r[F][n]||(o.enumerable=!0),o}},bt=function(t){var e=K(m(t)),r=[];return V(e,(function(t){l(Y,t)||l(T,t)||r.push(t)})),r},pt=function(t){var e=t===I,r=K(e?Z:m(t)),n=[];return V(r,(function(t){!l(Y,t)||e&&!l(I,t)||n.push(Y[t])})),n};if(s||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),r=function(t){this===I&&r.call(Z,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),it(this,e,y(1,t))};return a&&ot&&it(I,e,{configurable:!0,set:r}),ct(e,t)},A(q[R],"toString",(function(){return U(this).tag})),A(q,"withoutSetter",(function(t){return ct(D(t),t)})),P.f=lt,x.f=st,L.f=dt,O.f=S.f=bt,j.f=pt,$.f=function(t){return ct(M(t),t)},a&&(z(q[R],"description",{configurable:!0,get:function(){return U(this).description}}),c||A(I,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:q}),V(w(rt),(function(t){N(t)})),n({target:G,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!a},{create:ut,defineProperty:st,defineProperties:ft,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:u((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(h(t))}}),Q){var ht=!s||u((function(){var t=q();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,Q.apply(null,o)}})}q[R][H]||E(q[R],H,q[R].valueOf),_(q,G),T[F]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),o=r("d039"),i=r("5135"),c=Object.defineProperty,a={},s=function(t){throw t};t.exports=function(t,e){if(i(a,t))return a[t];e||(e={});var r=[][t],f=!!i(e,"ACCESSORS")&&e.ACCESSORS,u=i(e,0)?e[0]:s,l=i(e,1)?e[1]:void 0;return a[t]=!!r&&!o((function(){if(f&&!n)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:s}):t[1]=1,r.call(t,u,l)}))}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),c=r("d039"),a=c((function(){i(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return i(o(t))}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),c=r("50c4"),a=r("65f0"),s=[].push,f=function(t){var e=1==t,r=2==t,f=3==t,u=4==t,l=6==t,d=5==t||l;return function(b,p,h,m){for(var v,y,g=i(b),w=o(g),O=n(p,h,3),S=c(w.length),j=0,L=m||a,x=e?L(b,S):r?L(b,0):void 0;S>j;j++)if((d||j in w)&&(v=w[j],y=O(v,j,g),t))if(e)x[j]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return j;case 2:s.call(x,v)}else if(u)return!1;return l?-1:f||u?u:x}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),c=r("fc6a"),a=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),o=a.f,f=i(n),u={},l=0;while(f.length>l)r=o(n,e=f[l++]),void 0!==r&&s(u,e,r);return u}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),c=r("06cf").f,a=r("83ab"),s=o((function(){c(1)})),f=!a||s;n({target:"Object",stat:!0,forced:f,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},ed81:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"text-muted mt-3"},[t._v("Users")]),r("div",[r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4"},model:{value:t.showActionBar,callback:function(e){t.showActionBar=e},expression:"showActionBar"}},["addUser"===t.action?r("add"):t._e()],1)],1),r("b-table",{staticClass:"mt-4",staticStyle:{"max-width":"450px"},attrs:{striped:"",hover:"",items:t.data,fields:t.fields}})],1)},o=[],i=r("5530"),c=r("2f62"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"28rem"},attrs:{title:"Add user"}},[r("b-card-text",[r("b-form-group",[r("b-form-input",{attrs:{placeholder:"name"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),r("b-form-group",[r("b-form-input",{attrs:{type:"password",placeholder:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),r("b-button",{attrs:{variant:"success"},on:{click:t.postForm}},[t._v("Save")]),r("b-button",{staticClass:"ml-2",attrs:{variant:"warning"},on:{click:function(e){return t.$store.commit("endAction")}}},[t._v("Cancel")])],1)],1)},s=[],f={data:function(){return{form:{username:"",password:""}}},methods:{postForm:function(){var t=this;t.$axios.post("/login",{username:this.form.username,password:this.form.password}).then((function(e){t.$cookies.set("quidkey",e.data.key),t.$store.commit("authenticate",e.data.key)})).catch((function(e){console.log(e),401===e.response.status&&t.$bvToast.toast("Login refused",{title:"Authentication failed",variant:"danger"})}))}}},u=f,l=r("2877"),d=Object(l["a"])(u,a,s,!1,null,null,null),b=d.exports,p={components:{Add:b},data:function(){return{data:[],fields:["id","name"]}},methods:{fetchUsers:function(){var t=this;this.$axios.get("/users/all").then((function(e){return t.data=e.data})).catch((function(t){return console.log(t)}))}},mounted:function(){this.fetchUsers()},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["c"])(["action"])),Object(c["b"])({s:"showActionBar"})),{},{showActionBar:{get:function(){return this.s},set:function(t){return t}}})},h=p,m=Object(l["a"])(h,n,o,!1,null,null,null);e["default"]=m.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-9c7d460c.10698512.js.map