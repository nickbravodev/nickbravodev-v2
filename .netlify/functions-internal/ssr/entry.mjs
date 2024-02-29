import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DAZbJz91.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_T-S2GGJx.mjs');
const _page1 = () => import('./chunks/success_kYQeW7iM.mjs');
const _page2 = () => import('./chunks/_slug__MZ0FJ7Ps.mjs');
const _page3 = () => import('./chunks/index_YTMFi6vk.mjs');
const _page4 = () => import('./chunks/index_rGKhun1j.mjs');
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
    "middlewareSecret": "09ff0a0f-12e6-44f6-8d77-0b9d19ddf782"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
