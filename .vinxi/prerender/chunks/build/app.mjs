import { createComponent, isServer, getRequestEvent, delegateEvents } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/solid-js@1.9.3/node_modules/solid-js/web/dist/server.js';
import { K, I as I$1, L, H } from './index22.mjs';
import { s as si } from '../nitro/nitro.mjs';
import { Suspense, createSignal, onCleanup, children, createMemo, getOwner, untrack, Show, on, createRoot, sharedConfig } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/solid-js@1.9.3/node_modules/solid-js/dist/server.js';
import { _ as _e, Q, g as ge, q as qe, O as Oe, D as De, a as Ce, U as Ue, e as ee, b as $, v as ve, M as Me } from './routing.mjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/node-fetch-native@1.6.4/node_modules/node-fetch-native/dist/polyfill.cjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/h3@1.13.0/node_modules/h3/dist/index.mjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/unenv@1.10.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/vinxi@0.4.3_@types+node@22.9.1_ioredis@5.4.1_lightningcss@1.28.1_terser@5.36.0_typescript@5.6.3/node_modules/vinxi/lib/app-fetch.js';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/vinxi@0.4.3_@types+node@22.9.1_ioredis@5.4.1_lightningcss@1.28.1_terser@5.36.0_typescript@5.6.3/node_modules/vinxi/lib/app-manifest.js';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/ufo@1.5.4/node_modules/ufo/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/solid-js@1.9.3/node_modules/solid-js/web/storage/dist/storage.js';
import 'node:async_hooks';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/ohash@1.1.4/node_modules/ohash/dist/index.mjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/unstorage@1.13.1_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/unstorage@1.13.1_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/unstorage@1.13.1_ioredis@5.4.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';

