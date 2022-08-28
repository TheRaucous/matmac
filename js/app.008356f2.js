(function(){"use strict";var e={4417:function(e,t,n){var i=n(9242),a=n(3396),u=n(4870);const o={id:"header"},r={class:"container-left"},s={class:"container-right"},l=(0,a.Uk)("Home"),c=(0,a.Uk)("About"),m=(0,a.Uk)("Play Game"),d=(0,a.Uk)("Contact"),p={id:"mobile-menu"},f=(0,a.Uk)("Home"),v=(0,a.Uk)("About"),b=(0,a.Uk)("Play Game "),g=(0,a.Uk)("Contact "),h={};var _=(0,a.aZ)({...h,__name:"SiteHeader",setup(e){const t=(0,u.iH)(!1),n=(0,u.iH)(!1);function h(){window.location.href=V.sitePath}function _(){window.innerWidth<window.innerHeight||window.innerWidth<800?t.value=!0:(q(!1),t.value=!1)}function w(){q(!n.value)}function q(e){n.value=e,e?(scrollTo(0,0),document.body.style.overflow="hidden",onscroll=()=>scrollTo(0,0)):(document.body.style.overflow="visible",onscroll=null)}return(0,a.bv)((()=>{addEventListener("resize",_),_()})),(e,u)=>{const _=(0,a.up)("router-link"),k=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",o,[(0,a._)("div",r,[(0,a._)("button",{id:"logo",class:"logo",onClick:u[0]||(u[0]=e=>h())})]),(0,a._)("div",s,[(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(_,{to:"/",class:"header-link"},{default:(0,a.w5)((()=>[l])),_:1}),(0,a.Wm)(_,{to:"/about",class:"header-link"},{default:(0,a.w5)((()=>[c])),_:1}),(0,a.Wm)(_,{to:"/game",class:"header-link"},{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)(_,{to:"/contact",class:"header-link"},{default:(0,a.w5)((()=>[d])),_:1})],512),[[i.F8,!t.value]]),(0,a.wy)((0,a._)("button",{class:"mobile-menu-button",onClick:u[1]||(u[1]=e=>w())},[n.value?((0,a.wg)(),(0,a.j4)(k,{key:0,icon:"xmark",class:"mobile-menu-button-icon"})):((0,a.wg)(),(0,a.j4)(k,{key:1,icon:"bars",class:"mobile-menu-button-icon"}))],512),[[i.F8,t.value]])])]),(0,a.wy)((0,a._)("div",null,[(0,a._)("div",p,[(0,a.Wm)(_,{to:"/",class:"mobile-header-link",onClick:u[2]||(u[2]=e=>q(!1))},{default:(0,a.w5)((()=>[f])),_:1}),(0,a.Wm)(_,{to:"/about",class:"mobile-header-link",onClick:u[3]||(u[3]=e=>q(!1))},{default:(0,a.w5)((()=>[v])),_:1}),(0,a.Wm)(_,{to:"/game",class:"mobile-header-link",onClick:u[4]||(u[4]=e=>q(!1))},{default:(0,a.w5)((()=>[b])),_:1}),(0,a.Wm)(_,{to:"/contact",class:"mobile-header-link no-bottom-border",onClick:u[5]||(u[5]=e=>q(!1))},{default:(0,a.w5)((()=>[g])),_:1})]),(0,a._)("div",{class:"mobile-menu-background",onClick:u[6]||(u[6]=e=>q(!1))})],512),[[i.F8,n.value]])],64)}}}),w=n(89);const q=(0,w.Z)(_,[["__scopeId","data-v-19eab3f7"]]);var k=q;const y=e=>((0,a.dD)("data-v-931db75e"),e=e(),(0,a.Cn)(),e),C={id:"footer"},A={class:"container"},E=["href"],P=["href"],N=["href"],S=["href"],O={class:"container"},j={href:"https://www.youtube.com/channel/UC0NZVdg40AoCdapNvmstLOg"},W={href:"https://discord.com/"},U={href:"https://github.com/TheRaucous/"},T={class:"container"},H=(0,a.Uk)("Made with"),L={href:"https://vuejs.org/"},F=y((()=>(0,a._)("div",{class:"container no-bottom-border"},[(0,a._)("h6",null,"© 2022. All right reserved.")],-1))),D={};var M=(0,a.aZ)({...D,__name:"SiteFooter",setup(e){function t(){return V.sitePath}return(e,n)=>{const i=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("div",C,[(0,a._)("div",A,[(0,a._)("a",{href:t()},"Home",8,E),(0,a._)("a",{href:t()+"about"},"About",8,P),(0,a._)("a",{href:t()+"game"},"Game",8,N),(0,a._)("a",{href:t()+"contact"},"Contact",8,S)]),(0,a._)("div",O,[(0,a._)("a",j,[(0,a.Wm)(i,{icon:["fab","youtube"]})]),(0,a._)("a",W,[(0,a.Wm)(i,{icon:["fab","discord"],target:"_blank",rel:"noopener"})]),(0,a._)("a",U,[(0,a.Wm)(i,{icon:["fab","github"],target:"_blank",rel:"noopener"})])]),(0,a._)("div",T,[(0,a._)("p",null,[H,(0,a._)("a",L,[(0,a.Wm)(i,{icon:["fab","vuejs"]})])])]),F])}}});const I=(0,w.Z)(M,[["__scopeId","data-v-931db75e"]]);var x=I;const Z="/matmac/",G={sitePath:Z};var B=(0,a.aZ)({...G,__name:"App",setup(e){return(e,t)=>{const n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(k),(0,a.Wm)(n),(0,a.Wm)(x)],64)}}});const R=B;var V=R,Y=n(2483);const z=e=>((0,a.dD)("data-v-0ef3e883"),e=e(),(0,a.Cn)(),e),Q=z((()=>(0,a._)("head",null,[(0,a._)("title",null,"MatMac - Home")],-1))),K=z((()=>(0,a._)("div",{class:"page-body-container"},[(0,a._)("h1",null,"Home"),(0,a._)("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim praesent elementum. Egestas pretium aenean pharetra magna ac. A condimentum vitae sapien pellentesque habitant morbi. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Pulvinar etiam non quam lacus suspendisse faucibus. Fermentum odio eu feugiat pretium nibh ipsum. Quis hendrerit dolor magna eget est lorem ipsum. Proin sagittis nisl rhoncus mattis. Cursus metus aliquam eleifend mi in nulla. Metus aliquam eleifend mi in nulla posuere. Sollicitudin aliquam ultrices sagittis orci a. Pharetra diam sit amet nisl suscipit adipiscing. Urna duis convallis convallis tellus id interdum velit laoreet. Suspendisse faucibus interdum posuere lorem ipsum dolor. Urna id volutpat lacus laoreet. Lorem ipsum dolor sit amet consectetur adipiscing elit. "),(0,a._)("p",null," Dui nunc mattis enim ut tellus. A iaculis at erat pellentesque adipiscing commodo. Hendrerit dolor magna eget est. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Imperdiet dui accumsan sit amet. Senectus et netus et malesuada fames ac turpis egestas sed. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Nunc mattis enim ut tellus elementum sagittis vitae et. Fringilla ut morbi tincidunt augue interdum velit euismod in. Quis hendrerit dolor magna eget est lorem ipsum. Non curabitur gravida arcu ac. Elementum tempus egestas sed sed risus pretium. Nam libero justo laoreet sit amet cursus sit amet dictum. Non arcu risus quis varius quam quisque. "),(0,a._)("p",null," Eu mi bibendum neque egestas congue quisque egestas diam in. Aenean euismod elementum nisi quis eleifend quam adipiscing. Mi bibendum neque egestas congue quisque. Risus sed vulputate odio ut enim blandit volutpat maecenas. Sed velit dignissim sodales ut eu sem integer vitae. Et tortor consequat id porta nibh venenatis. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Lacus viverra vitae congue eu consequat ac felis donec. Commodo odio aenean sed adipiscing diam donec adipiscing. Purus gravida quis blandit turpis cursus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Diam sollicitudin tempor id eu nisl. Natoque penatibus et magnis dis parturient montes. Lacus laoreet non curabitur gravida arcu. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Tortor condimentum lacinia quis vel eros. "),(0,a._)("p",null," Placerat orci nulla pellentesque dignissim enim. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Volutpat odio facilisis mauris sit amet. Urna porttitor rhoncus dolor purus non enim. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Odio ut enim blandit volutpat maecenas. Risus commodo viverra maecenas accumsan lacus. Viverra nibh cras pulvinar mattis nunc. Fermentum et sollicitudin ac orci phasellus egestas. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Ut sem nulla pharetra diam sit amet. Egestas integer eget aliquet nibh praesent tristique. "),(0,a._)("p",null," Sit amet aliquam id diam. Nulla pellentesque dignissim enim sit amet venenatis. Sapien nec sagittis aliquam malesuada bibendum. Egestas sed tempus urna et pharetra pharetra massa. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sed risus pretium quam vulputate dignissim suspendisse in est. Congue mauris rhoncus aenean vel elit scelerisque. Nullam non nisi est sit. Aliquam ut porttitor leo a diam. Praesent elementum facilisis leo vel fringilla est. Eu mi bibendum neque egestas congue. Ac feugiat sed lectus vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada. Ipsum consequat nisl vel pretium lectus. Lacus vestibulum sed arcu non odio euismod lacinia. ")],-1)));function J(e,t){return(0,a.wg)(),(0,a.iD)(a.HY,null,[Q,K],64)}const X={},$=(0,w.Z)(X,[["render",J],["__scopeId","data-v-0ef3e883"]]);var ee=$;const te=[{path:"/",name:"home",component:ee},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,5671))},{path:"/game",name:"game",component:()=>n.e(473).then(n.bind(n,5473))},{path:"/contact",name:"contact",component:()=>n.e(56).then(n.bind(n,2056))}],ne=(0,Y.p7)({history:(0,Y.PO)("/matmac/"),routes:te});var ie=ne,ae=n(65),ue=(0,ae.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),oe=n(7749),re=n(8125),se=n(8321),le=n(2234);re.vI.add(se.xiG,se.g82,le.opf,le.omb,le.iEy,le.zhw),(0,i.ri)(V).component("font-awesome-icon",oe.GN).use(ue).use(ie).mount("#app")}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var u=t[i]={exports:{}};return e[i](u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,u){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],a=e[c][1],u=e[c][2];for(var r=!0,s=0;s<i.length;s++)(!1&u||o>=u)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(r=!1,u<o&&(o=u));if(r){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[i,a,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{56:"20a0c596",443:"345b0662",473:"9fd5f65d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{56:"998c8925",443:"9cd327ab",473:"3da74e28"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="new-vue-website:";n.l=function(i,a,u,o){if(e[i])e[i].push(a);else{var r,s;if(void 0!==u)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var m=l[c];if(m.getAttribute("src")==i||m.getAttribute("data-webpack")==t+u){r=m;break}}r||(s=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+u),r.src=i),e[i]=[a];var d=function(t,n){r.onerror=r.onload=null,clearTimeout(p);var a=e[i];if(delete e[i],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=d.bind(null,r.onerror),r.onload=d.bind(null,r.onload),s&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/matmac/"}(),function(){var e=function(e,t,n,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var u=function(u){if(a.onerror=a.onload=null,"load"===u.type)n();else{var o=u&&("load"===u.type?"missing":u.type),r=u&&u.target&&u.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=r,a.parentNode.removeChild(a),i(s)}};return a.onerror=a.onload=u,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var a=n[i],u=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(u===e||u===t))return a}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){a=o[i],u=a.getAttribute("data-href");if(u===e||u===t)return a}},i=function(i){return new Promise((function(a,u){var o=n.miniCssF(i),r=n.p+o;if(t(o,r))return a();e(i,r,a,u)}))},a={143:0};n.f.miniCss=function(e,t){var n={56:1,443:1,473:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=i(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,i){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)i.push(a[2]);else{var u=new Promise((function(n,i){a=e[t]=[n,i]}));i.push(a[2]=u);var o=n.p+n.u(t),r=new Error,s=function(i){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var u=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;r.message="Loading chunk "+t+" failed.\n("+u+": "+o+")",r.name="ChunkLoadError",r.type=u,r.request=o,a[1](r)}};n.l(o,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,u,o=i[0],r=i[1],s=i[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(s)var c=s(n)}for(t&&t(i);l<o.length;l++)u=o[l],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(c)},i=self["webpackChunknew_vue_website"]=self["webpackChunknew_vue_website"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4417)}));i=n.O(i)})();
//# sourceMappingURL=app.008356f2.js.map