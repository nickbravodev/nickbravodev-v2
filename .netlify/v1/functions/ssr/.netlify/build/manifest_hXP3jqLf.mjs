import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_Bjo-g0z2.mjs';
import 'clsx';
import 'cookie';
import './chunks/shared_Dh4QwzlU.mjs';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/nb258622/Maverik%20CREATE%20Dept.%20Dropbox/Nick%20Bates/dev/Github/nickbravodev-v2/","cacheDir":"file:///Users/nb258622/Maverik%20CREATE%20Dept.%20Dropbox/Nick%20Bates/dev/Github/nickbravodev-v2/node_modules/.astro/","outDir":"file:///Users/nb258622/Maverik%20CREATE%20Dept.%20Dropbox/Nick%20Bates/dev/Github/nickbravodev-v2/dist/","srcDir":"file:///Users/nb258622/Maverik%20CREATE%20Dept.%20Dropbox/Nick%20Bates/dev/Github/nickbravodev-v2/src/","publicDir":"file:///Users/nb258622/Maverik%20CREATE%20Dept.%20Dropbox/Nick%20Bates/dev/Github/nickbravodev-v2/public/","buildClientDir":"file:///Users/nb258622/Maverik%20CREATE%20Dept.%20Dropbox/Nick%20Bates/dev/Github/nickbravodev-v2/dist/","buildServerDir":"file:///Users/nb258622/Maverik%20CREATE%20Dept.%20Dropbox/Nick%20Bates/dev/Github/nickbravodev-v2/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/404.BcA02AI2.css"},{"type":"external","src":"/_astro/index.QZmnjQsB.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send.ts","pathname":"/api/send","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.QZmnjQsB.css"}],"routeData":{"route":"/success","isIndex":false,"type":"page","pattern":"^\\/success\\/?$","segments":[[{"content":"success","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/success.astro","pathname":"/success","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@media (prefers-color-scheme: light){:root{--color-hero-grad-heavy: rgba(var(--color-astro-black-rgb), .9);--color-hero-grad-light: rgba(var(--color-astro-black-rgb), 0)}}:root[data-theme=light]{--color-hero-grad-heavy: rgba(var(--color-astro-black-rgb), .9);--color-hero-grad-light: rgba(var(--color-astro-black-rgb), 0)}@media (prefers-color-scheme: dark){:root{--color-hero-grad-heavy: rgba(var(--color-astro-black-rgb), .9);--color-hero-grad-light: rgba(var(--color-astro-black-rgb), 0)}}:root[data-theme=dark]{--color-hero-grad-heavy: rgba(var(--color-astro-black-rgb), .9);--color-hero-grad-light: rgba(var(--color-astro-black-rgb), 0)}.hero-full[data-astro-cid-jwwomprd]{position:relative;overflow:hidden;border-width:0;border-color:var(--color-bg);border-style:solid;border-radius:var(--border-radius);min-height:max(30rem,min(50vw,50rem));display:flex;align-items:flex-end;padding-left:max(1rem,min(3.5vw,3rem));padding-right:max(1rem,min(3.5vw,3rem));padding-top:1rem;padding-bottom:1rem;justify-content:flex-start;background:linear-gradient(10deg,var(--color-hero-grad-heavy) 3%,var(--color-hero-grad-light));min-width:100%;margin-bottom:var(--spacer-16)}.hero-full[data-astro-cid-jwwomprd] a[data-astro-cid-jwwomprd]{color:inherit;-webkit-text-decoration:none;text-decoration:none;font-weight:700}.hero-full[data-astro-cid-jwwomprd] img[data-astro-cid-jwwomprd]{position:absolute;inset:0;z-index:-1;-o-object-fit:cover;object-fit:cover;height:100%}.hero-full[data-astro-cid-jwwomprd].text-right{justify-content:flex-end;background:linear-gradient(-70deg,var(--color-hero-grad-heavy) 50%,var(--color-hero-grad-light))}.hero-full[data-astro-cid-jwwomprd] .launch-icon[data-astro-cid-jwwomprd]{display:flex;align-items:flex-end;justify-content:flex-end}.button-row[data-astro-cid-jwwomprd]{display:flex;flex-wrap:wrap;gap:var(--spacer-3)}.half-cover-wrapper[data-astro-cid-jwwomprd]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0;padding:0}@media screen and (min-width: 992px){.half-cover-wrapper[data-astro-cid-jwwomprd]{flex-direction:row}}.half-cover-wrapper[data-astro-cid-jwwomprd] .hero-half-text[data-astro-cid-jwwomprd]{width:100%;padding:10rem 2.5rem}@media screen and (min-width: 768px){.half-cover-wrapper[data-astro-cid-jwwomprd] .hero-half-text[data-astro-cid-jwwomprd]{padding-left:4rem;padding-right:4rem}}@media screen and (min-width: 992px){.half-cover-wrapper[data-astro-cid-jwwomprd] .hero-half-text[data-astro-cid-jwwomprd]{width:50%;padding-left:3rem;padding-right:3rem;padding-top:0;padding-bottom:0}}@media screen and (min-width: 1200px){.half-cover-wrapper[data-astro-cid-jwwomprd] .hero-half-text[data-astro-cid-jwwomprd]{padding-left:5rem;padding-right:5rem}}.half-cover-wrapper[data-astro-cid-jwwomprd] .hero-half-image[data-astro-cid-jwwomprd]{display:flex;align-items:center;justify-content:center;width:100%;margin:0;padding:0;overflow:hidden}@media screen and (min-width: 992px){.half-cover-wrapper[data-astro-cid-jwwomprd] .hero-half-image[data-astro-cid-jwwomprd]{width:50%}}.half-cover-wrapper[data-astro-cid-jwwomprd] .hero-half-image[data-astro-cid-jwwomprd] img[data-astro-cid-jwwomprd]{width:100%;height:auto;-o-object-fit:cover;object-fit:cover;aspect-ratio:2/1;margin:0;padding:0}@media screen and (min-width: 992px){.half-cover-wrapper[data-astro-cid-jwwomprd] .hero-half-image[data-astro-cid-jwwomprd] img[data-astro-cid-jwwomprd]{width:auto;height:100svh;aspect-ratio:auto;flex-direction:row}}.description[data-astro-cid-by4zwojz]{padding-top:0rem;padding-bottom:0rem;max-width:80rem}.content-grid[data-astro-cid-by4zwojz]{display:grid;grid-template-columns:1fr;grid-gap:3rem;gap:3rem}@media screen and (min-width: 768px){.content-grid[data-astro-cid-by4zwojz]{grid-template-columns:2fr 1fr}}@media screen and (min-width: 992px){.content-grid[data-astro-cid-by4zwojz]{gap:4rem;grid-template-columns:2fr 1fr}}.sidebar[data-astro-cid-by4zwojz]{display:flex;flex-direction:column}\n"},{"type":"external","src":"/_astro/index.QZmnjQsB.css"}],"routeData":{"route":"/work/[slug]","isIndex":false,"type":"page","pattern":"^\\/work\\/([^/]+?)\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/work/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.QZmnjQsB.css"}],"routeData":{"route":"/work","isIndex":true,"type":"page","pattern":"^\\/work\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/index.astro","pathname":"/work","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.QZmnjQsB.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://nickbravo.dev","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/WorkList.astro",{"propagation":"in-tree","containsHead":false}],["/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/pages/work/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/work/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/WorkListFeatured.astro",{"propagation":"in-tree","containsHead":false}],["/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/pages/success.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/success@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/pages/work/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/work/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/send@_@ts":"pages/api/send.astro.mjs","\u0000@astro-page:src/pages/success@_@astro":"pages/success.astro.mjs","\u0000@astro-page:src/pages/work/[slug]@_@astro":"pages/work/_slug_.astro.mjs","\u0000@astro-page:src/pages/work/index@_@astro":"pages/work.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000astro-internal:actions":"_astro-internal_actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_hXP3jqLf.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Bp4cGBS8.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/.astro/content-assets.mjs":"chunks/content-assets_C1eECsnl.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/.astro/content-modules.mjs":"chunks/content-modules_CtgZtKNa.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_D2InW59h.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/explore-eastern-utah.mdx?astroPropagatedAssets":"chunks/explore-eastern-utah_DQW4wykS.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/arcane-ops.mdx?astroPropagatedAssets":"chunks/arcane-ops_0GXwK5hN.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/bates-corporate-law.mdx?astroPropagatedAssets":"chunks/bates-corporate-law_7QRiD3Pj.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/kum-and-go.mdx?astroPropagatedAssets":"chunks/kum-and-go_DrFtNk_R.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/sheriff-wood.mdx?astroPropagatedAssets":"chunks/sheriff-wood_UFvN-Dth.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/maverik.mdx?astroPropagatedAssets":"chunks/maverik_5V6k3rp0.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/unredacted-magazine.mdx?astroPropagatedAssets":"chunks/unredacted-magazine_C39ZH4wJ.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/fortify247.mdx?astroPropagatedAssets":"chunks/fortify247_CV2veMvW.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/explore-eastern-utah.mdx":"chunks/explore-eastern-utah_BikyjiaL.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/arcane-ops.mdx":"chunks/arcane-ops_C7FA_c6e.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/bates-corporate-law.mdx":"chunks/bates-corporate-law_DgCa2uFU.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/kum-and-go.mdx":"chunks/kum-and-go_BilDULj-.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/sheriff-wood.mdx":"chunks/sheriff-wood_CJzV7G60.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/maverik.mdx":"chunks/maverik_ChAXTtOn.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/unredacted-magazine.mdx":"chunks/unredacted-magazine_DZc9qXKw.mjs","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/fortify247.mdx":"chunks/fortify247_Brg4ViQl.mjs","@astrojs/react/client.js":"_astro/client.CeYSYu5a.js","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/Nav.astro?astro&type=script&index=0&lang.ts":"_astro/Nav.astro_astro_type_script_index_0_lang.B2S6oisF.js","/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.BFqVD_iX.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/Nav.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\".primary-navigation\"),t=document.querySelector(\".mobile-nav-toggle\");t.addEventListener(\"click\",()=>{const i=e.getAttribute(\"data-visible\");i===\"false\"?(e.setAttribute(\"data-visible\",\"true\"),t.setAttribute(\"aria-expanded\",\"true\"),document.body.classList.add(\"modal-open\")):i===\"true\"&&(e.setAttribute(\"data-visible\",\"false\"),t.setAttribute(\"aria-expanded\",\"false\"),document.body.classList.remove(\"modal-open\"))});t.addEventListener(\"keydown\",function(i){const a=e.getAttribute(\"data-visible\");i.key===\"Escape\"&&a===\"true\"&&(e.setAttribute(\"data-visible\",\"false\"),t.setAttribute(\"aria-expanded\",\"false\"))});"],["/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/Footer.astro?astro&type=script&index=0&lang.ts","document.querySelector(\"#copyright\").textContent=new Date().getFullYear().toString();"]],"assets":["/_astro/nb-goofy.C29jPWF9.jpg","/_astro/kng-hero.D9XMGI4j.jpg","/_astro/corporate-law-homepage-cover.C40WC9ZA.png","/_astro/mav-hero.C0fUk2ko.jpg","/_astro/arcane-ops-homepage-cover.C_QCRipd.png","/_astro/Fortify-24x7-ad-cover.DXbUFxy2.png","/_astro/sheriff-wood-homepage-cover.CJtcIHa1.png","/_astro/explore-eastern-utah-homepage-cover.C0LOmTbK.png","/_astro/unredacted-magazine-002-cover.DC4iqq3n.png","/_astro/404.BcA02AI2.css","/_astro/index.QZmnjQsB.css","/favicon.svg","/_astro/client.CeYSYu5a.js","/img/open-graph.png","/resume/NickBravoWebDeveloperResume.pdf"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"z6DC3X6OV6zcmZPJRYoF+iAI1mR7o47WGXneJfiVVCw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
