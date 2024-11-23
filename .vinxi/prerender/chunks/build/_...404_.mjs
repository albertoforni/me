import { ssr, ssrHydrationKey, escape, createComponent, isServer, getRequestEvent } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/solid-js@1.9.3/node_modules/solid-js/web/dist/server.js';
import { I } from './index22.mjs';
import { onCleanup } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/solid-js@1.9.3/node_modules/solid-js/dist/server.js';

const u=isServer?e=>{const t=getRequestEvent();return t.response.status=e.code,t.response.statusText=e.text,onCleanup(()=>!t.nativeEvent.handled&&!t.complete&&(t.response.status=200)),null}:e=>null;var d=["<main","><!--$-->","<!--/--><!--$-->",'<!--/--><h1>Page Not Found</h1><p>Visit <a href="https://start.solidjs.com" target="_blank">start.solidjs.com</a> to learn how to build SolidStart apps.</p></main>'];function f(){return ssr(d,ssrHydrationKey(),escape(createComponent(I,{children:"Not Found"})),escape(createComponent(u,{code:404})))}

export { f as default };
//# sourceMappingURL=_...404_.mjs.map
