import { renderers } from './renderers.mjs';
import { manifest } from './manifest_o2BoJ5q8.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic__XNwV-5T.mjs');
const _page1 = () => import('./chunks/success_2qj5PVjd.mjs');
const _page2 = () => import('./chunks/_slug__Yf1825wc.mjs');
const _page3 = () => import('./chunks/index_qzCDRBla.mjs');
const _page4 = () => import('./chunks/index_FUJMPHVZ.mjs');
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
    "middlewareSecret": "9564414b-2b35-4709-97d1-b2754271af28"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
