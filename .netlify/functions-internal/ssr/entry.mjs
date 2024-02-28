import { renderers } from './renderers.mjs';
import { manifest } from './manifest_X2WqIwbt.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_U14z2yjj.mjs');
const _page1 = () => import('./chunks/success_61A4yTfF.mjs');
const _page2 = () => import('./chunks/_slug__3fXdz2us.mjs');
const _page3 = () => import('./chunks/index_RBBravxh.mjs');
const _page4 = () => import('./chunks/index_RaTd_F6t.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/success.astro", _page1],
    ["src/pages/work/[slug].astro", _page2],
    ["src/pages/work/index.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "34482718-5676-4c46-a63f-3e76775a46fb"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
