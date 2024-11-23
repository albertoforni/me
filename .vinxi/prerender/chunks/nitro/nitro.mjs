import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/node-fetch-native@1.6.4/node_modules/node-fetch-native/dist/polyfill.cjs';
import destr from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import { getRequestHeader, splitCookiesString, setResponseHeader, setResponseStatus, send, eventHandler, appendResponseHeader, removeResponseHeader, createError, getResponseHeader, H3Event, setHeader, getRequestIP, getResponseStatus, getResponseStatusText, getCookie, setCookie, getRequestURL, getResponseHeaders, getRequestWebStream, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, fetchWithEvent, isEvent, setHeaders, proxyRequest, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/h3@1.13.0/node_modules/h3/dist/index.mjs';
import { createHooks } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/unenv@1.10.0/node_modules/unenv/runtime/fetch/index.mjs';
import _2zPDKV9ZV9 from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/vinxi@0.4.3_@types+node@22.9.1_ioredis@5.4.1_lightningcss@1.28.1_terser@5.36.0_typescript@5.6.3/node_modules/vinxi/lib/app-fetch.js';
import _4vJabcP823 from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/vinxi@0.4.3_@types+node@22.9.1_ioredis@5.4.1_lightningcss@1.28.1_terser@5.36.0_typescript@5.6.3/node_modules/vinxi/lib/app-manifest.js';
import { decodePath, withLeadingSlash, withoutTrailingSlash, parseURL, joinURL, withoutBase, getQuery, withQuery } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/ufo@1.5.4/node_modules/ufo/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import { sharedConfig, lazy, createComponent, createContext, onCleanup, createUniqueId, useContext, createRenderEffect, createMemo, createSignal, on as on$1, runWithOwner, getOwner, startTransition, resetErrorBoundaries, batch, untrack, Suspense, ErrorBoundary, catchError, children, Show, createRoot } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/solid-js@1.9.3/node_modules/solid-js/dist/server.js';
import { renderToString, isServer, getRequestEvent, ssrElement, escape, mergeProps, ssr, createComponent as createComponent$1, spread, useAssets, renderToStream, ssrHydrationKey, NoHydration, HydrationScript, ssrAttribute, Hydration, delegateEvents } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/solid-js@1.9.3/node_modules/solid-js/web/dist/server.js';
import { provideRequestEvent } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/solid-js@1.9.3/node_modules/solid-js/web/storage/dist/storage.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { hash } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/ohash@1.1.4/node_modules/ohash/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/unstorage@1.13.1_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/unstorage@1.13.1_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/unstorage@1.13.1_ioredis@5.4.1/node_modules/unstorage/drivers/fs-lite.mjs';
import { klona } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error, isDev) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.unhandled ? "internal server error" : error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(
      error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    if (statusCode === 404) {
      setResponseHeader(event, "Cache-Control", "no-cache");
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    }
    setResponseHeader(event, "Content-Type", "text/html");
    return send(event, renderHTMLError(errorObject));
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const appConfig$1 = {"name":"vinxi","routers":[{"name":"public","type":"static","base":"/","dir":"./public","root":"/Users/albertoforni/Projects/me","order":0,"outDir":"/Users/albertoforni/Projects/me/.vinxi/build/public"},{"name":"ssr","type":"http","link":{"client":"client"},"handler":"src/entry-server.tsx","extensions":["js","jsx","ts","tsx"],"target":"server","root":"/Users/albertoforni/Projects/me","base":"/","outDir":"/Users/albertoforni/Projects/me/.vinxi/build/ssr","order":1},{"name":"client","type":"client","base":"/_build","handler":"src/entry-client.tsx","extensions":["js","jsx","ts","tsx"],"target":"browser","root":"/Users/albertoforni/Projects/me","outDir":"/Users/albertoforni/Projects/me/.vinxi/build/client","order":2},{"name":"server-fns","type":"http","base":"/_server","handler":"node_modules/.pnpm/@solidjs+start@1.0.10_solid-js@1.9.3_vinxi@0.4.3_@types+node@22.9.1_ioredis@5.4.1_lightningcs_7xqgdit5vzzosv72rtqlaxn3aa/node_modules/@solidjs/start/dist/runtime/server-handler.js","target":"server","root":"/Users/albertoforni/Projects/me","outDir":"/Users/albertoforni/Projects/me/.vinxi/build/server-fns","order":3}],"server":{"compressPublicAssets":{"brotli":true},"routeRules":{"/_build/assets/**":{"headers":{"cache-control":"public, immutable, max-age=31536000"}}},"experimental":{"asyncContext":true},"prerender":{"crawlLinks":true}},"root":"/Users/albertoforni/Projects/me"};
				const buildManifest = {"ssr":{"_HttpStatusCode-C32pSpjH.js":{"file":"assets/HttpStatusCode-C32pSpjH.js","name":"HttpStatusCode"},"_routing-BF61k76u.js":{"file":"assets/routing-BF61k76u.js","name":"routing"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"_...404_.js","name":"_...404_","src":"src/routes/[...404].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_HttpStatusCode-C32pSpjH.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_routing-BF61k76u.js"]},"virtual:$vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:$vinxi/handler/ssr","isEntry":true,"imports":["_HttpStatusCode-C32pSpjH.js","_routing-BF61k76u.js"],"dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css"],"css":["assets/ssr-Cgm0YfeP.css"]}},"client":{"_HttpStatusCode-CVTaQwjy.js":{"file":"assets/HttpStatusCode-CVTaQwjy.js","name":"HttpStatusCode","imports":["_web-C9h6wpXZ.js"]},"_routing-ef7qQkeJ.js":{"file":"assets/routing-ef7qQkeJ.js","name":"routing","imports":["_web-C9h6wpXZ.js"]},"_web-C9h6wpXZ.js":{"file":"assets/web-C9h6wpXZ.js","name":"web"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"assets/_...404_-BqBJ9kbt.js","name":"_...404_","src":"src/routes/[...404].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-C9h6wpXZ.js","_HttpStatusCode-CVTaQwjy.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"assets/index-dEezc1wn.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-C9h6wpXZ.js","_routing-ef7qQkeJ.js"]},"virtual:$vinxi/handler/client":{"file":"assets/client-CrWDL8H7.js","name":"client","src":"virtual:$vinxi/handler/client","isEntry":true,"imports":["_HttpStatusCode-CVTaQwjy.js","_web-C9h6wpXZ.js","_routing-ef7qQkeJ.js"],"dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css"],"css":["assets/client-Cgm0YfeP.css"]}},"server-fns":{"_index2.mjs":{"file":"index2.mjs","name":"index"},"_routing.mjs":{"file":"routing.mjs","name":"routing"},"_server-fns.mjs":{"file":"server-fns.mjs","name":"server-fns","dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/app.tsx"]},"src/app.tsx":{"file":"app.mjs","name":"app","src":"src/app.tsx","isDynamicEntry":true,"imports":["_index2.mjs","_server-fns.mjs","_routing.mjs"],"css":["assets/app-Cgm0YfeP.css"]},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"_...404_.mjs","name":"_...404_","src":"src/routes/[...404].tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_index2.mjs"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.mjs","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_routing.mjs"]},"virtual:$vinxi/handler/server-fns":{"file":"entry.mjs","name":"entry","src":"virtual:$vinxi/handler/server-fns","isEntry":true,"imports":["_server-fns.mjs"]}}};

				const routeManifest = {"ssr":{},"client":{},"server-fns":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin(app) {
          const prodApp = createProdApp(appConfig$1);
          globalThis.app = prodApp;
        }

const chunks = {};
			 



			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin,
_2zPDKV9ZV9,
_4vJabcP823,
app
];

