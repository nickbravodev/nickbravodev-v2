import { renderers } from './renderers.mjs';
import { manifest } from './manifest_XoA6Y3K2.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BLsDstnb.mjs');
const _page1 = () => import('./chunks/success_LhnhpIOe.mjs');
const _page2 = () => import('./chunks/_slug__10XPKul-.mjs');
const _page3 = () => import('./chunks/index_Y1t0Edkx.mjs');
const _page4 = () => import('./chunks/index_zscLQvWG.mjs');
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
    "middlewareSecret": "a971585b-f526-4f57-add0-afaee07778fc"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
