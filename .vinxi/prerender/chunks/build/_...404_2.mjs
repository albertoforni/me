import { ssr, ssrHydrationKey, escape, createComponent } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/solid-js@1.9.3/node_modules/solid-js/web/dist/server.js';
import { I, J } from '../nitro/nitro.mjs';
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
import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/solid-js@1.9.3/node_modules/solid-js/dist/server.js';
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

var i = ["<main", "><!--$-->", "<!--/--><!--$-->", '<!--/--><h1>Page Not Found</h1><p>Visit <a href="https://start.solidjs.com" target="_blank">start.solidjs.com</a> to learn how to build SolidStart apps.</p></main>'];
function m() {
  return ssr(i, ssrHydrationKey(), escape(createComponent(I, { children: "Not Found" })), escape(createComponent(J, { code: 404 })));
}

export { m as default };
//# sourceMappingURL=_...404_2.mjs.map
