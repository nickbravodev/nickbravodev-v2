import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_astro-internal_actions_C2VSCpDJ.mjs';
import { c as createExports } from './chunks/entrypoint_BrdV1fGB.mjs';
import { manifest } from './manifest_BmlLVoTr.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/api/send.astro.mjs');
const _page4 = () => import('./pages/success.astro.mjs');
const _page5 = () => import('./pages/work/_slug_.astro.mjs');
const _page6 = () => import('./pages/work.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/api/send.ts", _page3],
    ["src/pages/success.astro", _page4],
    ["src/pages/work/[slug].astro", _page5],
    ["src/pages/work/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2a54887f-7791-4ba8-afbc-6b25ee16f8bd",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