const assets$1 = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"298-hdW7/pL89QptiszdYCHH67XxLxs\"",
    "mtime": "2024-11-22T16:18:06.120Z",
    "size": 664,
    "path": "../../.output/public/favicon.ico"
  },
  "/me.jpeg": {
    "type": "image/jpeg",
    "etag": "\"5947c-NBq3GGS/iGjRhImwz4ARkFc05Hw\"",
    "mtime": "2024-11-22T16:18:06.120Z",
    "size": 365692,
    "path": "../../.output/public/me.jpeg"
  },
  "/_build/server-functions-manifest.json": {
    "type": "application/json",
    "etag": "\"19-U+evudgPW1yE9kGumdxd/vtvk2s\"",
    "mtime": "2024-11-22T16:18:06.123Z",
    "size": 25,
    "path": "../../.output/public/_build/server-functions-manifest.json"
  },
  "/assets/HttpStatusCode-C32pSpjH.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4e7-N/OOHumLAKApxRuDsseYkjh02zY\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 1255,
    "path": "../../.output/public/assets/HttpStatusCode-C32pSpjH.js.br"
  },
  "/assets/HttpStatusCode-C32pSpjH.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"58e-2P75sbvUbT9Co5zADLEJMIXTF5Q\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 1422,
    "path": "../../.output/public/assets/HttpStatusCode-C32pSpjH.js.gz"
  },
  "/assets/routing-BF61k76u.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"cdf-ZkA8qh628q4cvgf56PEQs4X1CeM\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 3295,
    "path": "../../.output/public/assets/routing-BF61k76u.js.br"
  },
  "/assets/routing-BF61k76u.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"e28-iwwfMzt46HguFhHnSbR7YC4mQn4\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 3624,
    "path": "../../.output/public/assets/routing-BF61k76u.js.gz"
  },
  "/assets/ssr-Cgm0YfeP.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f50-keb75WiXbd/I30xT6uPuFHP+6l0\"",
    "mtime": "2024-11-22T16:18:06.122Z",
    "size": 8016,
    "path": "../../.output/public/assets/ssr-Cgm0YfeP.css"
  },
  "/assets/ssr-Cgm0YfeP.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"6ae-4o/+s2HEr0FgjBbkxJdzpzAOXqc\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 1710,
    "path": "../../.output/public/assets/ssr-Cgm0YfeP.css.br"
  },
  "/assets/ssr-Cgm0YfeP.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"7c4-iNAW09xYyZrvdtdbn1araEjz4K8\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 1988,
    "path": "../../.output/public/assets/ssr-Cgm0YfeP.css.gz"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "etag": "\"5de-yFnttB4Py8Huk8bzSprcSTi73/A\"",
    "mtime": "2024-11-22T16:18:06.123Z",
    "size": 1502,
    "path": "../../.output/public/_build/.vite/manifest.json"
  },
  "/_build/.vite/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"15b-iRjHCpZ8V9elplmcKQRhRRhSbys\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 347,
    "path": "../../.output/public/_build/.vite/manifest.json.br"
  },
  "/_build/.vite/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"18a-r/NBJoegrjKolVqWZCOJ/5gEedc\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 394,
    "path": "../../.output/public/_build/.vite/manifest.json.gz"
  },
  "/_build/assets/HttpStatusCode-CVTaQwjy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"825-ta1wKQWlseFdkR6Nug/BPo8QXp0\"",
    "mtime": "2024-11-22T16:18:06.123Z",
    "size": 2085,
    "path": "../../.output/public/_build/assets/HttpStatusCode-CVTaQwjy.js"
  },
  "/_build/assets/HttpStatusCode-CVTaQwjy.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"380-ddQAEPmjCOq86OY33J2cC81UZZY\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 896,
    "path": "../../.output/public/_build/assets/HttpStatusCode-CVTaQwjy.js.br"
  },
  "/_build/assets/HttpStatusCode-CVTaQwjy.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"406-HgcrO4hLLGqDSCXXw7qSqUqa/Js\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 1030,
    "path": "../../.output/public/_build/assets/HttpStatusCode-CVTaQwjy.js.gz"
  },
  "/_build/assets/_...404_-BqBJ9kbt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"208-grK3cV83rGn3ubYUaVg10SBn6Hw\"",
    "mtime": "2024-11-22T16:18:06.124Z",
    "size": 520,
    "path": "../../.output/public/_build/assets/_...404_-BqBJ9kbt.js"
  },
  "/_build/assets/client-Cgm0YfeP.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f50-keb75WiXbd/I30xT6uPuFHP+6l0\"",
    "mtime": "2024-11-22T16:18:06.123Z",
    "size": 8016,
    "path": "../../.output/public/_build/assets/client-Cgm0YfeP.css"
  },
  "/_build/assets/client-Cgm0YfeP.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"6ae-4o/+s2HEr0FgjBbkxJdzpzAOXqc\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 1710,
    "path": "../../.output/public/_build/assets/client-Cgm0YfeP.css.br"
  },
  "/_build/assets/client-Cgm0YfeP.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"7c4-iNAW09xYyZrvdtdbn1araEjz4K8\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 1988,
    "path": "../../.output/public/_build/assets/client-Cgm0YfeP.css.gz"
  },
  "/_build/assets/client-CrWDL8H7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3aa7-iH4kEsVP2CnAuN0fYVYpEDtxioY\"",
    "mtime": "2024-11-22T16:18:06.124Z",
    "size": 15015,
    "path": "../../.output/public/_build/assets/client-CrWDL8H7.js"
  },
  "/_build/assets/client-CrWDL8H7.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"15c0-fl0GkOYiGOPqjEcR0IVHGq2IEZ4\"",
    "mtime": "2024-11-22T16:18:06.148Z",
    "size": 5568,
    "path": "../../.output/public/_build/assets/client-CrWDL8H7.js.br"
  },
  "/_build/assets/client-CrWDL8H7.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"184c-Y9w8IzklrTuUEFC1jb7oVr6yeY8\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 6220,
    "path": "../../.output/public/_build/assets/client-CrWDL8H7.js.gz"
  },
  "/_build/assets/index-dEezc1wn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1eb1-izlPuOS/tS+SEX5NTosG69zFr6c\"",
    "mtime": "2024-11-22T16:18:06.124Z",
    "size": 7857,
    "path": "../../.output/public/_build/assets/index-dEezc1wn.js"
  },
  "/_build/assets/index-dEezc1wn.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"c1a-YhXA79ISAG5Okc+f/i8q3IIS/qE\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 3098,
    "path": "../../.output/public/_build/assets/index-dEezc1wn.js.br"
  },
  "/_build/assets/index-dEezc1wn.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"e66-xuTny00Ou9H0ZwC1oKF4mPGqHKg\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 3686,
    "path": "../../.output/public/_build/assets/index-dEezc1wn.js.gz"
  },
  "/_build/assets/routing-ef7qQkeJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1cc5-zR/AhwxH4y43UZlq4jeO9aVO5+0\"",
    "mtime": "2024-11-22T16:18:06.123Z",
    "size": 7365,
    "path": "../../.output/public/_build/assets/routing-ef7qQkeJ.js"
  },
  "/_build/assets/routing-ef7qQkeJ.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"c50-BE07CGyNoqhM752A/zJe569F3Ik\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 3152,
    "path": "../../.output/public/_build/assets/routing-ef7qQkeJ.js.br"
  },
  "/_build/assets/routing-ef7qQkeJ.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"d87-9u5KCGbFQAc01lZ0JRe4njzr+Ws\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 3463,
    "path": "../../.output/public/_build/assets/routing-ef7qQkeJ.js.gz"
  },
  "/_build/assets/web-C9h6wpXZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ddf-BDxHDojyWt2yXXCWv/4cTgEVI2Y\"",
    "mtime": "2024-11-22T16:18:06.123Z",
    "size": 24031,
    "path": "../../.output/public/_build/assets/web-C9h6wpXZ.js"
  },
  "/_build/assets/web-C9h6wpXZ.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"20e3-1c1Xj8ISgumHsQPYK2fiucdYDSs\"",
    "mtime": "2024-11-22T16:18:06.162Z",
    "size": 8419,
    "path": "../../.output/public/_build/assets/web-C9h6wpXZ.js.br"
  },
  "/_build/assets/web-C9h6wpXZ.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"243d-rc0EwcfAWRapTFyYKJSrQZVZ+PM\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 9277,
    "path": "../../.output/public/_build/assets/web-C9h6wpXZ.js.gz"
  },
  "/_server/assets/app-Cgm0YfeP.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f50-keb75WiXbd/I30xT6uPuFHP+6l0\"",
    "mtime": "2024-11-22T16:18:06.124Z",
    "size": 8016,
    "path": "../../.output/public/_server/assets/app-Cgm0YfeP.css"
  },
  "/_server/assets/app-Cgm0YfeP.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"6ae-4o/+s2HEr0FgjBbkxJdzpzAOXqc\"",
    "mtime": "2024-11-22T16:18:06.149Z",
    "size": 1710,
    "path": "../../.output/public/_server/assets/app-Cgm0YfeP.css.br"
  },
  "/_server/assets/app-Cgm0YfeP.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"7c4-iNAW09xYyZrvdtdbn1araEjz4K8\"",
    "mtime": "2024-11-22T16:18:06.147Z",
    "size": 1988,
    "path": "../../.output/public/_server/assets/app-Cgm0YfeP.css.gz"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets$1[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets$1[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets$1[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _idPHD7 = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var St$1=(t=>(t[t.AggregateError=1]="AggregateError",t[t.ArrowFunction=2]="ArrowFunction",t[t.ErrorPrototypeStack=4]="ErrorPrototypeStack",t[t.ObjectAssign=8]="ObjectAssign",t[t.BigIntTypedArray=16]="BigIntTypedArray",t))(St$1||{});function Rt$1(t){switch(t){case'"':return '\\"';case"\\":return "\\\\";case`
`:return "\\n";case"\r":return "\\r";case"\b":return "\\b";case"	":return "\\t";case"\f":return "\\f";case"<":return "\\x3C";case"\u2028":return "\\u2028";case"\u2029":return "\\u2029";default:return}}function p$1(t){let e="",r=0,s;for(let i=0,a=t.length;i<a;i++)s=Rt$1(t[i]),s&&(e+=t.slice(r,i)+s,r=i+1);return r===0?e=t:e+=t.slice(r),e}function xt$1(t){switch(t){case"\\\\":return "\\";case'\\"':return '"';case"\\n":return `
`;case"\\r":return "\r";case"\\b":return "\b";case"\\t":return "	";case"\\f":return "\f";case"\\x3C":return "<";case"\\u2028":return "\u2028";case"\\u2029":return "\u2029";default:return t}}function m(t){return t.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g,xt$1)}var S$1="__SEROVAL_REFS__",T$1="$R",F=`self.${T$1}`;function At$1(t){return t==null?`${F}=${F}||[]`:`(${F}=${F}||{})["${p$1(t)}"]=[]`}function v(t,e){if(!t)throw e}var Te=new Map,b=new Map;function W$1(t){return Te.has(t)}function Et$1(t){return b.has(t)}function It$1(t){return v(W$1(t),new ur(t)),Te.get(t)}function Pt$1(t){return v(Et$1(t),new cr(t)),b.get(t)}typeof globalThis<"u"?Object.defineProperty(globalThis,S$1,{value:b,configurable:!0,writable:!1,enumerable:!1}):typeof self<"u"?Object.defineProperty(self,S$1,{value:b,configurable:!0,writable:!1,enumerable:!1}):typeof global<"u"&&Object.defineProperty(global,S$1,{value:b,configurable:!0,writable:!1,enumerable:!1});function $e$1(t,e){for(let r=0,s=e.length;r<s;r++){let i=e[r];t.has(i)||(t.add(i),i.extends&&$e$1(t,i.extends));}}function je$1(t){if(t){let e=new Set;return $e$1(e,t),[...e]}}var kt$1={0:"Symbol.asyncIterator",1:"Symbol.hasInstance",2:"Symbol.isConcatSpreadable",3:"Symbol.iterator",4:"Symbol.match",5:"Symbol.matchAll",6:"Symbol.replace",7:"Symbol.search",8:"Symbol.species",9:"Symbol.split",10:"Symbol.toPrimitive",11:"Symbol.toStringTag",12:"Symbol.unscopables"},Ve={[Symbol.asyncIterator]:0,[Symbol.hasInstance]:1,[Symbol.isConcatSpreadable]:2,[Symbol.iterator]:3,[Symbol.match]:4,[Symbol.matchAll]:5,[Symbol.replace]:6,[Symbol.search]:7,[Symbol.species]:8,[Symbol.split]:9,[Symbol.toPrimitive]:10,[Symbol.toStringTag]:11,[Symbol.unscopables]:12},Ft$1={0:Symbol.asyncIterator,1:Symbol.hasInstance,2:Symbol.isConcatSpreadable,3:Symbol.iterator,4:Symbol.match,5:Symbol.matchAll,6:Symbol.replace,7:Symbol.search,8:Symbol.species,9:Symbol.split,10:Symbol.toPrimitive,11:Symbol.toStringTag,12:Symbol.unscopables},Ct$1={2:"!0",3:"!1",1:"void 0",0:"null",4:"-0",5:"1/0",6:"-1/0",7:"0/0"},Ot$1={2:!0,3:!1,1:void 0,0:null,4:-0,5:Number.POSITIVE_INFINITY,6:Number.NEGATIVE_INFINITY,7:Number.NaN},Ne={0:"Error",1:"EvalError",2:"RangeError",3:"ReferenceError",4:"SyntaxError",5:"TypeError",6:"URIError"},Tt$1={0:Error,1:EvalError,2:RangeError,3:ReferenceError,4:SyntaxError,5:TypeError,6:URIError};function g(t){return {t:2,i:void 0,s:t,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}var B$1=g(2),K$1=g(3),$t$1=g(1),jt$1=g(0),Vt$1=g(4),Nt$1=g(5),Dt$1=g(6),_t$1=g(7);function ie$1(t){return t instanceof EvalError?1:t instanceof RangeError?2:t instanceof ReferenceError?3:t instanceof SyntaxError?4:t instanceof TypeError?5:t instanceof URIError?6:0}function Mt$1(t){let e=Ne[ie$1(t)];return t.name!==e?{name:t.name}:t.constructor.name!==e?{name:t.constructor.name}:{}}function de$1(t,e){let r=Mt$1(t),s=Object.getOwnPropertyNames(t);for(let i=0,a=s.length,n;i<a;i++)n=s[i],n!=="name"&&n!=="message"&&(n==="stack"?e&4&&(r=r||{},r[n]=t[n]):(r=r||{},r[n]=t[n]));return r}function De$1(t){return Object.isFrozen(t)?3:Object.isSealed(t)?2:Object.isExtensible(t)?0:1}function Lt$1(t){switch(t){case Number.POSITIVE_INFINITY:return Nt$1;case Number.NEGATIVE_INFINITY:return Dt$1}return t!==t?_t$1:Object.is(t,-0)?Vt$1:{t:0,i:void 0,s:t,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function X$1(t){return {t:1,i:void 0,s:p$1(t),l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Ut$1(t){return {t:3,i:void 0,s:""+t,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function qt$1(t){return {t:4,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Ht$1(t,e){return {t:5,i:t,s:e.toISOString(),l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,f:void 0,a:void 0,b:void 0,o:void 0}}function Wt$1(t,e){return {t:6,i:t,s:void 0,l:void 0,c:p$1(e.source),m:e.flags,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Bt$1(t,e){let r=new Uint8Array(e),s=r.length,i=new Array(s);for(let a=0;a<s;a++)i[a]=r[a];return {t:19,i:t,s:i,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Kt$1(t,e){return {t:17,i:t,s:Ve[e],l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function he$1(t,e){return {t:18,i:t,s:p$1(It$1(e)),l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function _e$1(t,e,r){return {t:25,i:t,s:r,l:void 0,c:p$1(e),m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Xt$1(t,e,r){return {t:9,i:t,s:void 0,l:e.length,c:void 0,m:void 0,p:void 0,e:void 0,a:r,f:void 0,b:void 0,o:De$1(e)}}function Gt$1(t,e){return {t:21,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:e,b:void 0,o:void 0}}function Yt$1(t,e,r){return {t:15,i:t,s:void 0,l:e.length,c:e.constructor.name,m:void 0,p:void 0,e:void 0,a:void 0,f:r,b:e.byteOffset,o:void 0}}function Jt$1(t,e,r){return {t:16,i:t,s:void 0,l:e.length,c:e.constructor.name,m:void 0,p:void 0,e:void 0,a:void 0,f:r,b:e.byteOffset,o:void 0}}function Zt$1(t,e,r){return {t:20,i:t,s:void 0,l:e.byteLength,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:r,b:e.byteOffset,o:void 0}}function Qt$1(t,e,r){return {t:13,i:t,s:ie$1(e),l:void 0,c:void 0,m:p$1(e.message),p:r,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function er(t,e,r){return {t:14,i:t,s:ie$1(e),l:void 0,c:void 0,m:p$1(e.message),p:r,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function tr(t,e,r){return {t:7,i:t,s:void 0,l:e,c:void 0,m:void 0,p:void 0,e:void 0,a:r,f:void 0,b:void 0,o:void 0}}function Me$1(t,e){return {t:28,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[t,e],f:void 0,b:void 0,o:void 0}}function Le$1(t,e){return {t:30,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[t,e],f:void 0,b:void 0,o:void 0}}function Ue$1(t,e,r){return {t:31,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:r,f:e,b:void 0,o:void 0}}function rr(t,e){return {t:32,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:e,b:void 0,o:void 0}}function sr(t,e){return {t:33,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:e,b:void 0,o:void 0}}function ir(t,e){return {t:34,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:e,b:void 0,o:void 0}}var{toString:ae$1}=Object.prototype;function ar(t,e){return e instanceof Error?`Seroval caught an error during the ${t} process.
  
${e.name}
${e.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new`:`Seroval caught an error during the ${t} process.

"${ae$1.call(e)}"

For more information, please check the "cause" property of this error.`}var ne=class extends Error{constructor(e,r){super(ar(e,r)),this.cause=r;}},nr=class extends ne{constructor(t){super("parsing",t);}},or=class extends ne{constructor(t){super("serialization",t);}},lr=class extends ne{constructor(t){super("deserialization",t);}},$$1=class $ extends Error{constructor(e){super(`The value ${ae$1.call(e)} of type "${typeof e}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`),this.value=e;}},qe$1=class qe extends Error{constructor(e){super('Unsupported node type "'+e.t+'".');}},He=class extends Error{constructor(e){super('Missing plugin for tag "'+e+'".');}},w$1=class w extends Error{constructor(e){super('Missing "'+e+'" instance.');}},ur=class extends Error{constructor(t){super('Missing reference for the value "'+ae$1.call(t)+'" of type "'+typeof t+'"'),this.value=t;}},cr=class extends Error{constructor(t){super('Missing reference for id "'+p$1(t)+'"');}},dr=class extends Error{constructor(t){super('Unknown TypedArray "'+t+'"');}},hr=class{constructor(e,r){this.value=e,this.replacement=r;}},fr={},pr={},vr={0:{},1:{},2:{},3:{},4:{}};function G$1(){let t,e;return {promise:new Promise((r,s)=>{t=r,e=s;}),resolve(r){t(r);},reject(r){e(r);}}}function gr(t){return "__SEROVAL_STREAM__"in t}function P$1(){let t=new Set,e=[],r=!0,s=!0;function i(o){for(let l of t.keys())l.next(o);}function a(o){for(let l of t.keys())l.throw(o);}function n(o){for(let l of t.keys())l.return(o);}return {__SEROVAL_STREAM__:!0,on(o){r&&t.add(o);for(let l=0,u=e.length;l<u;l++){let d=e[l];l===u-1&&!r?s?o.return(d):o.throw(d):o.next(d);}return ()=>{r&&t.delete(o);}},next(o){r&&(e.push(o),i(o));},throw(o){r&&(e.push(o),a(o),r=!1,s=!1,t.clear());},return(o){r&&(e.push(o),n(o),r=!1,s=!0,t.clear());}}}function mr(t){let e=P$1(),r=t[Symbol.asyncIterator]();async function s(){try{let i=await r.next();i.done?e.return(i.value):(e.next(i.value),await s());}catch(i){e.throw(i);}}return s().catch(()=>{}),e}function yr(t){return ()=>{let e=[],r=[],s=0,i=-1,a=!1;function n(){for(let l=0,u=r.length;l<u;l++)r[l].resolve({done:!0,value:void 0});}t.on({next(l){let u=r.shift();u&&u.resolve({done:!1,value:l}),e.push(l);},throw(l){let u=r.shift();u&&u.reject(l),n(),i=e.length,e.push(l),a=!0;},return(l){let u=r.shift();u&&u.resolve({done:!0,value:l}),n(),i=e.length,e.push(l);}});function o(){let l=s++,u=e[l];if(l!==i)return {done:!1,value:u};if(a)throw u;return {done:!0,value:u}}return {[Symbol.asyncIterator](){return this},async next(){if(i===-1){let l=s++;if(l>=e.length){let u=G$1();return r.push(u),await u.promise}return {done:!1,value:e[l]}}return s>i?{done:!0,value:void 0}:o()}}}}function We$1(t){let e=[],r=-1,s=-1,i=t[Symbol.iterator]();for(;;)try{let a=i.next();if(e.push(a.value),a.done){s=e.length-1;break}}catch(a){r=e.length,e.push(a);}return {v:e,t:r,d:s}}function br(t){return ()=>{let e=0;return {[Symbol.iterator](){return this},next(){if(e>t.d)return {done:!0,value:void 0};let r=e++,s=t.v[r];if(r===t.t)throw s;return {done:r===t.d,value:s}}}}}var zr=class{constructor(t){this.marked=new Set,this.plugins=t.plugins,this.features=31^(t.disabledFeatures||0),this.refs=t.refs||new Map;}markRef(t){this.marked.add(t);}isMarked(t){return this.marked.has(t)}getIndexedValue(t){let e=this.refs.get(t);if(e!=null)return this.markRef(e),{type:1,value:qt$1(e)};let r=this.refs.size;return this.refs.set(t,r),{type:0,value:r}}getReference(t){let e=this.getIndexedValue(t);return e.type===1?e:W$1(t)?{type:2,value:he$1(e.value,t)}:e}getStrictReference(t){v(W$1(t),new $$1(t));let e=this.getIndexedValue(t);return e.type===1?e.value:he$1(e.value,t)}parseFunction(t){return this.getStrictReference(t)}parseWellKnownSymbol(t){let e=this.getReference(t);return e.type!==0?e.value:(v(t in Ve,new $$1(t)),Kt$1(e.value,t))}parseSpecialReference(t){let e=this.getIndexedValue(vr[t]);return e.type===1?e.value:{t:26,i:e.value,s:t,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}parseIteratorFactory(){let t=this.getIndexedValue(fr);return t.type===1?t.value:{t:27,i:t.value,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:this.parseWellKnownSymbol(Symbol.iterator),b:void 0,o:void 0}}parseAsyncIteratorFactory(){let t=this.getIndexedValue(pr);return t.type===1?t.value:{t:29,i:t.value,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[this.parseSpecialReference(1),this.parseWellKnownSymbol(Symbol.asyncIterator)],f:void 0,b:void 0,o:void 0}}createObjectNode(t,e,r,s){return {t:r?11:10,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:s,e:void 0,a:void 0,f:void 0,b:void 0,o:De$1(e)}}createMapNode(t,e,r,s){return {t:8,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:{k:e,v:r,s},a:void 0,f:this.parseSpecialReference(0),b:void 0,o:void 0}}createPromiseConstructorNode(t){return {t:22,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:this.parseSpecialReference(1),b:void 0,o:void 0}}};function wr(t){switch(t){case"Int8Array":return Int8Array;case"Int16Array":return Int16Array;case"Int32Array":return Int32Array;case"Uint8Array":return Uint8Array;case"Uint16Array":return Uint16Array;case"Uint32Array":return Uint32Array;case"Uint8ClampedArray":return Uint8ClampedArray;case"Float32Array":return Float32Array;case"Float64Array":return Float64Array;case"BigInt64Array":return BigInt64Array;case"BigUint64Array":return BigUint64Array;default:throw new dr(t)}}function fe(t,e){switch(e){case 3:return Object.freeze(t);case 1:return Object.preventExtensions(t);case 2:return Object.seal(t);default:return t}}var Sr=class{constructor(t){this.plugins=t.plugins,this.refs=t.refs||new Map;}deserializeReference(t){return this.assignIndexedValue(t.i,Pt$1(m(t.s)))}deserializeArray(t){let e=t.l,r=this.assignIndexedValue(t.i,new Array(e)),s;for(let i=0;i<e;i++)s=t.a[i],s&&(r[i]=this.deserialize(s));return fe(r,t.o),r}deserializeProperties(t,e){let r=t.s;if(r){let s=t.k,i=t.v;for(let a=0,n;a<r;a++)n=s[a],typeof n=="string"?e[m(n)]=this.deserialize(i[a]):e[this.deserialize(n)]=this.deserialize(i[a]);}return e}deserializeObject(t){let e=this.assignIndexedValue(t.i,t.t===10?{}:Object.create(null));return this.deserializeProperties(t.p,e),fe(e,t.o),e}deserializeDate(t){return this.assignIndexedValue(t.i,new Date(t.s))}deserializeRegExp(t){return this.assignIndexedValue(t.i,new RegExp(m(t.c),t.m))}deserializeSet(t){let e=this.assignIndexedValue(t.i,new Set),r=t.a;for(let s=0,i=t.l;s<i;s++)e.add(this.deserialize(r[s]));return e}deserializeMap(t){let e=this.assignIndexedValue(t.i,new Map),r=t.e.k,s=t.e.v;for(let i=0,a=t.e.s;i<a;i++)e.set(this.deserialize(r[i]),this.deserialize(s[i]));return e}deserializeArrayBuffer(t){let e=new Uint8Array(t.s);return this.assignIndexedValue(t.i,e.buffer)}deserializeTypedArray(t){let e=wr(t.c),r=this.deserialize(t.f);return this.assignIndexedValue(t.i,new e(r,t.b,t.l))}deserializeDataView(t){let e=this.deserialize(t.f);return this.assignIndexedValue(t.i,new DataView(e,t.b,t.l))}deserializeDictionary(t,e){if(t.p){let r=this.deserializeProperties(t.p,{});Object.assign(e,r);}return e}deserializeAggregateError(t){let e=this.assignIndexedValue(t.i,new AggregateError([],m(t.m)));return this.deserializeDictionary(t,e)}deserializeError(t){let e=Tt$1[t.s],r=this.assignIndexedValue(t.i,new e(m(t.m)));return this.deserializeDictionary(t,r)}deserializePromise(t){let e=G$1(),r=this.assignIndexedValue(t.i,e),s=this.deserialize(t.f);return t.s?e.resolve(s):e.reject(s),r.promise}deserializeBoxed(t){return this.assignIndexedValue(t.i,Object(this.deserialize(t.f)))}deserializePlugin(t){let e=this.plugins;if(e){let r=m(t.c);for(let s=0,i=e.length;s<i;s++){let a=e[s];if(a.tag===r)return this.assignIndexedValue(t.i,a.deserialize(t.s,this,{id:t.i}))}}throw new He(t.c)}deserializePromiseConstructor(t){return this.assignIndexedValue(t.i,G$1()).promise}deserializePromiseResolve(t){let e=this.refs.get(t.i);v(e,new w$1("Promise")),e.resolve(this.deserialize(t.a[1]));}deserializePromiseReject(t){let e=this.refs.get(t.i);v(e,new w$1("Promise")),e.reject(this.deserialize(t.a[1]));}deserializeIteratorFactoryInstance(t){this.deserialize(t.a[0]);let e=this.deserialize(t.a[1]);return br(e)}deserializeAsyncIteratorFactoryInstance(t){this.deserialize(t.a[0]);let e=this.deserialize(t.a[1]);return yr(e)}deserializeStreamConstructor(t){let e=this.assignIndexedValue(t.i,P$1()),r=t.a.length;if(r)for(let s=0;s<r;s++)this.deserialize(t.a[s]);return e}deserializeStreamNext(t){let e=this.refs.get(t.i);v(e,new w$1("Stream")),e.next(this.deserialize(t.f));}deserializeStreamThrow(t){let e=this.refs.get(t.i);v(e,new w$1("Stream")),e.throw(this.deserialize(t.f));}deserializeStreamReturn(t){let e=this.refs.get(t.i);v(e,new w$1("Stream")),e.return(this.deserialize(t.f));}deserializeIteratorFactory(t){this.deserialize(t.f);}deserializeAsyncIteratorFactory(t){this.deserialize(t.a[1]);}deserialize(t){try{switch(t.t){case 2:return Ot$1[t.s];case 0:return t.s;case 1:return m(t.s);case 3:return BigInt(t.s);case 4:return this.refs.get(t.i);case 18:return this.deserializeReference(t);case 9:return this.deserializeArray(t);case 10:case 11:return this.deserializeObject(t);case 5:return this.deserializeDate(t);case 6:return this.deserializeRegExp(t);case 7:return this.deserializeSet(t);case 8:return this.deserializeMap(t);case 19:return this.deserializeArrayBuffer(t);case 16:case 15:return this.deserializeTypedArray(t);case 20:return this.deserializeDataView(t);case 14:return this.deserializeAggregateError(t);case 13:return this.deserializeError(t);case 12:return this.deserializePromise(t);case 17:return Ft$1[t.s];case 21:return this.deserializeBoxed(t);case 25:return this.deserializePlugin(t);case 22:return this.deserializePromiseConstructor(t);case 23:return this.deserializePromiseResolve(t);case 24:return this.deserializePromiseReject(t);case 28:return this.deserializeIteratorFactoryInstance(t);case 30:return this.deserializeAsyncIteratorFactoryInstance(t);case 31:return this.deserializeStreamConstructor(t);case 32:return this.deserializeStreamNext(t);case 33:return this.deserializeStreamThrow(t);case 34:return this.deserializeStreamReturn(t);case 27:return this.deserializeIteratorFactory(t);case 29:return this.deserializeAsyncIteratorFactory(t);default:throw new qe$1(t)}}catch(e){throw new lr(e)}}},Rr=/^[$A-Z_][0-9A-Z_$]*$/i;function pe(t){let e=t[0];return (e==="$"||e==="_"||e>="A"&&e<="Z"||e>="a"&&e<="z")&&Rr.test(t)}function R$2(t){switch(t.t){case 0:return t.s+"="+t.v;case 2:return t.s+".set("+t.k+","+t.v+")";case 1:return t.s+".add("+t.v+")";case 3:return t.s+".delete("+t.k+")"}}function xr(t){let e=[],r=t[0];for(let s=1,i=t.length,a,n=r;s<i;s++)a=t[s],a.t===0&&a.v===n.v?r={t:0,s:a.s,k:void 0,v:R$2(r)}:a.t===2&&a.s===n.s?r={t:2,s:R$2(r),k:a.k,v:a.v}:a.t===1&&a.s===n.s?r={t:1,s:R$2(r),k:void 0,v:a.v}:a.t===3&&a.s===n.s?r={t:3,s:R$2(r),k:a.k,v:void 0}:(e.push(r),r=a),n=a;return e.push(r),e}function ve$1(t){if(t.length){let e="",r=xr(t);for(let s=0,i=r.length;s<i;s++)e+=R$2(r[s])+",";return e}}var Ar="Object.create(null)",Er="new Set",Ir="new Map",Pr="Promise.resolve",kr="Promise.reject",Fr={3:"Object.freeze",2:"Object.seal",1:"Object.preventExtensions",0:void 0},Cr=class{constructor(e){this.stack=[],this.flags=[],this.assignments=[],this.plugins=e.plugins,this.features=e.features,this.marked=new Set(e.markedRefs);}createFunction(e,r){return this.features&2?(e.length===1?e[0]:"("+e.join(",")+")")+"=>"+(r.startsWith("{")?"("+r+")":r):"function("+e.join(",")+"){return "+r+"}"}createEffectfulFunction(e,r){return this.features&2?(e.length===1?e[0]:"("+e.join(",")+")")+"=>{"+r+"}":"function("+e.join(",")+"){"+r+"}"}markRef(e){this.marked.add(e);}isMarked(e){return this.marked.has(e)}pushObjectFlag(e,r){e!==0&&(this.markRef(r),this.flags.push({type:e,value:this.getRefParam(r)}));}resolveFlags(){let e="";for(let r=0,s=this.flags,i=s.length;r<i;r++){let a=s[r];e+=Fr[a.type]+"("+a.value+"),";}return e}resolvePatches(){let e=ve$1(this.assignments),r=this.resolveFlags();return e?r?e+r:e:r}createAssignment(e,r){this.assignments.push({t:0,s:e,k:void 0,v:r});}createAddAssignment(e,r){this.assignments.push({t:1,s:this.getRefParam(e),k:void 0,v:r});}createSetAssignment(e,r,s){this.assignments.push({t:2,s:this.getRefParam(e),k:r,v:s});}createDeleteAssignment(e,r){this.assignments.push({t:3,s:this.getRefParam(e),k:r,v:void 0});}createArrayAssign(e,r,s){this.createAssignment(this.getRefParam(e)+"["+r+"]",s);}createObjectAssign(e,r,s){this.createAssignment(this.getRefParam(e)+"."+r,s);}isIndexedValueInStack(e){return e.t===4&&this.stack.includes(e.i)}serializeReference(e){return this.assignIndexedValue(e.i,S$1+'.get("'+e.s+'")')}serializeArrayItem(e,r,s){return r?this.isIndexedValueInStack(r)?(this.markRef(e),this.createArrayAssign(e,s,this.getRefParam(r.i)),""):this.serialize(r):""}serializeArray(e){let r=e.i;if(e.l){this.stack.push(r);let s=e.a,i=this.serializeArrayItem(r,s[0],0),a=i==="";for(let n=1,o=e.l,l;n<o;n++)l=this.serializeArrayItem(r,s[n],n),i+=","+l,a=l==="";return this.stack.pop(),this.pushObjectFlag(e.o,e.i),this.assignIndexedValue(r,"["+i+(a?",]":"]"))}return this.assignIndexedValue(r,"[]")}serializeProperty(e,r,s){if(typeof r=="string"){let i=Number(r),a=i>=0&&i.toString()===r||pe(r);if(this.isIndexedValueInStack(s)){let n=this.getRefParam(s.i);return this.markRef(e.i),a&&i!==i?this.createObjectAssign(e.i,r,n):this.createArrayAssign(e.i,a?r:'"'+r+'"',n),""}return (a?r:'"'+r+'"')+":"+this.serialize(s)}return "["+this.serialize(r)+"]:"+this.serialize(s)}serializeProperties(e,r){let s=r.s;if(s){let i=r.k,a=r.v;this.stack.push(e.i);let n=this.serializeProperty(e,i[0],a[0]);for(let o=1,l=n;o<s;o++)l=this.serializeProperty(e,i[o],a[o]),n+=(l&&n&&",")+l;return this.stack.pop(),"{"+n+"}"}return "{}"}serializeObject(e){return this.pushObjectFlag(e.o,e.i),this.assignIndexedValue(e.i,this.serializeProperties(e,e.p))}serializeWithObjectAssign(e,r,s){let i=this.serializeProperties(e,r);return i!=="{}"?"Object.assign("+s+","+i+")":s}serializeStringKeyAssignment(e,r,s,i){let a=this.serialize(i),n=Number(s),o=n>=0&&n.toString()===s||pe(s);if(this.isIndexedValueInStack(i))o&&n!==n?this.createObjectAssign(e.i,s,a):this.createArrayAssign(e.i,o?s:'"'+s+'"',a);else {let l=this.assignments;this.assignments=r,o&&n!==n?this.createObjectAssign(e.i,s,a):this.createArrayAssign(e.i,o?s:'"'+s+'"',a),this.assignments=l;}}serializeAssignment(e,r,s,i){if(typeof s=="string")this.serializeStringKeyAssignment(e,r,s,i);else {let a=this.stack;this.stack=[];let n=this.serialize(i);this.stack=a;let o=this.assignments;this.assignments=r,this.createArrayAssign(e.i,this.serialize(s),n),this.assignments=o;}}serializeAssignments(e,r){let s=r.s;if(s){let i=[],a=r.k,n=r.v;this.stack.push(e.i);for(let o=0;o<s;o++)this.serializeAssignment(e,i,a[o],n[o]);return this.stack.pop(),ve$1(i)}}serializeDictionary(e,r){if(e.p)if(this.features&8)r=this.serializeWithObjectAssign(e,e.p,r);else {this.markRef(e.i);let s=this.serializeAssignments(e,e.p);if(s)return "("+this.assignIndexedValue(e.i,r)+","+s+this.getRefParam(e.i)+")"}return this.assignIndexedValue(e.i,r)}serializeNullConstructor(e){return this.pushObjectFlag(e.o,e.i),this.serializeDictionary(e,Ar)}serializeDate(e){return this.assignIndexedValue(e.i,'new Date("'+e.s+'")')}serializeRegExp(e){return this.assignIndexedValue(e.i,"/"+e.c+"/"+e.m)}serializeSetItem(e,r){return this.isIndexedValueInStack(r)?(this.markRef(e),this.createAddAssignment(e,this.getRefParam(r.i)),""):this.serialize(r)}serializeSet(e){let r=Er,s=e.l,i=e.i;if(s){let a=e.a;this.stack.push(i);let n=this.serializeSetItem(i,a[0]);for(let o=1,l=n;o<s;o++)l=this.serializeSetItem(i,a[o]),n+=(l&&n&&",")+l;this.stack.pop(),n&&(r+="(["+n+"])");}return this.assignIndexedValue(i,r)}serializeMapEntry(e,r,s,i){if(this.isIndexedValueInStack(r)){let a=this.getRefParam(r.i);if(this.markRef(e),this.isIndexedValueInStack(s)){let o=this.getRefParam(s.i);return this.createSetAssignment(e,a,o),""}if(s.t!==4&&s.i!=null&&this.isMarked(s.i)){let o="("+this.serialize(s)+",["+i+","+i+"])";return this.createSetAssignment(e,a,this.getRefParam(s.i)),this.createDeleteAssignment(e,i),o}let n=this.stack;return this.stack=[],this.createSetAssignment(e,a,this.serialize(s)),this.stack=n,""}if(this.isIndexedValueInStack(s)){let a=this.getRefParam(s.i);if(this.markRef(e),r.t!==4&&r.i!=null&&this.isMarked(r.i)){let o="("+this.serialize(r)+",["+i+","+i+"])";return this.createSetAssignment(e,this.getRefParam(r.i),a),this.createDeleteAssignment(e,i),o}let n=this.stack;return this.stack=[],this.createSetAssignment(e,this.serialize(r),a),this.stack=n,""}return "["+this.serialize(r)+","+this.serialize(s)+"]"}serializeMap(e){let r=Ir,s=e.e.s,i=e.i,a=e.f,n=this.getRefParam(a.i);if(s){let o=e.e.k,l=e.e.v;this.stack.push(i);let u=this.serializeMapEntry(i,o[0],l[0],n);for(let d=1,c=u;d<s;d++)c=this.serializeMapEntry(i,o[d],l[d],n),u+=(c&&u&&",")+c;this.stack.pop(),u&&(r+="(["+u+"])");}return a.t===26&&(this.markRef(a.i),r="("+this.serialize(a)+","+r+")"),this.assignIndexedValue(i,r)}serializeArrayBuffer(e){let r="new Uint8Array(",s=e.s,i=s.length;if(i){r+="["+s[0];for(let a=1;a<i;a++)r+=","+s[a];r+="]";}return this.assignIndexedValue(e.i,r+").buffer")}serializeTypedArray(e){return this.assignIndexedValue(e.i,"new "+e.c+"("+this.serialize(e.f)+","+e.b+","+e.l+")")}serializeDataView(e){return this.assignIndexedValue(e.i,"new DataView("+this.serialize(e.f)+","+e.b+","+e.l+")")}serializeAggregateError(e){let r=e.i;this.stack.push(r);let s=this.serializeDictionary(e,'new AggregateError([],"'+e.m+'")');return this.stack.pop(),s}serializeError(e){return this.serializeDictionary(e,"new "+Ne[e.s]+'("'+e.m+'")')}serializePromise(e){let r,s=e.f,i=e.i,a=e.s?Pr:kr;if(this.isIndexedValueInStack(s)){let n=this.getRefParam(s.i);r=a+(e.s?"().then("+this.createFunction([],n)+")":"().catch("+this.createEffectfulFunction([],"throw "+n)+")");}else {this.stack.push(i);let n=this.serialize(s);this.stack.pop(),r=a+"("+n+")";}return this.assignIndexedValue(i,r)}serializeWellKnownSymbol(e){return this.assignIndexedValue(e.i,kt$1[e.s])}serializeBoxed(e){return this.assignIndexedValue(e.i,"Object("+this.serialize(e.f)+")")}serializePlugin(e){let r=this.plugins;if(r)for(let s=0,i=r.length;s<i;s++){let a=r[s];if(a.tag===e.c)return this.assignIndexedValue(e.i,a.serialize(e.s,this,{id:e.i}))}throw new He(e.c)}getConstructor(e){let r=this.serialize(e);return r===this.getRefParam(e.i)?r:"("+r+")"}serializePromiseConstructor(e){return this.assignIndexedValue(e.i,this.getConstructor(e.f)+"()")}serializePromiseResolve(e){return this.getConstructor(e.a[0])+"("+this.getRefParam(e.i)+","+this.serialize(e.a[1])+")"}serializePromiseReject(e){return this.getConstructor(e.a[0])+"("+this.getRefParam(e.i)+","+this.serialize(e.a[1])+")"}serializeSpecialReferenceValue(e){switch(e){case 0:return "[]";case 1:return this.createFunction(["s","f","p"],"((p=new Promise("+this.createEffectfulFunction(["a","b"],"s=a,f=b")+")).s=s,p.f=f,p)");case 2:return this.createEffectfulFunction(["p","d"],'p.s(d),p.status="success",p.value=d;delete p.s;delete p.f');case 3:return this.createEffectfulFunction(["p","d"],'p.f(d),p.status="failure",p.value=d;delete p.s;delete p.f');case 4:return this.createFunction(["b","a","s","l","p","f","e","n"],"(b=[],a=!0,s=!1,l=[],p=0,f="+this.createEffectfulFunction(["v","m","x"],"for(x=0;x<p;x++)l[x]&&l[x][m](v)")+",n="+this.createEffectfulFunction(["o","x","z","c"],'for(x=0,z=b.length;x<z;x++)(c=b[x],(!a&&x===z-1)?o[s?"return":"throw"](c):o.next(c))')+",e="+this.createFunction(["o","t"],"(a&&(l[t=p++]=o),n(o),"+this.createEffectfulFunction([],"a&&(l[t]=void 0)")+")")+",{__SEROVAL_STREAM__:!0,on:"+this.createFunction(["o"],"e(o)")+",next:"+this.createEffectfulFunction(["v"],'a&&(b.push(v),f(v,"next"))')+",throw:"+this.createEffectfulFunction(["v"],'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)')+",return:"+this.createEffectfulFunction(["v"],'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)')+"})");default:return ""}}serializeSpecialReference(e){return this.assignIndexedValue(e.i,this.serializeSpecialReferenceValue(e.s))}serializeIteratorFactory(e){let r="",s=!1;return e.f.t!==4&&(this.markRef(e.f.i),r="("+this.serialize(e.f)+",",s=!0),r+=this.assignIndexedValue(e.i,this.createFunction(["s"],this.createFunction(["i","c","d","t"],"(i=0,t={["+this.getRefParam(e.f.i)+"]:"+this.createFunction([],"t")+",next:"+this.createEffectfulFunction([],"if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}")+"})"))),s&&(r+=")"),r}serializeIteratorFactoryInstance(e){return this.getConstructor(e.a[0])+"("+this.serialize(e.a[1])+")"}serializeAsyncIteratorFactory(e){let r=e.a[0],s=e.a[1],i="";r.t!==4&&(this.markRef(r.i),i+="("+this.serialize(r)),s.t!==4&&(this.markRef(s.i),i+=(i?",":"(")+this.serialize(s)),i&&(i+=",");let a=this.assignIndexedValue(e.i,this.createFunction(["s"],this.createFunction(["b","c","p","d","e","t","f"],"(b=[],c=0,p=[],d=-1,e=!1,f="+this.createEffectfulFunction(["i","l"],"for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})")+",s.on({next:"+this.createEffectfulFunction(["v","t"],"if(t=p.shift())t.s({done:!1,value:v});b.push(v)")+",throw:"+this.createEffectfulFunction(["v","t"],"if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)")+",return:"+this.createEffectfulFunction(["v","t"],"if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)")+"}),t={["+this.getRefParam(s.i)+"]:"+this.createFunction([],"t")+",next:"+this.createEffectfulFunction(["i","t","v"],"if(d===-1){return((i=c++)>=b.length)?(p.push(t="+this.getRefParam(r.i)+"()),t):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}")+"})")));return i?i+a+")":a}serializeAsyncIteratorFactoryInstance(e){return this.getConstructor(e.a[0])+"("+this.serialize(e.a[1])+")"}serializeStreamConstructor(e){let r=this.assignIndexedValue(e.i,this.getConstructor(e.f)+"()"),s=e.a.length;if(s){let i=this.serialize(e.a[0]);for(let a=1;a<s;a++)i+=","+this.serialize(e.a[a]);return "("+r+","+i+","+this.getRefParam(e.i)+")"}return r}serializeStreamNext(e){return this.getRefParam(e.i)+".next("+this.serialize(e.f)+")"}serializeStreamThrow(e){return this.getRefParam(e.i)+".throw("+this.serialize(e.f)+")"}serializeStreamReturn(e){return this.getRefParam(e.i)+".return("+this.serialize(e.f)+")"}serialize(e){try{switch(e.t){case 2:return Ct$1[e.s];case 0:return ""+e.s;case 1:return '"'+e.s+'"';case 3:return e.s+"n";case 4:return this.getRefParam(e.i);case 18:return this.serializeReference(e);case 9:return this.serializeArray(e);case 10:return this.serializeObject(e);case 11:return this.serializeNullConstructor(e);case 5:return this.serializeDate(e);case 6:return this.serializeRegExp(e);case 7:return this.serializeSet(e);case 8:return this.serializeMap(e);case 19:return this.serializeArrayBuffer(e);case 16:case 15:return this.serializeTypedArray(e);case 20:return this.serializeDataView(e);case 14:return this.serializeAggregateError(e);case 13:return this.serializeError(e);case 12:return this.serializePromise(e);case 17:return this.serializeWellKnownSymbol(e);case 21:return this.serializeBoxed(e);case 22:return this.serializePromiseConstructor(e);case 23:return this.serializePromiseResolve(e);case 24:return this.serializePromiseReject(e);case 25:return this.serializePlugin(e);case 26:return this.serializeSpecialReference(e);case 27:return this.serializeIteratorFactory(e);case 28:return this.serializeIteratorFactoryInstance(e);case 29:return this.serializeAsyncIteratorFactory(e);case 30:return this.serializeAsyncIteratorFactoryInstance(e);case 31:return this.serializeStreamConstructor(e);case 32:return this.serializeStreamNext(e);case 33:return this.serializeStreamThrow(e);case 34:return this.serializeStreamReturn(e);default:throw new qe$1(e)}}catch(r){throw new or(r)}}},Or=class extends Cr{constructor(t){super(t),this.mode="cross",this.scopeId=t.scopeId;}getRefParam(t){return T$1+"["+t+"]"}assignIndexedValue(t,e){return this.getRefParam(t)+"="+e}serializeTop(t){let e=this.serialize(t),r=t.i;if(r==null)return e;let s=this.resolvePatches(),i=this.getRefParam(r),a=this.scopeId==null?"":T$1,n=s?"("+e+","+s+i+")":e;if(a==="")return t.t===10&&!s?"("+n+")":n;let o=this.scopeId==null?"()":"("+T$1+'["'+p$1(this.scopeId)+'"])';return "("+this.createFunction([a],n)+")"+o}},Tr=class extends zr{parseItems(e){let r=[];for(let s=0,i=e.length;s<i;s++)s in e&&(r[s]=this.parse(e[s]));return r}parseArray(e,r){return Xt$1(e,r,this.parseItems(r))}parseProperties(e){let r=Object.entries(e),s=[],i=[];for(let n=0,o=r.length;n<o;n++)s.push(p$1(r[n][0])),i.push(this.parse(r[n][1]));let a=Symbol.iterator;return a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(Me$1(this.parseIteratorFactory(),this.parse(We$1(e))))),a=Symbol.asyncIterator,a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(Le$1(this.parseAsyncIteratorFactory(),this.parse(P$1())))),a=Symbol.toStringTag,a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(X$1(e[a]))),a=Symbol.isConcatSpreadable,a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(e[a]?B$1:K$1)),{k:s,v:i,s:s.length}}parsePlainObject(e,r,s){return this.createObjectNode(e,r,s,this.parseProperties(r))}parseBoxed(e,r){return Gt$1(e,this.parse(r.valueOf()))}parseTypedArray(e,r){return Yt$1(e,r,this.parse(r.buffer))}parseBigIntTypedArray(e,r){return Jt$1(e,r,this.parse(r.buffer))}parseDataView(e,r){return Zt$1(e,r,this.parse(r.buffer))}parseError(e,r){let s=de$1(r,this.features);return Qt$1(e,r,s?this.parseProperties(s):void 0)}parseAggregateError(e,r){let s=de$1(r,this.features);return er(e,r,s?this.parseProperties(s):void 0)}parseMap(e,r){let s=[],i=[];for(let[a,n]of r.entries())s.push(this.parse(a)),i.push(this.parse(n));return this.createMapNode(e,s,i,r.size)}parseSet(e,r){let s=[];for(let i of r.keys())s.push(this.parse(i));return tr(e,r.size,s)}parsePlugin(e,r){let s=this.plugins;if(s)for(let i=0,a=s.length;i<a;i++){let n=s[i];if(n.parse.sync&&n.test(r))return _e$1(e,n.tag,n.parse.sync(r,this,{id:e}))}}parseStream(e,r){return Ue$1(e,this.parseSpecialReference(4),[])}parsePromise(e,r){return this.createPromiseConstructorNode(e)}parseObject(e,r){if(Array.isArray(r))return this.parseArray(e,r);if(gr(r))return this.parseStream(e,r);let s=r.constructor;if(s===hr)return this.parse(r.replacement);let i=this.parsePlugin(e,r);if(i)return i;switch(s){case Object:return this.parsePlainObject(e,r,!1);case void 0:return this.parsePlainObject(e,r,!0);case Date:return Ht$1(e,r);case RegExp:return Wt$1(e,r);case Error:case EvalError:case RangeError:case ReferenceError:case SyntaxError:case TypeError:case URIError:return this.parseError(e,r);case Number:case Boolean:case String:case BigInt:return this.parseBoxed(e,r);case ArrayBuffer:return Bt$1(e,r);case Int8Array:case Int16Array:case Int32Array:case Uint8Array:case Uint16Array:case Uint32Array:case Uint8ClampedArray:case Float32Array:case Float64Array:return this.parseTypedArray(e,r);case DataView:return this.parseDataView(e,r);case Map:return this.parseMap(e,r);case Set:return this.parseSet(e,r)}if(s===Promise||r instanceof Promise)return this.parsePromise(e,r);let a=this.features;if(a&16)switch(s){case BigInt64Array:case BigUint64Array:return this.parseBigIntTypedArray(e,r)}if(a&1&&typeof AggregateError<"u"&&(s===AggregateError||r instanceof AggregateError))return this.parseAggregateError(e,r);if(r instanceof Error)return this.parseError(e,r);if(Symbol.iterator in r||Symbol.asyncIterator in r)return this.parsePlainObject(e,r,!!s);throw new $$1(r)}parse(e){try{switch(typeof e){case"boolean":return e?B$1:K$1;case"undefined":return $t$1;case"string":return X$1(e);case"number":return Lt$1(e);case"bigint":return Ut$1(e);case"object":{if(e){let r=this.getReference(e);return r.type===0?this.parseObject(r.value,e):r.value}return jt$1}case"symbol":return this.parseWellKnownSymbol(e);case"function":return this.parseFunction(e);default:throw new $$1(e)}}catch(r){throw new nr(r)}}},$r=class extends Tr{constructor(e){super(e),this.alive=!0,this.pending=0,this.initial=!0,this.buffer=[],this.onParseCallback=e.onParse,this.onErrorCallback=e.onError,this.onDoneCallback=e.onDone;}onParseInternal(e,r){try{this.onParseCallback(e,r);}catch(s){this.onError(s);}}flush(){for(let e=0,r=this.buffer.length;e<r;e++)this.onParseInternal(this.buffer[e],!1);}onParse(e){this.initial?this.buffer.push(e):this.onParseInternal(e,!1);}onError(e){if(this.onErrorCallback)this.onErrorCallback(e);else throw e}onDone(){this.onDoneCallback&&this.onDoneCallback();}pushPendingState(){this.pending++;}popPendingState(){--this.pending<=0&&this.onDone();}parseProperties(e){let r=Object.entries(e),s=[],i=[];for(let n=0,o=r.length;n<o;n++)s.push(p$1(r[n][0])),i.push(this.parse(r[n][1]));let a=Symbol.iterator;return a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(Me$1(this.parseIteratorFactory(),this.parse(We$1(e))))),a=Symbol.asyncIterator,a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(Le$1(this.parseAsyncIteratorFactory(),this.parse(mr(e))))),a=Symbol.toStringTag,a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(X$1(e[a]))),a=Symbol.isConcatSpreadable,a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(e[a]?B$1:K$1)),{k:s,v:i,s:s.length}}parsePromise(e,r){return r.then(s=>{let i=this.parseWithError(s);i&&this.onParse({t:23,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[this.parseSpecialReference(2),i],f:void 0,b:void 0,o:void 0}),this.popPendingState();},s=>{if(this.alive){let i=this.parseWithError(s);i&&this.onParse({t:24,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[this.parseSpecialReference(3),i],f:void 0,b:void 0,o:void 0});}this.popPendingState();}),this.pushPendingState(),this.createPromiseConstructorNode(e)}parsePlugin(e,r){let s=this.plugins;if(s)for(let i=0,a=s.length;i<a;i++){let n=s[i];if(n.parse.stream&&n.test(r))return _e$1(e,n.tag,n.parse.stream(r,this,{id:e}))}}parseStream(e,r){let s=Ue$1(e,this.parseSpecialReference(4),[]);return this.pushPendingState(),r.on({next:i=>{if(this.alive){let a=this.parseWithError(i);a&&this.onParse(rr(e,a));}},throw:i=>{if(this.alive){let a=this.parseWithError(i);a&&this.onParse(sr(e,a));}this.popPendingState();},return:i=>{if(this.alive){let a=this.parseWithError(i);a&&this.onParse(ir(e,a));}this.popPendingState();}}),s}parseWithError(e){try{return this.parse(e)}catch(r){this.onError(r);return}}start(e){let r=this.parseWithError(e);r&&(this.onParseInternal(r,!0),this.initial=!1,this.flush(),this.pending<=0&&this.destroy());}destroy(){this.alive&&(this.onDone(),this.alive=!1);}isAlive(){return this.alive}},jr=class extends $r{constructor(){super(...arguments),this.mode="cross";}};function Vr(t,e){let r=je$1(e.plugins),s=new jr({plugins:r,refs:e.refs,disabledFeatures:e.disabledFeatures,onParse(i,a){let n=new Or({plugins:r,features:s.features,scopeId:e.scopeId,markedRefs:s.marked}),o;try{o=n.serializeTop(i);}catch(l){e.onError&&e.onError(l);return}e.onSerialize(o,a);},onError:e.onError,onDone:e.onDone});return s.start(t),()=>{s.destroy();}}var Nr=class extends Sr{constructor(e){super(e),this.mode="vanilla",this.marked=new Set(e.markedRefs);}assignIndexedValue(e,r){return this.marked.has(e)&&this.refs.set(e,r),r}};function ge$1(t,e={}){let r=je$1(e.plugins);return new Nr({plugins:r,markedRefs:t.m}).deserialize(t.t)}function N$1(t){return {detail:t.detail,bubbles:t.bubbles,cancelable:t.cancelable,composed:t.composed}}var Dr={tag:"seroval-plugins/web/CustomEvent",test(t){return typeof CustomEvent>"u"?!1:t instanceof CustomEvent},parse:{sync(t,e){return {type:e.parse(t.type),options:e.parse(N$1(t))}},async async(t,e){return {type:await e.parse(t.type),options:await e.parse(N$1(t))}},stream(t,e){return {type:e.parse(t.type),options:e.parse(N$1(t))}}},serialize(t,e){return "new CustomEvent("+e.serialize(t.type)+","+e.serialize(t.options)+")"},deserialize(t,e){return new CustomEvent(e.deserialize(t.type),e.deserialize(t.options))}},Y$2=Dr,_r={tag:"seroval-plugins/web/DOMException",test(t){return typeof DOMException>"u"?!1:t instanceof DOMException},parse:{sync(t,e){return {name:e.parse(t.name),message:e.parse(t.message)}},async async(t,e){return {name:await e.parse(t.name),message:await e.parse(t.message)}},stream(t,e){return {name:e.parse(t.name),message:e.parse(t.message)}}},serialize(t,e){return "new DOMException("+e.serialize(t.message)+","+e.serialize(t.name)+")"},deserialize(t,e){return new DOMException(e.deserialize(t.message),e.deserialize(t.name))}},J$2=_r;function D$2(t){return {bubbles:t.bubbles,cancelable:t.cancelable,composed:t.composed}}var Mr={tag:"seroval-plugins/web/Event",test(t){return typeof Event>"u"?!1:t instanceof Event},parse:{sync(t,e){return {type:e.parse(t.type),options:e.parse(D$2(t))}},async async(t,e){return {type:await e.parse(t.type),options:await e.parse(D$2(t))}},stream(t,e){return {type:e.parse(t.type),options:e.parse(D$2(t))}}},serialize(t,e){return "new Event("+e.serialize(t.type)+","+e.serialize(t.options)+")"},deserialize(t,e){return new Event(e.deserialize(t.type),e.deserialize(t.options))}},Z$2=Mr,Lr={tag:"seroval-plugins/web/File",test(t){return typeof File>"u"?!1:t instanceof File},parse:{async async(t,e){return {name:await e.parse(t.name),options:await e.parse({type:t.type,lastModified:t.lastModified}),buffer:await e.parse(await t.arrayBuffer())}}},serialize(t,e){return "new File(["+e.serialize(t.buffer)+"],"+e.serialize(t.name)+","+e.serialize(t.options)+")"},deserialize(t,e){return new File([e.deserialize(t.buffer)],e.deserialize(t.name),e.deserialize(t.options))}},Ur=Lr;function _(t){let e=[];return t.forEach((r,s)=>{e.push([s,r]);}),e}var x$1={},qr={tag:"seroval-plugins/web/FormDataFactory",test(t){return t===x$1},parse:{sync(){},async async(){return await Promise.resolve(void 0)},stream(){}},serialize(t,e){return e.createEffectfulFunction(["e","f","i","s","t"],"f=new FormData;for(i=0,s=e.length;i<s;i++)f.append((t=e[i])[0],t[1]);return f")},deserialize(){return x$1}},Hr={tag:"seroval-plugins/web/FormData",extends:[Ur,qr],test(t){return typeof FormData>"u"?!1:t instanceof FormData},parse:{sync(t,e){return {factory:e.parse(x$1),entries:e.parse(_(t))}},async async(t,e){return {factory:await e.parse(x$1),entries:await e.parse(_(t))}},stream(t,e){return {factory:e.parse(x$1),entries:e.parse(_(t))}}},serialize(t,e){return "("+e.serialize(t.factory)+")("+e.serialize(t.entries)+")"},deserialize(t,e){let r=new FormData,s=e.deserialize(t.entries);for(let i=0,a=s.length;i<a;i++){let n=s[i];r.append(n[0],n[1]);}return r}},Q$2=Hr;function M$1(t){let e=[];return t.forEach((r,s)=>{e.push([s,r]);}),e}var Wr={tag:"seroval-plugins/web/Headers",test(t){return typeof Headers>"u"?!1:t instanceof Headers},parse:{sync(t,e){return e.parse(M$1(t))},async async(t,e){return await e.parse(M$1(t))},stream(t,e){return e.parse(M$1(t))}},serialize(t,e){return "new Headers("+e.serialize(t)+")"},deserialize(t,e){return new Headers(e.deserialize(t))}},E=Wr,A$2={},Br={tag:"seroval-plugins/web/ReadableStreamFactory",test(t){return t===A$2},parse:{sync(){},async async(){return await Promise.resolve(void 0)},stream(){}},serialize(t,e){return e.createFunction(["d"],"new ReadableStream({start:"+e.createEffectfulFunction(["c"],"d.on({next:"+e.createEffectfulFunction(["v"],"c.enqueue(v)")+",throw:"+e.createEffectfulFunction(["v"],"c.error(v)")+",return:"+e.createEffectfulFunction([],"c.close()")+"})")+"})")},deserialize(){return A$2}};function me(t){let e=P$1(),r=t.getReader();async function s(){try{let i=await r.read();i.done?e.return(i.value):(e.next(i.value),await s());}catch(i){e.throw(i);}}return s().catch(()=>{}),e}var Kr={tag:"seroval/plugins/web/ReadableStream",extends:[Br],test(t){return typeof ReadableStream>"u"?!1:t instanceof ReadableStream},parse:{sync(t,e){return {factory:e.parse(A$2),stream:e.parse(P$1())}},async async(t,e){return {factory:await e.parse(A$2),stream:await e.parse(me(t))}},stream(t,e){return {factory:e.parse(A$2),stream:e.parse(me(t))}}},serialize(t,e){return "("+e.serialize(t.factory)+")("+e.serialize(t.stream)+")"},deserialize(t,e){let r=e.deserialize(t.stream);return new ReadableStream({start(s){r.on({next(i){s.enqueue(i);},throw(i){s.error(i);},return(){s.close();}});}})}},I$3=Kr;function ye$1(t,e){return {body:e,cache:t.cache,credentials:t.credentials,headers:t.headers,integrity:t.integrity,keepalive:t.keepalive,method:t.method,mode:t.mode,redirect:t.redirect,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Xr={tag:"seroval-plugins/web/Request",extends:[I$3,E],test(t){return typeof Request>"u"?!1:t instanceof Request},parse:{async async(t,e){return {url:await e.parse(t.url),options:await e.parse(ye$1(t,t.body?await t.clone().arrayBuffer():null))}},stream(t,e){return {url:e.parse(t.url),options:e.parse(ye$1(t,t.clone().body))}}},serialize(t,e){return "new Request("+e.serialize(t.url)+","+e.serialize(t.options)+")"},deserialize(t,e){return new Request(e.deserialize(t.url),e.deserialize(t.options))}},ee$2=Xr;function be$1(t){return {headers:t.headers,status:t.status,statusText:t.statusText}}var Gr={tag:"seroval-plugins/web/Response",extends:[I$3,E],test(t){return typeof Response>"u"?!1:t instanceof Response},parse:{async async(t,e){return {body:await e.parse(t.body?await t.clone().arrayBuffer():null),options:await e.parse(be$1(t))}},stream(t,e){return {body:e.parse(t.clone().body),options:e.parse(be$1(t))}}},serialize(t,e){return "new Response("+e.serialize(t.body)+","+e.serialize(t.options)+")"},deserialize(t,e){return new Response(e.deserialize(t.body),e.deserialize(t.options))}},te$2=Gr,Yr={tag:"seroval-plugins/web/URLSearchParams",test(t){return typeof URLSearchParams>"u"?!1:t instanceof URLSearchParams},parse:{sync(t,e){return e.parse(t.toString())},async async(t,e){return await e.parse(t.toString())},stream(t,e){return e.parse(t.toString())}},serialize(t,e){return "new URLSearchParams("+e.serialize(t)+")"},deserialize(t,e){return new URLSearchParams(e.deserialize(t))}},re=Yr,Jr={tag:"seroval-plugins/web/URL",test(t){return typeof URL>"u"?!1:t instanceof URL},parse:{sync(t,e){return e.parse(t.href)},async async(t,e){return await e.parse(t.href)},stream(t,e){return e.parse(t.href)}},serialize(t,e){return "new URL("+e.serialize(t)+")"},deserialize(t,e){return new URL(e.deserialize(t))}},se=Jr;function Zr(t={}){let e,r=!1;const s=n=>{if(e&&e!==n)throw new Error("Context conflict")};let i;if(t.asyncContext){const n=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;n?i=new n:console.warn("[unctx] `AsyncLocalStorage` is not provided.");}const a=()=>{if(i&&e===void 0){const n=i.getStore();if(n!==void 0)return n}return e};return {use:()=>{const n=a();if(n===void 0)throw new Error("Context is not available");return n},tryUse:()=>a(),set:(n,o)=>{o||s(n),e=n,r=!0;},unset:()=>{e=void 0,r=!1;},call:(n,o)=>{s(n),e=n;try{return i?i.run(n,o):o()}finally{r||(e=void 0);}},async callAsync(n,o){e=n;const l=()=>{e=n;},u=()=>e===n?l:void 0;Se$1.add(u);try{const d=i?i.run(n,o):o();return r||(e=void 0),await d}finally{Se$1.delete(u);}}}}function Qr(t={}){const e={};return {get(r,s={}){return e[r]||(e[r]=Zr({...t,...s})),e[r],e[r]}}}const j=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:{},ze="__unctx__",es=j[ze]||(j[ze]=Qr()),ts=(t,e={})=>es.get(t,e),we$1="__unctx_async_handlers__",Se$1=j[we$1]||(j[we$1]=new Set);function rs(t){let e;const r=Ke(t),s={duplex:"half",method:t.method,headers:t.headers};return t.node.req.body instanceof ArrayBuffer?new Request(r,{...s,body:t.node.req.body}):new Request(r,{...s,get body(){return e||(e=ds(t),e)}})}function ss(t){return t.web??={request:rs(t),url:Ke(t)},t.web.request}function is(){return vs()}const Be=Symbol("$HTTPEvent");function as(t){return typeof t=="object"&&(t instanceof H3Event||t?.[Be]instanceof H3Event||t?.__is_event__===!0)}function h(t){return function(...e){let r=e[0];if(as(r))e[0]=r instanceof H3Event||r.__is_event__?r:r[Be];else {if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(r=is(),!r)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");e.unshift(r);}return t(...e)}}const Ke=h(getRequestURL),ns=h(getRequestIP),V$2=h(setResponseStatus),Re$1=h(getResponseStatus),os=h(getResponseStatusText),C$1=h(getResponseHeaders),xe$1=h(getResponseHeader),ls=h(setResponseHeader),Xe=h(appendResponseHeader),us=h(getCookie),cs=h(setCookie),O=h(setHeader),ds=h(getRequestWebStream),hs=h(removeResponseHeader),fs=h(ss);function ps(){return ts("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:AsyncLocalStorage})}function vs(){return ps().use().event}const L$1="Invariant Violation",{setPrototypeOf:gs=function(t,e){return t.__proto__=e,t}}=Object;class oe extends Error{framesToPop=1;name=L$1;constructor(e=L$1){super(typeof e=="number"?`${L$1}: ${e} (see https://github.com/apollographql/invariant-packages)`:e),gs(this,oe.prototype);}}function ms(t,e){if(!t)throw new oe(e)}const U="solidFetchEvent";function ys(t){return {request:fs(t),response:Ss(t),clientAddress:ns(t),locals:{},nativeEvent:t}}function bs(t){return {...t}}function zs(t){if(!t.context[U]){const e=ys(t);t.context[U]=e;}return t.context[U]}function Ae$1(t,e){for(const[r,s]of e.entries())Xe(t,r,s);}class ws{event;constructor(e){this.event=e;}get(e){const r=xe$1(this.event,e);return Array.isArray(r)?r.join(", "):r||null}has(e){return this.get(e)!==void 0}set(e,r){return ls(this.event,e,r)}delete(e){return hs(this.event,e)}append(e,r){Xe(this.event,e,r);}getSetCookie(){const e=xe$1(this.event,"Set-Cookie");return Array.isArray(e)?e:[e]}forEach(e){return Object.entries(C$1(this.event)).forEach(([r,s])=>e(Array.isArray(s)?s.join(", "):s,r,this))}entries(){return Object.entries(C$1(this.event)).map(([e,r])=>[e,Array.isArray(r)?r.join(", "):r])[Symbol.iterator]()}keys(){return Object.keys(C$1(this.event))[Symbol.iterator]()}values(){return Object.values(C$1(this.event)).map(e=>Array.isArray(e)?e.join(", "):e)[Symbol.iterator]()}[Symbol.iterator](){return this.entries()[Symbol.iterator]()}}function Ss(t){return {get status(){return Re$1(t)},set status(e){V$2(t,e);},get statusText(){return os(t)},set statusText(e){V$2(t,Re$1(t),e);},headers:new ws(t)}}const z$1={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Rs(t={}){const e={options:t,rootNode:Ge(),staticRoutesMap:{}},r=s=>t.strictTrailingSlash?s:s.replace(/\/$/,"")||"/";if(t.routes)for(const s in t.routes)Ee$1(e,r(s),t.routes[s]);return {ctx:e,lookup:s=>xs(e,r(s)),insert:(s,i)=>Ee$1(e,r(s),i),remove:s=>As(e,r(s))}}function xs(t,e){const r=t.staticRoutesMap[e];if(r)return r.data;const s=e.split("/"),i={};let a=!1,n=null,o=t.rootNode,l=null;for(let u=0;u<s.length;u++){const d=s[u];o.wildcardChildNode!==null&&(n=o.wildcardChildNode,l=s.slice(u).join("/"));const c=o.children.get(d);if(c===void 0){if(o&&o.placeholderChildren.length>1){const f=s.length-u;o=o.placeholderChildren.find(y=>y.maxDepth===f)||null;}else o=o.placeholderChildren[0]||null;if(!o)break;o.paramName&&(i[o.paramName]=d),a=!0;}else o=c;}return (o===null||o.data===null)&&n!==null&&(o=n,i[o.paramName||"_"]=l,a=!0),o?a?{...o.data,params:a?i:void 0}:o.data:null}function Ee$1(t,e,r){let s=!0;const i=e.split("/");let a=t.rootNode,n=0;const o=[a];for(const l of i){let u;if(u=a.children.get(l))a=u;else {const d=Es(l);u=Ge({type:d,parent:a}),a.children.set(l,u),d===z$1.PLACEHOLDER?(u.paramName=l==="*"?`_${n++}`:l.slice(1),a.placeholderChildren.push(u),s=!1):d===z$1.WILDCARD&&(a.wildcardChildNode=u,u.paramName=l.slice(3)||"_",s=!1),o.push(u),a=u;}}for(const[l,u]of o.entries())u.maxDepth=Math.max(o.length-l,u.maxDepth||0);return a.data=r,s===!0&&(t.staticRoutesMap[e]=a),a}function As(t,e){let r=!1;const s=e.split("/");let i=t.rootNode;for(const a of s)if(i=i.children.get(a),!i)return r;if(i.data){const a=s.at(-1)||"";i.data=null,Object.keys(i.children).length===0&&i.parent&&(i.parent.children.delete(a),i.parent.wildcardChildNode=null,i.parent.placeholderChildren=[]),r=!0;}return r}function Ge(t={}){return {type:t.type||z$1.NORMAL,maxDepth:0,parent:t.parent||null,children:new Map,data:t.data||null,paramName:t.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Es(t){return t.startsWith("**")?z$1.WILDCARD:t[0]===":"||t==="*"?z$1.PLACEHOLDER:z$1.NORMAL}const Ye=[{page:!0,$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>import('../build/_...404_.mjs'),import:()=>import('../build/_...404_.mjs')},path:"/*404",filePath:"/Users/albertoforni/Projects/me/src/routes/[...404].tsx"},{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>import('../build/index.mjs'),import:()=>import('../build/index.mjs')},path:"/",filePath:"/Users/albertoforni/Projects/me/src/routes/index.tsx"}],Is=Ps(Ye.filter(t=>t.page));function Ps(t){function e(r,s,i,a){const n=Object.values(r).find(o=>i.startsWith(o.id+"/"));return n?(e(n.children||(n.children=[]),s,i.slice(n.id.length)),r):(r.push({...s,id:i,path:i.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),r)}return t.sort((r,s)=>r.path.length-s.path.length).reduce((r,s)=>e(r,s,s.path,s.path),[])}function ks(t){return t.$HEAD||t.$GET||t.$POST||t.$PUT||t.$PATCH||t.$DELETE}Rs({routes:Ye.reduce((t,e)=>{if(!ks(e))return t;let r=e.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(s,i)=>`**:${i}`).split("/").map(s=>s.startsWith(":")||s.startsWith("*")?s:encodeURIComponent(s)).join("/");if(/:[^/]*\?/g.test(r))throw new Error(`Optional parameters are not supported in API routes: ${r}`);if(t[r])throw new Error(`Duplicate API routes for "${r}" found at "${t[r].route.path}" and "${e.path}"`);return t[r]={route:e},t},{})});var Cs=" ";const Os={style:t=>ssrElement("style",t.attrs,()=>escape(t.children),!0),link:t=>ssrElement("link",t.attrs,void 0,!0),script:t=>t.attrs.src?ssrElement("script",mergeProps(()=>t.attrs,{get id(){return t.key}}),()=>ssr(Cs),!0):null,noscript:t=>ssrElement("noscript",t.attrs,()=>escape(t.children),!0)};function Ts(t,e){let{tag:r,attrs:{key:s,...i}={key:void 0},children:a}=t;return Os[r]({attrs:{...i,nonce:e},key:s,children:a})}function $s(t,e,r,s="default"){return lazy(async()=>{{const a=(await t.import())[s],o=(await e.inputs?.[t.src].assets()).filter(u=>u.tag==="style"||u.attrs.rel==="stylesheet");return {default:u=>[...o.map(d=>Ts(d)),createComponent(a,u)]}}})}function Je(){function t(r){return {...r,...r.$$route?r.$$route.require().route:void 0,info:{...r.$$route?r.$$route.require().route.info:{},filesystem:!0},component:r.$component&&$s(r.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:r.children?r.children.map(t):void 0}}return Is.map(t)}let Ie$1;const si=isServer?()=>getRequestEvent().routes:()=>Ie$1||(Ie$1=Je());function js(t){const e=us(t.nativeEvent,"flash");if(e)try{let r=JSON.parse(e);if(!r||!r.result)return;const s=[...r.input.slice(0,-1),new Map(r.input[r.input.length-1])],i=r.error?new Error(r.result):r.result;return {input:s,url:r.url,pending:!1,result:r.thrown?void 0:i,error:r.thrown?i:void 0}}catch(r){console.error(r);}finally{cs(t.nativeEvent,"flash","",{maxAge:0});}}async function Vs(t){const e=globalThis.MANIFEST.client;return globalThis.MANIFEST.ssr,t.response.headers.set("Content-Type","text/html"),Object.assign(t,{manifest:await e.json(),assets:[...await e.inputs[e.handler].assets()],router:{submission:js(t)},routes:Je(),complete:!1,$islands:new Set})}const Ns=new Set([301,302,303,307,308]);function Ds(t){return t.status&&Ns.has(t.status)?t.status:302}function _s(t){const e=new TextEncoder().encode(t),r=e.length,s=r.toString(16),i="00000000".substring(0,8-s.length)+s,a=new TextEncoder().encode(`;0x${i};`),n=new Uint8Array(12+r);return n.set(a),n.set(e,12),n}function Pe$1(t,e){return new ReadableStream({start(r){Vr(e,{scopeId:t,plugins:[Y$2,J$2,Z$2,Q$2,E,I$3,ee$2,te$2,re,se],onSerialize(s,i){r.enqueue(_s(i?`(${At$1(t)},${s})`:s));},onDone(){r.close();},onError(s){r.error(s);}});}})}async function Ms(t){const e=zs(t),r=e.request,s=r.headers.get("X-Server-Id"),i=r.headers.get("X-Server-Instance"),a=r.headers.has("X-Single-Flight"),n=new URL(r.url);let o,l;if(s)ms(typeof s=="string","Invalid server function"),[o,l]=s.split("#");else if(o=n.searchParams.get("id"),l=n.searchParams.get("name"),!o||!l)throw new Error("Invalid request");const u=(await globalThis.MANIFEST["server-fns"].chunks[o].import())[l];let d=[];if(!i||t.method==="GET"){const c=n.searchParams.get("args");if(c){const f=JSON.parse(c);(f.t?ge$1(f,{plugins:[Y$2,J$2,Z$2,Q$2,E,I$3,ee$2,te$2,re,se]}):f).forEach(y=>d.push(y));}}if(t.method==="POST"){const c=r.headers.get("content-type"),f=t.node.req,y=f instanceof ReadableStream,le=y&&f.locked,ue=y?f:f.body;if(c?.startsWith("multipart/form-data")||c?.startsWith("application/x-www-form-urlencoded"))d.push(await(le?r:new Request(r,{...r,body:ue})).formData());else if(c?.startsWith("application/json")){const Ze=le?r:new Request(r,{...r,body:ue});d=ge$1(await Ze.json(),{plugins:[Y$2,J$2,Z$2,Q$2,E,I$3,ee$2,te$2,re,se]});}}try{let c=await provideRequestEvent(e,async()=>(sharedConfig.context={event:e},e.locals.serverFunctionMeta={id:o+"#"+l},u(...d)));if(a&&i&&(c=await Fe(e,c)),c instanceof Response){if(c.headers&&c.headers.has("X-Content-Raw"))return c;i&&(c.headers&&Ae$1(t,c.headers),c.status&&(c.status<300||c.status>=400)&&V$2(t,c.status),c.customBody?c=await c.customBody():c.body==null&&(c=null));}return i?(O(t,"content-type","text/javascript"),Pe$1(i,c)):ke(c,r,d)}catch(c){if(c instanceof Response)a&&i&&(c=await Fe(e,c)),c.headers&&Ae$1(t,c.headers),c.status&&(!i||c.status<300||c.status>=400)&&V$2(t,c.status),c.customBody?c=c.customBody():c.body==null&&(c=null),O(t,"X-Error","true");else if(i){const f=c instanceof Error?c.message:typeof c=="string"?c:"true";O(t,"X-Error",f.replace(/[\r\n]+/g,""));}else c=ke(c,r,d,!0);return i?(O(t,"content-type","text/javascript"),Pe$1(i,c)):c}}function ke(t,e,r,s){const i=new URL(e.url),a=t instanceof Error;let n=302,o;return t instanceof Response?(o=new Headers(t.headers),t.headers.has("Location")&&(o.set("Location",new URL(t.headers.get("Location"),i.origin+"").toString()),n=Ds(t))):o=new Headers({Location:new URL(e.headers.get("referer")).toString()}),t&&o.append("Set-Cookie",`flash=${encodeURIComponent(JSON.stringify({url:i.pathname+i.search,result:a?t.message:t,thrown:s,error:a,input:[...r.slice(0,-1),[...r[r.length-1].entries()]]}))}; Secure; HttpOnly;`),new Response(null,{status:n,headers:o})}let q$3;async function Fe(t,e){let r,s=new URL(t.request.headers.get("referer")).toString();e instanceof Response&&(e.headers.has("X-Revalidate")&&(r=e.headers.get("X-Revalidate").split(",")),e.headers.has("Location")&&(s=new URL(e.headers.get("Location"),new URL(t.request.url).origin+"").toString()));const i=bs(t);return i.request=new Request(s,{headers:t.request.headers}),await provideRequestEvent(i,async()=>{await Vs(i),q$3||(q$3=(await import('../build/app.mjs')).default),i.router.dataOnly=r||!0,i.router.previousUrl=t.request.headers.get("referer");try{renderToString(()=>{sharedConfig.context.event=i,q$3();});}catch(o){console.log(o);}const a=i.router.data;if(!a)return e;let n=!1;for(const o in a)a[o]===void 0?delete a[o]:n=!0;return n&&(e instanceof Response?e.customBody&&(a._$value=e.customBody()):(a._$value=e,e=new Response(null,{status:200})),e.customBody=()=>a,e.headers.set("X-Single-Flight","true")),e})}const ii=eventHandler(Ms);

const T = createContext(), x = ["title", "meta"], p = [], u = ["name", "http-equiv", "content", "charset", "media"].concat(["property"]), l = (r, t) => {
  const e = Object.fromEntries(Object.entries(r.props).filter(([n]) => t.includes(n)).sort());
  return (Object.hasOwn(e, "name") || Object.hasOwn(e, "property")) && (e.name = e.name || e.property, delete e.property), r.tag + JSON.stringify(e);
};
function w() {
  if (!sharedConfig.context) {
    const e = document.head.querySelectorAll("[data-sm]");
    Array.prototype.forEach.call(e, (n) => n.parentNode.removeChild(n));
  }
  const r = /* @__PURE__ */ new Map();
  function t(e) {
    if (e.ref) return e.ref;
    let n = document.querySelector(`[data-sm="${e.id}"]`);
    return n ? (n.tagName.toLowerCase() !== e.tag && (n.parentNode && n.parentNode.removeChild(n), n = document.createElement(e.tag)), n.removeAttribute("data-sm")) : n = document.createElement(e.tag), n;
  }
  return { addTag(e) {
    if (x.indexOf(e.tag) !== -1) {
      const s = e.tag === "title" ? p : u, a = l(e, s);
      r.has(a) || r.set(a, []);
      let i = r.get(a), m = i.length;
      i = [...i, e], r.set(a, i);
      let c = t(e);
      e.ref = c, spread(c, e.props);
      let d = null;
      for (var n = m - 1; n >= 0; n--) if (i[n] != null) {
        d = i[n];
        break;
      }
      return c.parentNode != document.head && document.head.appendChild(c), d && d.ref && d.ref.parentNode && document.head.removeChild(d.ref), m;
    }
    let o = t(e);
    return e.ref = o, spread(o, e.props), o.parentNode != document.head && document.head.appendChild(o), -1;
  }, removeTag(e, n) {
    const o = e.tag === "title" ? p : u, s = l(e, o);
    if (e.ref) {
      const a = r.get(s);
      if (a) {
        if (e.ref.parentNode) {
          e.ref.parentNode.removeChild(e.ref);
          for (let i = n - 1; i >= 0; i--) a[i] != null && document.head.appendChild(a[i].ref);
        }
        a[n] = null, r.set(s, a);
      } else e.ref.parentNode && e.ref.parentNode.removeChild(e.ref);
    }
  } };
}
function A$1() {
  const r = [];
  return useAssets(() => ssr(q$2(r))), { addTag(t) {
    if (x.indexOf(t.tag) !== -1) {
      const e = t.tag === "title" ? p : u, n = l(t, e), o = r.findIndex((s) => s.tag === t.tag && l(s, e) === n);
      o !== -1 && r.splice(o, 1);
    }
    return r.push(t), r.length;
  }, removeTag(t, e) {
  } };
}
const H = (r) => {
  const t = isServer ? A$1() : w();
  return createComponent$1(T.Provider, { value: t, get children() {
    return r.children;
  } });
}, f = (r, t, e) => (S({ tag: r, props: t, setting: e, id: createUniqueId(), get name() {
  return t.name || t.property;
} }), null);
function S(r) {
  const t = useContext(T);
  if (!t) throw new Error("<MetaProvider /> should be in the tree");
  createRenderEffect(() => {
    const e = t.addTag(r);
    onCleanup(() => t.removeTag(r, e));
  });
}
function q$2(r) {
  return r.map((t) => {
    var _a, _b;
    const n = Object.keys(t.props).map((s) => s === "children" ? "" : ` ${s}="${escape(t.props[s], true)}"`).join("");
    let o = t.props.children;
    return Array.isArray(o) && (o = o.join("")), ((_a = t.setting) == null ? void 0 : _a.close) ? `<${t.tag} data-sm="${t.id}"${n}>${((_b = t.setting) == null ? void 0 : _b.escape) ? escape(o) : o || ""}</${t.tag}>` : `<${t.tag} data-sm="${t.id}"${n}/>`;
  }).join("");
}
const I$2 = (r) => f("title", r, { escape: true, close: true }), L = (r) => f("meta", r), R$1 = (r) => f("link", r), J$1 = isServer ? (r) => {
  const t = getRequestEvent();
  return t.response.status = r.code, t.response.statusText = r.text, onCleanup(() => !t.nativeEvent.handled && !t.complete && (t.response.status = 200)), null;
} : (r) => null;

function ge() {
  let t = /* @__PURE__ */ new Set();
  function e(s) {
    return t.add(s), () => t.delete(s);
  }
  let n = false;
  function r(s, o) {
    if (n) return !(n = false);
    const a = { to: s, options: o, defaultPrevented: false, preventDefault: () => a.defaultPrevented = true };
    for (const c of t) c.listener({ ...a, from: c.location, retry: (f) => {
      f && (n = true), c.navigate(s, { ...o, resolve: false });
    } });
    return !a.defaultPrevented;
  }
  return { subscribe: e, confirm: r };
}
let I$1;
function Q$1() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, ""), I$1 = window.history.state._depth;
}
isServer || Q$1();
function _e(t) {
  return { ...t, _depth: window.history.state && window.history.state._depth };
}
function qe(t, e) {
  let n = false;
  return () => {
    const r = I$1;
    Q$1();
    const s = r == null ? null : I$1 - r;
    if (n) {
      n = false;
      return;
    }
    s && e(s) ? (n = true, window.history.go(-s)) : t();
  };
}
const ye = /^(?:[a-z0-9]+:)?\/\//i, we = /^\/+|(\/)\/+$/g, ve = "http://sr";
function C(t, e = false) {
  const n = t.replace(we, "$1");
  return n ? e || /^[?#]/.test(n) ? n : "/" + n : "";
}
function q$1(t, e, n) {
  if (ye.test(e)) return;
  const r = C(t), s = n && C(n);
  let o = "";
  return !s || e.startsWith("/") ? o = r : s.toLowerCase().indexOf(r.toLowerCase()) !== 0 ? o = r + s : o = s, (o || "/") + C(e, !o);
}
function Re(t, e) {
  if (t == null) throw new Error(e);
  return t;
}
function Pe(t, e) {
  return C(t).replace(/\/*(\*.*)?$/g, "") + C(e);
}
function V$1(t) {
  const e = {};
  return t.searchParams.forEach((n, r) => {
    r in e ? Array.isArray(e[r]) ? e[r].push(n) : e[r] = [e[r], n] : e[r] = n;
  }), e;
}
function xe(t, e, n) {
  const [r, s] = t.split("/*", 2), o = r.split("/").filter(Boolean), a = o.length;
  return (c) => {
    const f = c.split("/").filter(Boolean), h = f.length - a;
    if (h < 0 || h > 0 && s === void 0 && !e) return null;
    const l = { path: a ? "" : "/", params: {} }, m = (d) => n === void 0 ? void 0 : n[d];
    for (let d = 0; d < a; d++) {
      const p = o[d], g = p[0] === ":", v = g ? f[d] : f[d].toLowerCase(), A = g ? p.slice(1) : p.toLowerCase();
      if (g && W(v, m(A))) l.params[A] = v;
      else if (g || !W(v, A)) return null;
      l.path += `/${v}`;
    }
    if (s) {
      const d = h ? f.slice(-h).join("/") : "";
      if (W(d, m(s))) l.params[s] = d;
      else return null;
    }
    return l;
  };
}
function W(t, e) {
  const n = (r) => r === t;
  return e === void 0 ? true : typeof e == "string" ? n(e) : typeof e == "function" ? e(t) : Array.isArray(e) ? e.some(n) : e instanceof RegExp ? e.test(t) : false;
}
function be(t) {
  const [e, n] = t.pattern.split("/*", 2), r = e.split("/").filter(Boolean);
  return r.reduce((s, o) => s + (o.startsWith(":") ? 2 : 3), r.length - (n === void 0 ? 0 : 1));
}
function Y$1(t) {
  const e = /* @__PURE__ */ new Map(), n = getOwner();
  return new Proxy({}, { get(r, s) {
    return e.has(s) || runWithOwner(n, () => e.set(s, createMemo(() => t()[s]))), e.get(s)();
  }, getOwnPropertyDescriptor() {
    return { enumerable: true, configurable: true };
  }, ownKeys() {
    return Reflect.ownKeys(t());
  } });
}
function Z$1(t) {
  let e = /(\/?\:[^\/]+)\?/.exec(t);
  if (!e) return [t];
  let n = t.slice(0, e.index), r = t.slice(e.index + e[0].length);
  const s = [n, n += e[1]];
  for (; e = /^(\/\:[^\/]+)\?/.exec(r); ) s.push(n += e[1]), r = r.slice(e[0].length);
  return Z$1(r).reduce((o, a) => [...o, ...s.map((c) => c + a)], []);
}
const Ae = 100, Ce = createContext(), ee$1 = createContext(), D$1 = () => Re(useContext(Ce), "<A> and 'use' router primitives can be only used inside a Route."), Ee = () => useContext(ee$1) || D$1().base, We = (t) => {
  const e = Ee();
  return createMemo(() => e.resolvePath(t()));
}, $e = (t) => {
  const e = D$1();
  return createMemo(() => {
    const n = t();
    return n !== void 0 ? e.renderPath(n) : n;
  });
}, Ie = () => D$1().location;
function Le(t, e = "") {
  const { component: n, preload: r, load: s, children: o, info: a } = t, c = !o || Array.isArray(o) && !o.length, f = { key: t, component: n, preload: r || s, info: a };
  return te$1(t.path).reduce((h, l) => {
    for (const m of Z$1(l)) {
      const d = Pe(e, m);
      let p = c ? d : d.split("/*", 1)[0];
      p = p.split("/").map((g) => g.startsWith(":") || g.startsWith("*") ? g : encodeURIComponent(g)).join("/"), h.push({ ...f, originalPath: l, pattern: p, matcher: xe(p, !c, t.matchFilters) });
    }
    return h;
  }, []);
}
function Se(t, e = 0) {
  return { routes: t, score: be(t[t.length - 1]) * 1e4 - e, matcher(n) {
    const r = [];
    for (let s = t.length - 1; s >= 0; s--) {
      const o = t[s], a = o.matcher(n);
      if (!a) return null;
      r.unshift({ ...a, route: o });
    }
    return r;
  } };
}
function te$1(t) {
  return Array.isArray(t) ? t : [t];
}
function Oe(t, e = "", n = [], r = []) {
  const s = te$1(t);
  for (let o = 0, a = s.length; o < a; o++) {
    const c = s[o];
    if (c && typeof c == "object") {
      c.hasOwnProperty("path") || (c.path = "");
      const f = Le(c, e);
      for (const h of f) {
        n.push(h);
        const l = Array.isArray(c.children) && c.children.length === 0;
        if (c.children && !l) Oe(c.children, h.pattern, n, r);
        else {
          const m = Se([...n], r.length);
          r.push(m);
        }
        n.pop();
      }
    }
  }
  return n.length ? r : r.sort((o, a) => a.score - o.score);
}
function $(t, e) {
  for (let n = 0, r = t.length; n < r; n++) {
    const s = t[n].matcher(e);
    if (s) return s;
  }
  return [];
}
function je(t, e, n) {
  const r = new URL(ve), s = createMemo((l) => {
    const m = t();
    try {
      return new URL(m, r);
    } catch {
      return console.error(`Invalid path ${m}`), l;
    }
  }, r, { equals: (l, m) => l.href === m.href }), o = createMemo(() => s().pathname), a = createMemo(() => s().search, true), c = createMemo(() => s().hash), f = () => "", h = on$1(a, () => V$1(s()));
  return { get pathname() {
    return o();
  }, get search() {
    return a();
  }, get hash() {
    return c();
  }, get state() {
    return e();
  }, get key() {
    return f();
  }, query: n ? n(h) : Y$1(h) };
}
let R;
function Me() {
  return R;
}
function De(t, e, n, r = {}) {
  const { signal: [s, o], utils: a = {} } = t, c = a.parsePath || ((i) => i), f = a.renderPath || ((i) => i), h = a.beforeLeave || ge(), l = q$1("", r.base || "");
  if (l === void 0) throw new Error(`${l} is not a valid base path`);
  l && !s().value && o({ value: l, replace: true, scroll: false });
  const [m, d] = createSignal(false);
  let p;
  const g = (i, u) => {
    u.value === v() && u.state === E() || (p === void 0 && d(true), R = i, p = u, startTransition(() => {
      p === u && (A(p.value), ne(p.state), resetErrorBoundaries(), isServer || U[1]([]));
    }).finally(() => {
      p === u && batch(() => {
        R = void 0, i === "navigate" && ae(p), d(false), p = void 0;
      });
    }));
  }, [v, A] = createSignal(s().value), [E, ne] = createSignal(s().state), L = je(v, E, a.queryWrapper), S = [], U = createSignal(isServer ? ce() : []), z = createMemo(() => typeof r.transformUrl == "function" ? $(e(), r.transformUrl(L.pathname)) : $(e(), L.pathname)), H = () => {
    const i = z(), u = {};
    for (let y = 0; y < i.length; y++) Object.assign(u, i[y].params);
    return u;
  }, re = a.paramsWrapper ? a.paramsWrapper(H, e) : Y$1(H), K = { pattern: l, path: () => l, outlet: () => null, resolvePath(i) {
    return q$1(l, i);
  } };
  return createRenderEffect(on$1(s, (i) => g("native", i), { defer: true })), { base: K, location: L, params: re, isRouting: m, renderPath: f, parsePath: c, navigatorFactory: oe, matches: z, beforeLeave: h, preloadRoute: ie, singleFlight: r.singleFlight === void 0 ? true : r.singleFlight, submissions: U };
  function se(i, u, y) {
    untrack(() => {
      if (typeof u == "number") {
        u && (a.go ? a.go(u) : console.warn("Router integration does not support relative routing"));
        return;
      }
      const O = !u || u[0] === "?", { replace: j, resolve: P, scroll: B, state: x } = { replace: false, resolve: !O, scroll: true, ...y }, b = P ? i.resolvePath(u) : q$1(O && L.pathname || "", u);
      if (b === void 0) throw new Error(`Path '${u}' is not a routable path`);
      if (S.length >= Ae) throw new Error("Too many redirects");
      const T = v();
      if (b !== T || x !== E()) if (isServer) {
        const k = getRequestEvent();
        k && (k.response = { status: 302, headers: new Headers({ Location: b }) }), o({ value: b, replace: j, scroll: B, state: x });
      } else h.confirm(b, y) && (S.push({ value: T, replace: j, scroll: B, state: E() }), g("navigate", { value: b, state: x }));
    });
  }
  function oe(i) {
    return i = i || useContext(ee$1) || K, (u, y) => se(i, u, y);
  }
  function ae(i) {
    const u = S[0];
    u && (o({ ...i, replace: u.replace, scroll: u.scroll }), S.length = 0);
  }
  function ie(i, u) {
    const y = $(e(), i.pathname), O = R;
    R = "preload";
    for (let j in y) {
      const { route: P, params: B } = y[j];
      P.component && P.component.preload && P.component.preload();
      const { preload: x } = P;
      u && x && runWithOwner(n(), () => x({ params: B, location: { pathname: i.pathname, search: i.search, hash: i.hash, query: V$1(i), state: null, key: "" }, intent: "preload" }));
    }
    R = O;
  }
  function ce() {
    const i = getRequestEvent();
    return i && i.router && i.router.submission ? [i.router.submission] : [];
  }
}
function Ue(t, e, n, r) {
  const { base: s, location: o, params: a } = t, { pattern: c, component: f, preload: h } = r().route, l = createMemo(() => r().path);
  f && f.preload && f.preload();
  const m = h ? h({ params: a, location: o, intent: R || "initial" }) : void 0;
  return { parent: e, pattern: c, path: l, outlet: () => f ? createComponent(f, { params: a, location: o, data: m, get children() {
    return n();
  } }) : n(), resolvePath(p) {
    return q$1(s.path(), p, l());
  } };
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
const ae = (e) => (t) => {
  const { base: n } = t, s = children(() => t.children), r = createMemo(() => Oe(s(), t.base || ""));
  let a;
  const o = De(e, r, () => a, { base: n, singleFlight: t.singleFlight, transformUrl: t.transformUrl });
  return e.create && e.create(o), createComponent$1(Ce.Provider, { value: o, get children() {
    return createComponent$1(lt, { routerState: o, get root() {
      return t.root;
    }, get preload() {
      return t.rootPreload || t.rootLoad;
    }, get children() {
      return [(a = getOwner()) && null, createComponent$1(ut, { routerState: o, get branches() {
        return r();
      } })];
    } });
  } });
};
function lt(e) {
  const t = e.routerState.location, n = e.routerState.params, s = createMemo(() => e.preload && untrack(() => {
    e.preload({ params: n, location: t, intent: Me() || "initial" });
  }));
  return createComponent$1(Show, { get when() {
    return e.root;
  }, keyed: true, get fallback() {
    return e.children;
  }, children: (r) => createComponent$1(r, { params: n, location: t, get data() {
    return s();
  }, get children() {
    return e.children;
  } }) });
}
function ut(e) {
  if (isServer) {
    const r = getRequestEvent();
    if (r && r.router && r.router.dataOnly) {
      dt(r, e.routerState, e.branches);
      return;
    }
    r && ((r.router || (r.router = {})).matches || (r.router.matches = e.routerState.matches().map(({ route: a, path: o, params: i }) => ({ path: a.originalPath, pattern: a.pattern, match: o, params: i, info: a.info }))));
  }
  const t = [];
  let n;
  const s = createMemo(on$1(e.routerState.matches, (r, a, o) => {
    let i = a && r.length === a.length;
    const l = [];
    for (let c = 0, p = r.length; c < p; c++) {
      const R = a && a[c], m = r[c];
      o && R && m.route.key === R.route.key ? l[c] = o[c] : (i = false, t[c] && t[c](), createRoot((w) => {
        t[c] = w, l[c] = Ue(e.routerState, l[c - 1] || e.routerState.base, B(() => s()[c + 1]), () => e.routerState.matches()[c]);
      }));
    }
    return t.splice(r.length).forEach((c) => c()), o && i ? o : (n = l[0], l);
  }));
  return B(() => s() && n)();
}
const B = (e) => () => createComponent$1(Show, { get when() {
  return e();
}, keyed: true, children: (t) => createComponent$1(ee$1.Provider, { value: t, get children() {
  return t.outlet();
} }) });
function dt(e, t, n) {
  const s = new URL(e.request.url), r = $(n, new URL(e.router.previousUrl || e.request.url).pathname), a = $(n, s.pathname);
  for (let o = 0; o < a.length; o++) {
    (!r[o] || a[o].route !== r[o].route) && (e.router.dataOnly = true);
    const { route: i, params: l } = a[o];
    i.preload && i.preload({ params: l, location: t.location, intent: "preload" });
  }
}
function ht([e, t], n, s) {
  return [e, s ? (r) => t(s(r)) : t];
}
function ft(e) {
  let t = false;
  const n = (r) => typeof r == "string" ? { value: r } : r, s = ht(createSignal(n(e.get()), { equals: (r, a) => r.value === a.value && r.state === a.state }), void 0, (r) => (!t && e.set(r), sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = true), r));
  return e.init && onCleanup(e.init((r = e.get()) => {
    t = true, s[1](n(r)), t = false;
  })), ae({ signal: s, create: e.create, utils: e.utils });
}
function pt(e, t, n) {
  return e.addEventListener(t, n), () => e.removeEventListener(t, n);
}
function mt(e, t) {
  const n = e && document.getElementById(e);
  n ? n.scrollIntoView() : t && window.scrollTo(0, 0);
}
function gt(e) {
  const t = new URL(e);
  return t.pathname + t.search;
}
function yt(e) {
  let t;
  const n = { value: e.url || (t = getRequestEvent()) && gt(t.request.url) || "" };
  return ae({ signal: [() => n, (s) => Object.assign(n, s)] })(e);
}
const wt = /* @__PURE__ */ new Map();
function Rt(e = true, t = false, n = "/_server", s) {
  return (r) => {
    const a = r.base.path(), o = r.navigatorFactory(r.base);
    let i, l;
    function c(u) {
      return u.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function p(u) {
      if (u.defaultPrevented || u.button !== 0 || u.metaKey || u.altKey || u.ctrlKey || u.shiftKey) return;
      const h = u.composedPath().find((j) => j instanceof Node && j.nodeName.toUpperCase() === "A");
      if (!h || t && !h.hasAttribute("link")) return;
      const g = c(h), f = g ? h.href.baseVal : h.href;
      if ((g ? h.target.baseVal : h.target) || !f && !h.hasAttribute("state")) return;
      const $ = (h.getAttribute("rel") || "").split(/\s+/);
      if (h.hasAttribute("download") || $ && $.includes("external")) return;
      const T = g ? new URL(f, document.baseURI) : new URL(f);
      if (!(T.origin !== window.location.origin || a && T.pathname && !T.pathname.toLowerCase().startsWith(a.toLowerCase()))) return [h, T];
    }
    function R(u) {
      const h = p(u);
      if (!h) return;
      const [g, f] = h, U = r.parsePath(f.pathname + f.search + f.hash), $ = g.getAttribute("state");
      u.preventDefault(), o(U, { resolve: false, replace: g.hasAttribute("replace"), scroll: !g.hasAttribute("noscroll"), state: $ ? JSON.parse($) : void 0 });
    }
    function m(u) {
      const h = p(u);
      if (!h) return;
      const [g, f] = h;
      s && (f.pathname = s(f.pathname)), r.preloadRoute(f, g.getAttribute("preload") !== "false");
    }
    function w(u) {
      clearTimeout(i);
      const h = p(u);
      if (!h) return l = null;
      const [g, f] = h;
      l !== g && (s && (f.pathname = s(f.pathname)), i = setTimeout(() => {
        r.preloadRoute(f, g.getAttribute("preload") !== "false"), l = g;
      }, 20));
    }
    function C(u) {
      if (u.defaultPrevented) return;
      let h = u.submitter && u.submitter.hasAttribute("formaction") ? u.submitter.getAttribute("formaction") : u.target.getAttribute("action");
      if (!h) return;
      if (!h.startsWith("https://action/")) {
        const f = new URL(h, ve);
        if (h = r.parsePath(f.pathname + f.search), !h.startsWith(n)) return;
      }
      if (u.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
      const g = wt.get(h);
      if (g) {
        u.preventDefault();
        const f = new FormData(u.target, u.submitter);
        g.call({ r, f: u.target }, u.target.enctype === "multipart/form-data" ? f : new URLSearchParams(f));
      }
    }
    delegateEvents(["click", "submit"]), document.addEventListener("click", R), e && (document.addEventListener("mousemove", w, { passive: true }), document.addEventListener("focusin", m, { passive: true }), document.addEventListener("touchstart", m, { passive: true })), document.addEventListener("submit", C), onCleanup(() => {
      document.removeEventListener("click", R), e && (document.removeEventListener("mousemove", w), document.removeEventListener("focusin", m), document.removeEventListener("touchstart", m)), document.removeEventListener("submit", C);
    });
  };
}
function bt(e) {
  if (isServer) return yt(e);
  const t = () => {
    const s = window.location.pathname.replace(/^\/+/, "/") + window.location.search, r = window.history.state && window.history.state._depth && Object.keys(window.history.state).length === 1 ? void 0 : window.history.state;
    return { value: s + window.location.hash, state: r };
  }, n = ge();
  return ft({ get: t, set({ value: s, replace: r, scroll: a, state: o }) {
    r ? window.history.replaceState(_e(o), "", s) : window.history.pushState(o, "", s), mt(decodeURIComponent(window.location.hash.slice(1)), a), Q$1();
  }, init: (s) => pt(window, "popstate", qe(s, (r) => {
    if (r && r < 0) return !n.confirm(r);
    {
      const a = t();
      return !n.confirm(a.value, { state: a.state });
    }
  })), create: Rt(e.preload, e.explicitLinks, e.actionBase, e.transformUrl), utils: { go: (s) => window.history.go(s), beforeLeave: n } })(e);
}
var St = " ";
const Et = { style: (e) => ssrElement("style", e.attrs, () => escape(e.children), true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(St), true) : null, noscript: (e) => ssrElement("noscript", e.attrs, () => escape(e.children), true) };
function I(e, t) {
  let { tag: n, attrs: { key: s, ...r } = { key: void 0 }, children: a } = e;
  return Et[n]({ attrs: { ...r, nonce: t }, key: s, children: a });
}
function At(e, t, n, s = "default") {
  return lazy(async () => {
    var _a;
    {
      const a = (await e.import())[s], i = (await ((_a = t.inputs) == null ? void 0 : _a[e.src].assets())).filter((c) => c.tag === "style" || c.attrs.rel === "stylesheet");
      return { default: (c) => [...i.map((p) => I(p)), createComponent(a, c)] };
    }
  });
}
const A = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
function Ct(e = {}) {
  const t = { options: e, rootNode: ie(), staticRoutesMap: {} }, n = (s) => e.strictTrailingSlash ? s : s.replace(/\/$/, "") || "/";
  if (e.routes) for (const s in e.routes) K(t, n(s), e.routes[s]);
  return { ctx: t, lookup: (s) => $t(t, n(s)), insert: (s, r) => K(t, n(s), r), remove: (s) => Tt(t, n(s)) };
}
function $t(e, t) {
  const n = e.staticRoutesMap[t];
  if (n) return n.data;
  const s = t.split("/"), r = {};
  let a = false, o = null, i = e.rootNode, l = null;
  for (let c = 0; c < s.length; c++) {
    const p = s[c];
    i.wildcardChildNode !== null && (o = i.wildcardChildNode, l = s.slice(c).join("/"));
    const R = i.children.get(p);
    if (R === void 0) {
      if (i && i.placeholderChildren.length > 1) {
        const m = s.length - c;
        i = i.placeholderChildren.find((w) => w.maxDepth === m) || null;
      } else i = i.placeholderChildren[0] || null;
      if (!i) break;
      i.paramName && (r[i.paramName] = p), a = true;
    } else i = R;
  }
  return (i === null || i.data === null) && o !== null && (i = o, r[i.paramName || "_"] = l, a = true), i ? a ? { ...i.data, params: a ? r : void 0 } : i.data : null;
}
function K(e, t, n) {
  let s = true;
  const r = t.split("/");
  let a = e.rootNode, o = 0;
  const i = [a];
  for (const l of r) {
    let c;
    if (c = a.children.get(l)) a = c;
    else {
      const p = Lt(l);
      c = ie({ type: p, parent: a }), a.children.set(l, c), p === A.PLACEHOLDER ? (c.paramName = l === "*" ? `_${o++}` : l.slice(1), a.placeholderChildren.push(c), s = false) : p === A.WILDCARD && (a.wildcardChildNode = c, c.paramName = l.slice(3) || "_", s = false), i.push(c), a = c;
    }
  }
  for (const [l, c] of i.entries()) c.maxDepth = Math.max(i.length - l, c.maxDepth || 0);
  return a.data = n, s === true && (e.staticRoutesMap[t] = a), a;
}
function Tt(e, t) {
  let n = false;
  const s = t.split("/");
  let r = e.rootNode;
  for (const a of s) if (r = r.children.get(a), !r) return n;
  if (r.data) {
    const a = s.at(-1) || "";
    r.data = null, Object.keys(r.children).length === 0 && r.parent && (r.parent.children.delete(a), r.parent.wildcardChildNode = null, r.parent.placeholderChildren = []), n = true;
  }
  return n;
}
function ie(e = {}) {
  return { type: e.type || A.NORMAL, maxDepth: 0, parent: e.parent || null, children: /* @__PURE__ */ new Map(), data: e.data || null, paramName: e.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function Lt(e) {
  return e.startsWith("**") ? A.WILDCARD : e[0] === ":" || e === "*" ? A.PLACEHOLDER : A.NORMAL;
}
const ce = [{ page: true, $component: { src: "src/routes/[...404].tsx?pick=default&pick=$css", build: () => import('../build/_...404_2.mjs'), import: () => import('../build/_...404_2.mjs') }, path: "/*404", filePath: "/Users/albertoforni/Projects/me/src/routes/[...404].tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('../build/index2.mjs'), import: () => import('../build/index2.mjs') }, path: "/", filePath: "/Users/albertoforni/Projects/me/src/routes/index.tsx" }], xt = Pt(ce.filter((e) => e.page));
function Pt(e) {
  function t(n, s, r, a) {
    const o = Object.values(n).find((i) => r.startsWith(i.id + "/"));
    return o ? (t(o.children || (o.children = []), s, r.slice(o.id.length)), n) : (n.push({ ...s, id: r, path: r.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "") }), n);
  }
  return e.sort((n, s) => n.path.length - s.path.length).reduce((n, s) => t(n, s, s.path, s.path), []);
}
function Nt(e, t) {
  const n = kt.lookup(e);
  if (n && n.route) {
    const s = t === "HEAD" ? n.route.$HEAD || n.route.$GET : n.route[`$${t}`];
    return s === void 0 ? void 0 : { handler: s, params: n.params };
  }
}
function Ht(e) {
  return e.$HEAD || e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
const kt = Ct({ routes: ce.reduce((e, t) => {
  if (!Ht(t)) return e;
  let n = t.path.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "").replace(/\*([^/]*)/g, (s, r) => `**:${r}`).split("/").map((s) => s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s)).join("/");
  if (/:[^/]*\?/g.test(n)) throw new Error(`Optional parameters are not supported in API routes: ${n}`);
  if (e[n]) throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);
  return e[n] = { route: t }, e;
}, {}) });
function le() {
  function e(n) {
    return { ...n, ...n.$$route ? n.$$route.require().route : void 0, info: { ...n.$$route ? n.$$route.require().route.info : {}, filesystem: true }, component: n.$component && At(n.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: n.children ? n.children.map(e) : void 0 };
  }
  return xt.map(e);
}
let z;
const _t = isServer ? () => getRequestEvent().routes : () => z || (z = le());
function qt() {
  return createComponent$1(bt, { root: (e) => createComponent$1(H, { get children() {
    return [createComponent$1(I$2, { children: "Alberto Forni" }), createComponent$1(L, { name: "viewport", content: "width=device-width, initial-scale=1" }), createComponent$1(R$1, { rel: "preconnect", href: "https://fonts.googleapis.com" }), createComponent$1(R$1, { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" }), createComponent$1(R$1, { href: "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap", rel: "stylesheet" }), createComponent$1(Suspense, { get children() {
      return e.children;
    } })];
  } }), get children() {
    return createComponent$1(_t, {});
  } });
}
var Ot = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">', "</span>"], It = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">500 | Internal Server Error</span>'];
const Dt = (e) => {
  const t = isServer ? "500 | Internal Server Error" : "Error | Uncaught Client Exception";
  return createComponent$1(ErrorBoundary, { fallback: (n) => (console.error(n), [ssr(Ot, ssrHydrationKey(), escape(t)), createComponent$1(J$1, { code: 500 })]), get children() {
    return e.children;
  } });
}, Mt = (e) => {
  let t = false;
  const n = catchError(() => e.children, (s) => {
    console.error(s), t = !!s;
  });
  return t ? [ssr(It, ssrHydrationKey()), createComponent$1(J$1, { code: 500 })] : n;
};
var G = ["<script", ">", "<\/script>"], Ft = ["<script", ' type="module"', " async", "><\/script>"], Ut = ["<script", ' type="module" async', "><\/script>"];
const jt = ssr("<!DOCTYPE html>");
function ue(e, t, n = []) {
  for (let s = 0; s < t.length; s++) {
    const r = t[s];
    if (r.path !== e[0].path) continue;
    let a = [...n, r];
    if (r.children) {
      const o = e.slice(1);
      if (o.length === 0 || (a = ue(o, r.children, a), !a)) continue;
    }
    return a;
  }
}
function Wt(e) {
  const t = getRequestEvent(), n = t.nonce;
  let s = [];
  return Promise.resolve().then(async () => {
    let r = [];
    if (t.router && t.router.matches) {
      const a = [...t.router.matches];
      for (; a.length && (!a[0].info || !a[0].info.filesystem); ) a.shift();
      const o = a.length && ue(a, t.routes);
      if (o) {
        const i = globalThis.MANIFEST.client.inputs;
        for (let l = 0; l < o.length; l++) {
          const c = o[l], p = i[c.$component.src];
          r.push(p.assets());
        }
      }
    }
    s = await Promise.all(r).then((a) => [...new Map(a.flat().map((o) => [o.attrs.key, o])).values()].filter((o) => o.attrs.rel === "modulepreload" && !t.assets.find((i) => i.attrs.key === o.attrs.key)));
  }), useAssets(() => s.length ? s.map((r) => I(r)) : void 0), createComponent$1(NoHydration, { get children() {
    return [jt, createComponent$1(Mt, { get children() {
      return createComponent$1(e.document, { get assets() {
        return [createComponent$1(HydrationScript, {}), t.assets.map((r) => I(r, n))];
      }, get scripts() {
        return n ? [ssr(G, ssrHydrationKey() + ssrAttribute("nonce", escape(n, true), false), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(Ft, ssrHydrationKey(), ssrAttribute("nonce", escape(n, true), false), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))] : [ssr(G, ssrHydrationKey(), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(Ut, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
      }, get children() {
        return createComponent$1(Hydration, { get children() {
          return createComponent$1(Dt, { get children() {
            return createComponent$1(qt, {});
          } });
        } });
      } });
    } })];
  } });
}
function Bt(e = {}) {
  let t, n = false;
  const s = (o) => {
    if (t && t !== o) throw new Error("Context conflict");
  };
  let r;
  if (e.asyncContext) {
    const o = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    o ? r = new o() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const a = () => {
    if (r && t === void 0) {
      const o = r.getStore();
      if (o !== void 0) return o;
    }
    return t;
  };
  return { use: () => {
    const o = a();
    if (o === void 0) throw new Error("Context is not available");
    return o;
  }, tryUse: () => a(), set: (o, i) => {
    i || s(o), t = o, n = true;
  }, unset: () => {
    t = void 0, n = false;
  }, call: (o, i) => {
    s(o), t = o;
    try {
      return r ? r.run(o, i) : i();
    } finally {
      n || (t = void 0);
    }
  }, async callAsync(o, i) {
    t = o;
    const l = () => {
      t = o;
    }, c = () => t === o ? l : void 0;
    Y.add(c);
    try {
      const p = r ? r.run(o, i) : i();
      return n || (t = void 0), await p;
    } finally {
      Y.delete(c);
    }
  } };
}
function Kt(e = {}) {
  const t = {};
  return { get(n, s = {}) {
    return t[n] || (t[n] = Bt({ ...e, ...s })), t[n], t[n];
  } };
}
const N = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : {}, J = "__unctx__", zt = N[J] || (N[J] = Kt()), Gt = (e, t = {}) => zt.get(e, t), V = "__unctx_async_handlers__", Y = N[V] || (N[V] = /* @__PURE__ */ new Set());
function Jt(e) {
  let t;
  const n = he(e), s = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(n, { ...s, body: e.node.req.body }) : new Request(n, { ...s, get body() {
    return t || (t = on(e), t);
  } });
}
function Vt(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: Jt(e), url: he(e) }, e.web.request;
}
function Yt() {
  return un();
}
const de = Symbol("$HTTPEvent");
function Qt(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[de]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function y(e) {
  return function(...t) {
    var _a;
    let n = t[0];
    if (Qt(n)) t[0] = n instanceof H3Event || n.__is_event__ ? n : n[de];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (n = Yt(), !n) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      t.unshift(n);
    }
    return e(...t);
  };
}
const he = y(getRequestURL), Xt = y(getRequestIP), D = y(setResponseStatus), Q = y(getResponseStatus), Zt = y(getResponseStatusText), P = y(getResponseHeaders), X = y(getResponseHeader), en = y(setResponseHeader), tn = y(appendResponseHeader), Z = y(sendRedirect), nn = y(getCookie), rn = y(setCookie), sn = y(setHeader), on = y(getRequestWebStream), an = y(removeResponseHeader), cn = y(Vt);
function ln() {
  var _a;
  return Gt("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function un() {
  return ln().use().event;
}
const q = "solidFetchEvent";
function dn(e) {
  return { request: cn(e), response: pn(e), clientAddress: Xt(e), locals: {}, nativeEvent: e };
}
function hn(e) {
  if (!e.context[q]) {
    const t = dn(e);
    e.context[q] = t;
  }
  return e.context[q];
}
class fn {
  constructor(t) {
    __publicField(this, "event");
    this.event = t;
  }
  get(t) {
    const n = X(this.event, t);
    return Array.isArray(n) ? n.join(", ") : n || null;
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, n) {
    return en(this.event, t, n);
  }
  delete(t) {
    return an(this.event, t);
  }
  append(t, n) {
    tn(this.event, t, n);
  }
  getSetCookie() {
    const t = X(this.event, "Set-Cookie");
    return Array.isArray(t) ? t : [t];
  }
  forEach(t) {
    return Object.entries(P(this.event)).forEach(([n, s]) => t(Array.isArray(s) ? s.join(", ") : s, n, this));
  }
  entries() {
    return Object.entries(P(this.event)).map(([t, n]) => [t, Array.isArray(n) ? n.join(", ") : n])[Symbol.iterator]();
  }
  keys() {
    return Object.keys(P(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(P(this.event)).map((t) => Array.isArray(t) ? t.join(", ") : t)[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
}
function pn(e) {
  return { get status() {
    return Q(e);
  }, set status(t) {
    D(e, t);
  }, get statusText() {
    return Zt(e);
  }, set statusText(t) {
    D(e, Q(e), t);
  }, headers: new fn(e) };
}
function mn(e) {
  const t = nn(e.nativeEvent, "flash");
  if (t) try {
    let n = JSON.parse(t);
    if (!n || !n.result) return;
    const s = [...n.input.slice(0, -1), new Map(n.input[n.input.length - 1])], r = n.error ? new Error(n.result) : n.result;
    return { input: s, url: n.url, pending: false, result: n.thrown ? void 0 : r, error: n.thrown ? r : void 0 };
  } catch (n) {
    console.error(n);
  } finally {
    rn(e.nativeEvent, "flash", "", { maxAge: 0 });
  }
}
async function gn(e) {
  const t = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, e.response.headers.set("Content-Type", "text/html"), Object.assign(e, { manifest: await t.json(), assets: [...await t.inputs[t.handler].assets()], router: { submission: mn(e) }, routes: le(), complete: false, $islands: /* @__PURE__ */ new Set() });
}
const yn = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function M(e) {
  return e.status && yn.has(e.status) ? e.status : 302;
}
function wn(e, t, n = {}) {
  return eventHandler({ handler: (s) => {
    const r = hn(s);
    return provideRequestEvent(r, async () => {
      const a = Nt(new URL(r.request.url).pathname, r.request.method);
      if (a) {
        const m = await a.handler.import(), w = r.request.method === "HEAD" ? m.HEAD || m.GET : m[r.request.method];
        r.params = a.params || {}, sharedConfig.context = { event: r };
        const C = await w(r);
        if (C !== void 0) return C;
        if (r.request.method !== "GET") throw new Error(`API handler for ${r.request.method} "${r.request.url}" did not return a response.`);
      }
      const o = await t(r), i = typeof n == "function" ? await n(o) : { ...n }, l = i.mode || "stream";
      if (i.nonce && (o.nonce = i.nonce), l === "sync") {
        const m = renderToString(() => (sharedConfig.context.event = o, e(o)), i);
        if (o.complete = true, o.response && o.response.headers.get("Location")) {
          const w = M(o.response);
          return Z(s, o.response.headers.get("Location"), w);
        }
        return m;
      }
      if (i.onCompleteAll) {
        const m = i.onCompleteAll;
        i.onCompleteAll = (w) => {
          te(o)(w), m(w);
        };
      } else i.onCompleteAll = te(o);
      if (i.onCompleteShell) {
        const m = i.onCompleteShell;
        i.onCompleteShell = (w) => {
          ee(o, s)(), m(w);
        };
      } else i.onCompleteShell = ee(o, s);
      const c = renderToStream(() => (sharedConfig.context.event = o, e(o)), i);
      if (o.response && o.response.headers.get("Location")) {
        const m = M(o.response);
        return Z(s, o.response.headers.get("Location"), m);
      }
      if (l === "async") return c;
      const { writable: p, readable: R } = new TransformStream();
      return c.pipeTo(p), R;
    });
  } });
}
function ee(e, t) {
  return () => {
    if (e.response && e.response.headers.get("Location")) {
      const n = M(e.response);
      D(t, n), sn(t, "Location", e.response.headers.get("Location"));
    }
  };
}
function te(e) {
  return ({ write: t }) => {
    e.complete = true;
    const n = e.response && e.response.headers.get("Location");
    n && t(`<script>window.location="${n}"<\/script>`);
  };
}
function Rn(e, t) {
  return wn(e, gn, t);
}
var bn = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">', "</head>"], vn = ["<html", ' lang="en">', '<body><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const xn = Rn(() => createComponent$1(Wt, { document: ({ assets: e, children: t, scripts: n }) => ssr(vn, ssrHydrationKey(), createComponent$1(NoHydration, { get children() {
  return ssr(bn, escape(e));
} }), escape(t), escape(n)) }));

const handlers = [
  { route: '', handler: _idPHD7, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: ii, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: xn, lazy: false, middleware: true, method: undefined }
];

const serverAssets = [{"baseName":"server","dir":"/Users/albertoforni/Projects/me/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/Users/albertoforni/Projects/me/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/albertoforni/Projects/me","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/albertoforni/Projects/me","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/albertoforni/Projects/me/.vinxi","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/albertoforni/Projects/me/.vinxi/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[nitro] [cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {
      "/_build/assets/**": {
        "headers": {
          "cache-control": "public, immutable, max-age=31536000"
        }
      }
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const nitroApp = useNitroApp();
const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { $e as $, C, I$2 as I, J$1 as J, We as W, Ie as a, closePrerenderer as c, localFetch as l, si as s };
//# sourceMappingURL=nitro.mjs.map
