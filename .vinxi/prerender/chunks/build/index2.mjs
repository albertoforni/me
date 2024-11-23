import { ssr, ssrHydrationKey, escape, createComponent, ssrElement, mergeProps as mergeProps$1, isServer } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/solid-js@1.9.3/node_modules/solid-js/web/dist/server.js';
import { mergeProps, splitProps, createMemo, createSignal, createEffect, onCleanup } from 'file:///Users/albertoforni/Projects/me/node_modules/.pnpm/solid-js@1.9.3/node_modules/solid-js/dist/server.js';
import { W as We, $ as $e, a as Ie, C } from '../nitro/nitro.mjs';
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

function l(e) {
  e = mergeProps({ inactiveClass: "inactive", activeClass: "active" }, e);
  const [, n] = splitProps(e, ["href", "state", "class", "activeClass", "inactiveClass", "end"]), o = We(() => e.href), v = $e(o), f = Ie(), a = createMemo(() => {
    const i = o();
    if (i === void 0) return [false, false];
    const s = C(i.split(/[?#]/, 1)[0]).toLowerCase(), h = decodeURI(C(f.pathname).toLowerCase());
    return [e.end ? s === h : h.startsWith(s + "/") || h === s, s === h];
  });
  return ssrElement("a", mergeProps$1(n, { get href() {
    return v() || e.href;
  }, get state() {
    return JSON.stringify(e.state);
  }, get classList() {
    return { ...e.class && { [e.class]: true }, [e.inactiveClass]: !a()[0], [e.activeClass]: a()[0], ...n.classList };
  }, link: true, get "aria-current"() {
    return a()[1] ? "page" : void 0;
  } }), void 0, true);
}
function c(e, n) {
  const o = mergeProps$1(e.a, n), [v, f] = splitProps(o, ["src"]), [a, i] = createSignal(""), s = createMemo(() => n.title ? `${e.c}<title>${n.title}</title>` : e.c);
  return createEffect(() => i(s())), onCleanup(() => {
    i("");
  }), ssrElement("svg", mergeProps$1({ get stroke() {
    var _a;
    return (_a = e.a) == null ? void 0 : _a.stroke;
  }, get color() {
    return n.color || "currentColor";
  }, get fill() {
    return n.color || "currentColor";
  }, "stroke-width": "0", get style() {
    return { ...n.style, overflow: "visible" };
  } }, f, { get height() {
    return n.size || "1em";
  }, get width() {
    return n.size || "1em";
  }, xmlns: "http://www.w3.org/2000/svg", get innerHTML() {
    return a();
  } }), () => isServer && escape(ssr(s())), true);
}
function B(e) {
  return c({ a: { fill: "currentColor", viewBox: "0 0 16 16" }, c: '<path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/><path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>' }, e);
}
function P(e) {
  return c({ a: { viewBox: "0 0 448 512" }, c: '<path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"/>' }, e);
}
function k(e) {
  return c({ a: { viewBox: "0 0 496 512" }, c: '<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>' }, e);
}
function F(e) {
  return c({ a: { viewBox: "0 0 448 512" }, c: '<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>' }, e);
}
function L(e) {
  return c({ a: { viewBox: "0 0 512 512" }, c: '<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>' }, e);
}
var j = ["<header", ' class="flex flex-col gap-4 items-stretch md:items-center"><h1 class="text-5xl lg:text-9xl break-words text-center">Alberto Forni</h1><ul role="list" class="flex flex-col sm:flex-row sm:flex-wrap text-lg gap-3 justify-center items-center"><li class="flex gap-1 items-center"><!--$-->', "<!--/--><!--$-->", '<!--/--></li><li class="flex gap-1 items-center"><!--$-->', "<!--/--><!--$-->", '<!--/--></li><li class="flex gap-1 items-center"><!--$-->', "<!--/--><!--$-->", '<!--/--></li><li class="flex gap-1 items-center"><!--$-->', "<!--/--><!--$-->", '<!--/--></li><li class="flex gap-1 items-center"><!--$-->', "<!--/--><!--$-->", "<!--/--></li></ul></header>"], A = ["<section", '><p class="max-w-3xl mx-auto text-xl leading-relaxed text-center mt-8 mb-12">Full Stack Developer with 10+ years of experience in software development and business administration. Expert in designing scalable systems, modernizing codebases, and leading cross-functional teams. Passionate about delivering high-quality software solutions, mentoring developers, and exploring innovative technologies.</p></section>'], _ = ["<div", ' class="h-screen w-screen overflow-hidden flex flex-col"><main class="text-gray-700 flex flex-col px-4"><!--$-->', "<!--/--><!--$-->", '<!--/--></main><section class="flex-1 overflow-hidden hidden flex-col justify-end items-center md:flex"><img src="me.jpeg" alt="Alberto Forni" class="max-h-full object-cover"></section></div>'];
const T = () => ssr(j, ssrHydrationKey(), escape(createComponent(B, {})), escape(createComponent(l, { href: "mailto:me@albertoforni.com", children: "me@albertoforni.com" })), escape(createComponent(F, {})), escape(createComponent(l, { href: "https://www.linkedin.com/in/albertoforni/", children: "linkedin.com/in/albertoforni" })), escape(createComponent(k, {})), escape(createComponent(l, { href: "https://github.com/albertoforni", children: "github.com/albertoforni" })), escape(createComponent(P, {})), escape(createComponent(l, { href: "https://dev.to/albertoforni", children: "dev.to/albertoforni" })), escape(createComponent(L, {})), escape(createComponent(l, { href: "https://x.com/albertoforni", children: "x.com/albertoforni" }))), E = () => ssr(A, ssrHydrationKey()), S = () => ssr(_, ssrHydrationKey(), escape(createComponent(T, {})), escape(createComponent(E, {})));

export { S as default };
//# sourceMappingURL=index2.mjs.map