const I=t=>n=>{const{base:o}=n,r=children(()=>n.children),e=createMemo(()=>Oe(r(),n.base||""));let i;const c=De(t,e,()=>i,{base:o,singleFlight:n.singleFlight,transformUrl:n.transformUrl});return t.create&&t.create(c),createComponent(Ce.Provider,{value:c,get children(){return createComponent(rt,{routerState:c,get root(){return n.root},get preload(){return n.rootPreload||n.rootLoad},get children(){return [(i=getOwner())&&null,createComponent(ot,{routerState:c,get branches(){return e()}})]}})}})};function rt(t){const n=t.routerState.location,o=t.routerState.params,r=createMemo(()=>t.preload&&untrack(()=>{t.preload({params:o,location:n,intent:Me()||"initial"});}));return createComponent(Show,{get when(){return t.root},keyed:!0,get fallback(){return t.children},children:e=>createComponent(e,{params:o,location:n,get data(){return r()},get children(){return t.children}})})}function ot(t){if(isServer){const e=getRequestEvent();if(e&&e.router&&e.router.dataOnly){at(e,t.routerState,t.branches);return}e&&((e.router||(e.router={})).matches||(e.router.matches=t.routerState.matches().map(({route:i,path:c,params:f})=>({path:i.originalPath,pattern:i.pattern,match:c,params:f,info:i.info}))));}const n=[];let o;const r=createMemo(on(t.routerState.matches,(e,i,c)=>{let f=i&&e.length===i.length;const m=[];for(let l=0,w=e.length;l<w;l++){const p=i&&i[l],g=e[l];c&&p&&g.route.key===p.route.key?m[l]=c[l]:(f=!1,n[l]&&n[l](),createRoot(v=>{n[l]=v,m[l]=Ue(t.routerState,m[l-1]||t.routerState.base,C(()=>r()[l+1]),()=>t.routerState.matches()[l]);}));}return n.splice(e.length).forEach(l=>l()),c&&f?c:(o=m[0],m)}));return C(()=>r()&&o)()}const C=t=>()=>createComponent(Show,{get when(){return t()},keyed:!0,children:n=>createComponent(ee.Provider,{value:n,get children(){return n.outlet()}})});function at(t,n,o){const r=new URL(t.request.url),e=$(o,new URL(t.router.previousUrl||t.request.url).pathname),i=$(o,r.pathname);for(let c=0;c<i.length;c++){(!e[c]||i[c].route!==e[c].route)&&(t.router.dataOnly=!0);const{route:f,params:m}=i[c];f.preload&&f.preload({params:m,location:n.location,intent:"preload"});}}function st([t,n],o,r){return [t,r?e=>n(r(e)):n]}function it(t){let n=!1;const o=e=>typeof e=="string"?{value:e}:e,r=st(createSignal(o(t.get()),{equals:(e,i)=>e.value===i.value&&e.state===i.state}),void 0,e=>(!n&&t.set(e),sharedConfig.registry&&!sharedConfig.done&&(sharedConfig.done=!0),e));return t.init&&onCleanup(t.init((e=t.get())=>{n=!0,r[1](o(e)),n=!1;})),I({signal:r,create:t.create,utils:t.utils})}function ct(t,n,o){return t.addEventListener(n,o),()=>t.removeEventListener(n,o)}function ut(t,n){const o=t&&document.getElementById(t);o?o.scrollIntoView():n&&window.scrollTo(0,0);}function lt(t){const n=new URL(t);return n.pathname+n.search}function dt(t){let n;const o={value:t.url||(n=getRequestEvent())&&lt(n.request.url)||""};return I({signal:[()=>o,r=>Object.assign(o,r)]})(t)}const ht=new Map;function mt(t=!0,n=!1,o="/_server",r){return e=>{const i=e.base.path(),c=e.navigatorFactory(e.base);let f,m;function l(a){return a.namespaceURI==="http://www.w3.org/2000/svg"}function w(a){if(a.defaultPrevented||a.button!==0||a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)return;const s=a.composedPath().find(k=>k instanceof Node&&k.nodeName.toUpperCase()==="A");if(!s||n&&!s.hasAttribute("link"))return;const d=l(s),u=d?s.href.baseVal:s.href;if((d?s.target.baseVal:s.target)||!u&&!s.hasAttribute("state"))return;const b=(s.getAttribute("rel")||"").split(/\s+/);if(s.hasAttribute("download")||b&&b.includes("external"))return;const y=d?new URL(u,document.baseURI):new URL(u);if(!(y.origin!==window.location.origin||i&&y.pathname&&!y.pathname.toLowerCase().startsWith(i.toLowerCase())))return [s,y]}function p(a){const s=w(a);if(!s)return;const[d,u]=s,E=e.parsePath(u.pathname+u.search+u.hash),b=d.getAttribute("state");a.preventDefault(),c(E,{resolve:!1,replace:d.hasAttribute("replace"),scroll:!d.hasAttribute("noscroll"),state:b?JSON.parse(b):void 0});}function g(a){const s=w(a);if(!s)return;const[d,u]=s;r&&(u.pathname=r(u.pathname)),e.preloadRoute(u,d.getAttribute("preload")!=="false");}function v(a){clearTimeout(f);const s=w(a);if(!s)return m=null;const[d,u]=s;m!==d&&(r&&(u.pathname=r(u.pathname)),f=setTimeout(()=>{e.preloadRoute(u,d.getAttribute("preload")!=="false"),m=d;},20));}function A(a){if(a.defaultPrevented)return;let s=a.submitter&&a.submitter.hasAttribute("formaction")?a.submitter.getAttribute("formaction"):a.target.getAttribute("action");if(!s)return;if(!s.startsWith("https://action/")){const u=new URL(s,ve);if(s=e.parsePath(u.pathname+u.search),!s.startsWith(o))return}if(a.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const d=ht.get(s);if(d){a.preventDefault();const u=new FormData(a.target,a.submitter);d.call({r:e,f:a.target},a.target.enctype==="multipart/form-data"?u:new URLSearchParams(u));}}delegateEvents(["click","submit"]),document.addEventListener("click",p),t&&(document.addEventListener("mousemove",v,{passive:!0}),document.addEventListener("focusin",g,{passive:!0}),document.addEventListener("touchstart",g,{passive:!0})),document.addEventListener("submit",A),onCleanup(()=>{document.removeEventListener("click",p),t&&(document.removeEventListener("mousemove",v),document.removeEventListener("focusin",g),document.removeEventListener("touchstart",g)),document.removeEventListener("submit",A);});}}function ft(t){if(isServer)return dt(t);const n=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,e=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return {value:r+window.location.hash,state:e}},o=ge();return it({get:n,set({value:r,replace:e,scroll:i,state:c}){e?window.history.replaceState(_e(c),"",r):window.history.pushState(c,"",r),ut(decodeURIComponent(window.location.hash.slice(1)),i),Q();},init:r=>ct(window,"popstate",qe(r,e=>{if(e&&e<0)return !o.confirm(e);{const i=n();return !o.confirm(i.value,{state:i.state})}})),create:mt(t.preload,t.explicitLinks,t.actionBase,t.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:o}})(t)}function St(){return createComponent(ft,{root:t=>createComponent(K,{get children(){return [createComponent(I$1,{children:"Alberto Forni"}),createComponent(L,{name:"viewport",content:"width=device-width, initial-scale=1"}),createComponent(H,{rel:"preconnect",href:"https://fonts.googleapis.com"}),createComponent(H,{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:"anonymous"}),createComponent(H,{href:"https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap",rel:"stylesheet"}),createComponent(Suspense,{get children(){return t.children}})]}}),get children(){return createComponent(si,{})}})}

export { St as default };
//# sourceMappingURL=app.mjs.map
