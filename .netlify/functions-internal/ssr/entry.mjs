import { renderers } from './renderers.mjs';
import { manifest } from './manifest_612gKE0M.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_x1KHFid_.mjs');
const _page1 = () => import('./chunks/404_IBltf5sM.mjs');
const _page2 = () => import('./chunks/success_FfpGtyaN.mjs');
const _page3 = () => import('./chunks/_slug__stvaAnXC.mjs');
const _page4 = () => import('./chunks/index_xT9581AU.mjs');
const _page5 = () => import('./chunks/index_q4hRQHxw.mjs');
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
    "middlewareSecret": "2a91ca7e-3d40-4571-9762-6f71ba327216"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
