import { renderers } from './renderers.mjs';
import { manifest } from './manifest_yYFfbpce.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_xLIxYujy.mjs');
const _page1 = () => import('./chunks/404_Dmea9ybI.mjs');
const _page2 = () => import('./chunks/success_eRRa65ry.mjs');
const _page3 = () => import('./chunks/_slug__L2azrjSs.mjs');
const _page4 = () => import('./chunks/index_kn88KnwU.mjs');
const _page5 = () => import('./chunks/index_GbdqdQNF.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/success.astro", _page2],
    ["src/pages/work/[slug].astro", _page3],
    ["src/pages/work/index.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "02a9fd31-1f28-4132-a839-d02ce20645f9"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
