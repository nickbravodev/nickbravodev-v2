import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CYM7x6Gw.mjs';
import { manifest } from './manifest_O3jwst2S.mjs';

const serverIslandMap = new Map([
	['ContactFormResend', () => import('./chunks/ContactFormResend_HSaM6KOv.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/api/send.astro.mjs');
const _page4 = () => import('./pages/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/success.astro.mjs');
const _page7 = () => import('./pages/verify.astro.mjs');
const _page8 = () => import('./pages/work/_slug_.astro.mjs');
const _page9 = () => import('./pages/work.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/api/send.ts", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/success.astro", _page6],
    ["node_modules/astro-turnstile/lib/server.ts", _page7],
    ["src/pages/work/[slug].astro", _page8],
    ["src/pages/work/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "e8194f46-8ac4-42a4-bb17-08c3053b902f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
