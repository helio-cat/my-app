(function(t){function e(e){for(var i,n,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,n=1;n<a.length;n++){var s=a[n];0!==r[s]&&(i=!1)}i&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},n={app:0},r={app:0},o=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"02c55d29"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"b6b92317"}[t]+".css",r=l.p+i,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===r))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],u=c.getAttribute("data-href");if(u===i||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete n[t],d.parentNode.removeChild(d),a(o)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){n[t]=0})));var i=r[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,a){i=r[t]=[e,a]}));e.push(i[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",p.name="ChunkLoadError",p.type=i,p.request=n,a[1](p)}r[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navbar"),a("v-content",{staticClass:"grey lighten-5"},[a("router-view",{staticClass:"pa-4"})],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-app-bar",{attrs:{app:"",color:"primary"}},[a("v-app-bar-nav-icon",{attrs:{tile:""},on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"text-uppercase"},[a("span",{staticClass:"font-weight-light"},[t._v("Psyence")]),a("span",{staticClass:"font-weight-bold"},[t._v("IO")])]),a("v-spacer"),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{text:"",tile:""}},i),[a("v-icon",[t._v("mdi-menu-down")]),a("span",[t._v("menu")])],1)]}}])},[a("v-list",{attrs:{flat:"",color:"primary white--text"}},t._l(t.links,(function(e){return a("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})),1)],1),a("v-btn",{attrs:{icon:"",tile:""}},[a("v-icon",[t._v("mdi-alien")])],1),a("v-btn",{attrs:{icon:"",tile:""}},[a("v-icon",[t._v("mdi-dots-vertical")])],1)],1),a("v-navigation-drawer",{staticClass:"secondary",attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-col",{staticClass:"text-center align-center"},[a("v-flex",{staticClass:"mt-5"},[a("v-avatar",{attrs:{size:"100"}},[a("img",{attrs:{src:"https://api.adorable.io/avatars/285/Helios.png",alt:""}})]),a("p",{staticClass:"white--text subheading mt-1"},[t._v("Helios")])],1),a("v-flex",{attrs:{"my-3":""}},[a("Popup")],1)],1),a("v-list",[a("v-list-item-group",t._l(t.links,(function(e){return a("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[a("v-list-item-action",[a("v-icon",{staticClass:"white--text"},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"white--text"},[t._v(t._s(e.text))])],1)],1)})),1)],1)],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{color:"primary secondary--text",tile:"",dark:""}},i),[t._v(" Add New Project ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v(" New Project ")]),a("v-card-text",[t._v(" A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies. ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"success",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" I Accept ")])],1)],1)],1)},c=[],u={name:"popup",data(){return{dialog:!1}}},p=u,d=a("2877"),m=a("6544"),v=a.n(m),f=a("8336"),g=a("b0af"),h=a("99d9"),b=a("169a"),y=a("ce7e"),_=a("2fa4"),x=Object(d["a"])(p,l,c,!1,null,null,null),w=x.exports;v()(x,{VBtn:f["a"],VCard:g["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VDialog:b["a"],VDivider:y["a"],VSpacer:_["a"]});var C={name:"navbar",components:{Popup:w},data(){return{drawer:!1,links:[{icon:"mdi-view-dashboard",text:"Dashboard",route:"/"},{icon:"mdi-folder",text:"My Projects",route:"/projects"},{icon:"mdi-account",text:"Team",route:"/team"}]}}},V=C,j=a("40dc"),k=a("5bc1"),S=a("8212"),P=a("62ad"),q=a("0e8f"),L=a("132d"),T=a("8860"),A=a("da13"),O=a("1800"),E=a("5d23"),B=a("1baa"),I=a("e449"),N=a("f774"),D=a("2a7f"),M=Object(d["a"])(V,o,s,!1,null,null,null),H=M.exports;v()(M,{VAppBar:j["a"],VAppBarNavIcon:k["a"],VAvatar:S["a"],VBtn:f["a"],VCol:P["a"],VFlex:q["a"],VIcon:L["a"],VList:T["a"],VListItem:A["a"],VListItemAction:O["a"],VListItemContent:E["a"],VListItemGroup:B["a"],VListItemTitle:E["b"],VMenu:I["a"],VNavigationDrawer:N["a"],VSpacer:_["a"],VToolbarTitle:D["a"]});var F={name:"App",components:{Navbar:H},data:()=>({})},$=F,G=a("7496"),J=a("a75b"),z=Object(d["a"])($,n,r,!1,null,null,null),K=z.exports;v()(z,{VApp:G["a"],VContent:J["a"]});a("e6cf");var R=a("8c4f"),U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dash"},[a("h1",{staticClass:"subheading grey--text"},[t._v("Dashboard")]),a("v-container",{staticClass:"my-5"},[a("v-row",{staticClass:"mb-3"},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mr-1",attrs:{small:"",flat:"",color:"grey-lighten4"},on:{click:function(e){return t.sortBy("title")}}},i),[a("v-icon",{staticClass:"left small"},[t._v("mdi-folder")]),a("span",{staticClass:"caption text-lowercase px-2"},[t._v("by Title")])],1)]}}])},[a("span",[t._v("Sort projects by Project Title")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mr-1",attrs:{small:"",flat:"",color:"grey-lighten4"},on:{click:function(e){return t.sortBy("person")}}},i),[a("v-icon",{staticClass:"left small"},[t._v("mdi-account")]),a("span",{staticClass:"caption text-lowercase px-2"},[t._v("by Person")])],1)]}}])},[a("span",[t._v("Sort projects by Project Title")])])],1),t._l(t.projects,(function(e){return a("v-card",{key:e.title,staticClass:"pl-3",attrs:{outlined:""}},[a("v-layout",{class:"pa-3 project "+e.status,attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Project Title")]),a("div",[t._v(t._s(e.title))])]),a("v-flex",{attrs:{xs4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Person")]),a("div",[t._v(t._s(e.person))])]),a("v-flex",{attrs:{xs4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Due")]),a("div",[t._v(t._s(e.due))])]),a("v-flex",{attrs:{xs4:"",md2:""}},[a("div",{staticClass:"text-right mr-4"},[a("v-chip",{staticClass:"v-chip--active white--text caption my-2",attrs:{small:"",color:""+e.status}},[t._v(t._s(e.status))])],1)])],1),a("v-divider")],1)}))],2)],1)},Q=[],W=(a("4e827"),{data(){return{projects:[{title:"Step 3: ???",person:"Helios",due:"1st Jan 2019",status:"ongoing",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Step 1: Learn how to make App",person:"Liv",due:"10th Jan 2019",status:"complete",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Step 2: Make App",person:"Kimono",due:"20th Dec 2018",status:"complete",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Step 4: Profit!",person:"Toenailz",due:"20th Oct 2018",status:"overdue",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Finish this app",person:"Helios",due:"22nd Apr 2020",status:"ongoing",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Start this app",person:"Helios",due:"3rd Feb 2020",status:"complete",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"}]}},methods:{sortBy(t){this.projects.sort((e,a)=>e[t]<a[t]?-1:1)}}}),X=W,Y=(a("c1b5"),a("cc20")),Z=a("a523"),tt=a("a722"),et=a("0fd9"),at=a("3a2f"),it=Object(d["a"])(X,U,Q,!1,null,null,null),nt=it.exports;v()(it,{VBtn:f["a"],VCard:g["a"],VChip:Y["a"],VContainer:Z["a"],VDivider:y["a"],VFlex:q["a"],VIcon:L["a"],VLayout:tt["a"],VRow:et["a"],VTooltip:at["a"]}),i["a"].use(R["a"]);const rt=[{path:"/",name:"dash",component:nt},{path:"/projects",name:"projects",component:()=>a.e("about").then(a.bind(null,"acca"))},{path:"/team",name:"team",component:()=>a.e("about").then(a.bind(null,"0767"))}],ot=new R["a"]({mode:"history",base:"/",routes:rt});var st=ot,lt=a("f309"),ct=a("fcf4");i["a"].use(lt["a"]);var ut=new lt["a"]({theme:{themes:{light:{primary:ct["a"].teal.lighten4,secondary:ct["a"].blueGrey.darken3,accent:ct["a"].green.accent2},dark:{primary:ct["a"].blueGrey.darken3,secondary:ct["a"].teal.lighten4,accent:ct["a"].green.accent2},success:ct["a"].green.lighten1,info:ct["a"].green.lighten5,error:ct["a"].red.lighten2,complete:ct["a"].green.lighten2,ongoing:ct["a"].teal.lighten5,overdue:ct["a"].red.lighten3}}}),pt=a("2f62");i["a"].use(pt["a"]);var dt=new pt["a"].Store({state:{},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:st,vuetify:ut,store:dt,render:t=>t(K)}).$mount("#app")},"7e4e":function(t,e,a){},c1b5:function(t,e,a){"use strict";var i=a("7e4e"),n=a.n(i);n.a}});
//# sourceMappingURL=app.29578acf.js.map