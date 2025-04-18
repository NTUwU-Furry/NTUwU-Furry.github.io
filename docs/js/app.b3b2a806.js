(function(){"use strict";var e={5119:function(e,t,n){var r=n(5130),o=n(6768);const a={class:"new-version"},i=["src"];function u(e,t,n,r,u,s){const l=(0,o.g2)("NavbarSection"),c=(0,o.g2)("FooterSection");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(l),(0,o.Lk)("div",a,[t[0]||(t[0]=(0,o.Lk)("p",null,[(0,o.eW)(" 新版網頁開發中"),(0,o.Lk)("br"),(0,o.eW)(" 敬請期待 ")],-1)),(0,o.Lk)("img",{class:"image",src:e.pine_yippee},null,8,i)]),(0,o.bF)(c)],64)}var s=n(4232);const l={id:"navbar"},c={id:"main-navbar"},d=["src"],f={id:"menu"},m={id:"sub-navbar"},p={class:"font-size"},v=["id","value"],h=["for"];function g(e,t,n,a,i,u){const g=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("nav",l,[(0,o.Lk)("section",c,[(0,o.bF)(g,{to:"/"},{default:(0,o.k6)((()=>[(0,o.Lk)("img",{src:e.logo,alt:""},null,8,d)])),_:1}),(0,o.Lk)("ul",f,[(0,o.bF)(g,{to:"/"},{default:(0,o.k6)((()=>[(0,o.eW)((0,s.v_)(e.$t("navbar.home")),1)])),_:1}),(0,o.bF)(g,{to:"/about"},{default:(0,o.k6)((()=>[(0,o.eW)((0,s.v_)(e.$t("navbar.about")),1)])),_:1})]),(0,o.Lk)("i",{class:"fa fa-bars menu-button",onClick:t[0]||(t[0]=(...t)=>e.handleMenu&&e.handleMenu(...t))})]),(0,o.Lk)("section",m,[(0,o.Lk)("section",p,[t[2]||(t[2]=(0,o.Lk)("div",null,"字級：",-1)),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.fontSizes,((n,a)=>((0,o.uX)(),(0,o.CE)("li",{key:a},[(0,o.bo)((0,o.Lk)("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=t=>e.fontSize=t),id:"font-size-"+a,value:n.label},null,8,v),[[r.XL,e.fontSize]]),(0,o.Lk)("label",{for:"font-size-"+a},(0,s.v_)(e.$t("navbar.fontSize."+n.label)),9,h)])))),128))])])])])}n(8992),n(2577);var b=n(4570),k=n.n(b),y=n.p+"img/logo.a12c7e03.svg";const w=k();var L=(0,o.pM)({name:"NavbarSection",data(){return{logo:y,fontSize:"medium",fontSizes:[{label:"small",size:"75%"},{label:"medium",size:"100%"},{label:"big",size:"125%"}]}},computed:{getLoginInfo(){return this.$store.getters["user"]}},methods:{applyFontSize(e){document.documentElement.style.fontSize=this.fontSizes.find((t=>t.label===e))?.size||"100%"},handleMenu(){document.querySelector("#menu")?.classList.toggle("open")}},mounted(){const e=w.get("fontSize")||"medium";this.fontSize=e,this.applyFontSize(e)},watch:{fontSize(e){w.set("fontSize",e,"7d"),this.applyFontSize(e)}}}),E=n(1241);const S=(0,E.A)(L,[["render",g],["__scopeId","data-v-1892c440"]]);var _=S;const z={id:"footer"},C={id:"main-footer"},A=["href","innerHTML"],F={id:"sub-footer"};function T(e,t,n,r,a,i){return(0,o.uX)(),(0,o.CE)("footer",z,[(0,o.Lk)("section",C,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.footers,((t,n)=>((0,o.uX)(),(0,o.CE)("div",{key:n},[(0,o.Lk)("h3",null,(0,s.v_)(e.$t("footer."+t.title)),1),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.links,((e,t)=>((0,o.uX)(),(0,o.CE)("li",{key:t},[(0,o.Lk)("a",{href:e.href,innerHTML:e.name,target:"_blank",title:"另開新視窗"},null,8,A)])))),128))])])))),128)),t[0]||(t[0]=(0,o.Lk)("div",{class:"info"},[(0,o.Lk)("h3",null,"地址"),(0,o.Lk)("p",{class:"address"},"10617台北市大安區羅斯福路四段1號"),(0,o.Lk)("div",{class:"map"},[(0,o.Lk)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28921.158758621583!2d121.50924813054208!3d25.02915808041867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a989fe322ea9%3A0x21750404ee1d7f66!2z5ZyL56uL6Ie654Gj5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1732971834244!5m2!1szh-TW!2stw",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})])],-1))]),(0,o.Lk)("section",F,[(0,o.Lk)("p",null,(0,s.v_)(e.$t("footer.copyright",{year:e.getYear})),1)])])}var O=(0,o.pM)({name:"FooterSection",data(){return{footers:[{title:"friend",links:[{name:"成大獸文化社 | 臉書",href:"https://www.facebook.com/NCKUFurry/"},{name:"雲科大獸文化社 | 臉書",href:"https://www.facebook.com/profile.php?id=61567748815733"}]},{title:"media",links:[{name:"Facebook",href:"https://www.facebook.com/NTUFurry/?locale=zh_TW"},{name:"Youtube",href:"#"},{name:"Ingstram",href:"https://www.instagram.com/furriesatntu/"},{name:"Twitter",href:"https://x.com/NTUFurries"},{name:"Mail",href:"mailto:ntufurry@gmail.com"}]},{title:"operation",links:[{name:"登入點數系統 (只限社員)",href:"http://3.27.251.63"}]}]}},computed:{getYear(){return(new Date).getFullYear()}}});const x=(0,E.A)(O,[["render",T],["__scopeId","data-v-5ca1577f"]]);var N=x,j=n.p+"img/松果YIPPEE.6e70a39d.png",M=(0,o.pM)({name:"App",components:{NavbarSection:_,FooterSection:N},data(){return{pine_yippee:j}}});const X=(0,E.A)(M,[["render",u]]);var D=X,I=n(1387);const $={id:"home"},P={class:"header"},W=["src"],K={class:"event"},B={key:0,class:"event-list"},Y={key:1};function H(e,t,n,r,a,i){const u=(0,o.g2)("EventBox");return(0,o.uX)(),(0,o.CE)("section",$,[(0,o.Lk)("div",P,[(0,o.Lk)("img",{src:e.header_image,alt:""},null,8,W)]),t[1]||(t[1]=(0,o.Lk)("div",{class:"intro"},[(0,o.Lk)("h2",null,"社團簡介"),(0,o.Lk)("p",null,[(0,o.eW)(" 本社致力於塑造一個尊重、友善、包容的空間，"),(0,o.Lk)("br"),(0,o.eW)(" 旨在讓對獸文化有興趣的個體能夠自由地分享經驗、聚會聯絡，"),(0,o.Lk)("br"),(0,o.eW)(" 並期許以通俗易懂的方式向大眾介紹獸文化 ")])],-1)),(0,o.Lk)("div",K,[t[0]||(t[0]=(0,o.Lk)("h2",null,"近期活動",-1)),e.latestEvents.length>0?((0,o.uX)(),(0,o.CE)("section",B,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.latestEvents,((e,t)=>((0,o.uX)(),(0,o.Wv)(u,{key:t,event:e},null,8,["event"])))),128))])):((0,o.uX)(),(0,o.CE)("p",Y,"無"))])])}n(4520);var U=n(5142),q=n(4373),J=n.p+"img/header.ab057fe3.jpg",V=(0,o.pM)({name:"HomeView",components:{EventBox:U.A},data(){return{latestEvents:[],header_image:J}},methods:{async getLatestEvents(){let e=await q.A.get("https://www.googleapis.com/calendar/v3/calendars/af5e41829a41e0d4a57af5e2fffc8fda2483d0c4863aad147e4c15bc6996b731@group.calendar.google.com/events?key=AIzaSyAc7m0zPd3eNhYj8k4_5opx6iCj5O9-Q_c");const t=new Date;this.latestEvents=e.data.items.filter((e=>new Date(e.start.dateTime)>t)).sort(((e,t)=>new Date(e.start.dateTime)-new Date(t.start.dateTime))).slice(0,3)}},mounted(){this.getLatestEvents()}});const G=(0,E.A)(V,[["render",H],["__scopeId","data-v-08572cba"]]);var Q=G;const Z=[{path:"/",name:"home",component:Q,meta:{title:"台大獸文化交流社 | 首頁",KeepAlive:!0}},{path:"/about",name:"about",component:()=>n.e(355).then(n.bind(n,4355)),meta:{title:"台大獸文化交流社 | 關於我們",KeepAlive:!0}},{path:"/404",name:"not",component:()=>n.e(885).then(n.bind(n,2356)),meta:{title:"找不到頁面",KeepAlive:!0}},{path:"/:catchAll(.*)",redirect:"/404"}],R=(0,I.aE)({history:(0,I.LA)("/"),routes:Z});var ee=R,te=n(782),ne=(0,te.y$)({state:{user:null},getters:{user(e){return e.user}},mutations:{},actions:{},modules:{}}),re=n(5931),oe=JSON.parse('{"navbar":{"home":"首頁","about":"關於","product":"周邊","login":"登入點數系統","dashboard":"儀表盤","logout":"登出","fontSize":{"small":"小","medium":"中","big":"大"}},"footer":{"friend":"友社連結","media":"社交媒體","operation":"快速操作","copyright":"版權所有 © 2024 - {year} 台大獸文化交流社"}}'),ae=JSON.parse('{"navbar":{"home":"Home","about":"About","product":"Product","login":"Login","dashboard":"Dashboard","logout":"Logout"}}'),ie=(0,re.hU)({locale:"zh",fallbackLocale:"zh",messages:{zh:oe,en:ae}});let ue=window;window.frameElement&&"parent"===window.frameElement.getAttribute("tiledesk_context")&&(ue=window.parent),ue.axios=q.A,ee.beforeEach(((e,t,n)=>{ue.document.title=void 0==e.meta.title?"默认标题":e.meta.title,n()})),(0,r.Ef)(D).use(ne).use(ee).use(ie).use(k()).mount("#app")},5142:function(e,t,n){n.d(t,{A:function(){return d}});var r=n(6768),o=n(4232);const a={id:"eventbox"},i={class:"description"};function u(e,t,n,u,s,l){return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.Lk)("h3",null,(0,o.v_)(e.event.summary),1),(0,r.Lk)("p",i,(0,o.v_)(e.event.description),1),(0,r.Lk)("p",null,"活動日期: "+(0,o.v_)(e.formatDate(e.event.start.dateTime)),1)])}var s=(0,r.pM)({name:"EventBox",props:{event:{type:Object,required:!0,validator(e){return e&&"string"===typeof e.summary&&"string"===typeof e.description&&e.start?.dateTime&&e.end?.dateTime}}},methods:{formatDate(e){const t=new Date(e);return`${t.getFullYear()}年 ${t.getMonth()+1}月 ${t.getDate()}日 ${t.getHours()}時 ${t.getMinutes().toString().padStart(2,"0")}分`},calculateDuration(e,t){const n=new Date(e),r=new Date(t),o=r.getTime()-n.getTime();return(o/36e5).toFixed(2)}}}),l=n(1241);const c=(0,l.A)(s,[["render",u],["__scopeId","data-v-adf9059e"]]);var d=c}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{355:"121b81a3",885:"5a8f3c54"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{355:"8e723650",885:"ddcc75ca"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ntuwu-furry-website:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var r=n&&n.type,u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=u,i.parentNode&&i.parentNode.removeChild(i),a(s)}};return i.onerror=i.onload=u,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,null,o,a)}))},o={524:0};n.f.miniCss=function(e,t){var n={355:1,885:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],s=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var c=s(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkntuwu_furry_website"]=self["webpackChunkntuwu_furry_website"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(5119)}));r=n.O(r)})();
//# sourceMappingURL=app.b3b2a806.js.map