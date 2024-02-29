import { A as AstroError, n as UnknownContentCollectionError, f as createComponent, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent, r as renderTemplate, j as renderComponent, u as unescapeHTML, e as createAstro, m as maybeRenderHead, h as addAttribute } from '../astro_oCEbWNjX.mjs';
import 'kleur/colors';
import { $ as $$Button, a as $$Image, b as $$MainLayout } from './404_KgtBD98q.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
/* empty css                           */

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://nickbravo.dev", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntryBySlug({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntryBySlug(collection, slug) {
    const entryImport = await getEntryImport(collection, slug);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    return {
      id: entry.id,
      slug: entry.slug,
      body: entry.body,
      collection: entry.collection,
      data: entry.data,
      async render() {
        return render({
          collection: entry.collection,
          id: entry.id,
          renderEntryImport: await getRenderEntryImport(collection, slug)
        });
      }
    };
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/works/1-unredacted-magazine.mdx": () => import('../1-unredacted-magazine_eTg9yIXB.mjs'),"/src/content/works/2-fortify247.mdx": () => import('../2-fortify247_VVBUjkdU.mjs'),"/src/content/works/3-explore-eastern-utah.mdx": () => import('../3-explore-eastern-utah_4imZ0xCf.mjs'),"/src/content/works/4-arcane-ops.mdx": () => import('../4-arcane-ops_6RkSWPv7.mjs'),"/src/content/works/5-bates-corporate-law.mdx": () => import('../5-bates-corporate-law_ToCGw1R2.mjs'),"/src/content/works/6-sheriff-wood.mdx": () => import('../6-sheriff-wood_Cd1CTjJW.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"works":{"type":"content","entries":{"fortify-24x7":"/src/content/works/2-fortify247.mdx","unredacted-magazine":"/src/content/works/1-unredacted-magazine.mdx","sheriff-wood":"/src/content/works/6-sheriff-wood.mdx","arcane-ops":"/src/content/works/4-arcane-ops.mdx","bates-corporate-law":"/src/content/works/5-bates-corporate-law.mdx","explore-eastern-utah":"/src/content/works/3-explore-eastern-utah.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/works/1-unredacted-magazine.mdx": () => import('../1-unredacted-magazine_vSbyhYxn.mjs'),"/src/content/works/2-fortify247.mdx": () => import('../2-fortify247_zpK2Nnfw.mjs'),"/src/content/works/3-explore-eastern-utah.mdx": () => import('../3-explore-eastern-utah_L2x0VdP8.mjs'),"/src/content/works/4-arcane-ops.mdx": () => import('../4-arcane-ops_ccm5CrD4.mjs'),"/src/content/works/5-bates-corporate-law.mdx": () => import('../5-bates-corporate-law_CAsJCQW_.mjs'),"/src/content/works/6-sheriff-wood.mdx": () => import('../6-sheriff-wood_F3RMr9Ds.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntryBySlug = createGetEntryBySlug({
	getEntryImport: createGlobLookup(contentCollectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$1 = createAstro("https://nickbravo.dev");
const $$HeroPostSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroPostSingle;
  const {
    h1 = "",
    h2 = "",
    p1 = "",
    p2 = "",
    sm1 = "",
    sm2 = "",
    id = "",
    text_side = "left",
    image = "",
    image_alt = "",
    button_primary_link = "",
    button_primary_text = "",
    button_primary_target = "",
    button_secondary_link = "",
    button_secondary_text = "",
    button_secondary_target = ""
  } = Astro2.props;
  return renderTemplate`<!-- Hero section -->${maybeRenderHead()}<section${addAttribute(id, "id")} class="py-0 my-0 padding-nav-height" data-astro-cid-jwwomprd> <!-- <div class="container"> --> <div${addAttribute(`hero-full ${text_side === "right" && "text-right"}`, "class")} data-astro-cid-jwwomprd> <!-- Hero text --> <div class="text-block" data-astro-cid-jwwomprd> <!-- <p class="superheading">Nick Bravo.</p> --> <h1 data-astro-cid-jwwomprd>${unescapeHTML(h1)}</h1> ${h2 && renderTemplate`<h2 data-astro-cid-jwwomprd>${unescapeHTML(h2)}</h2>`} <div class="hr-div" data-astro-cid-jwwomprd></div> <p class="subheading" data-astro-cid-jwwomprd>${unescapeHTML(p1)}</p> ${p2 && renderTemplate`<p data-astro-cid-jwwomprd>${unescapeHTML(p2)}</p>`} ${sm1 && renderTemplate`<p class="small" data-astro-cid-jwwomprd>${sm1}</p>`} ${sm2 && renderTemplate`<p class="small" data-astro-cid-jwwomprd>${sm2}</p>`} <!-- CTA buttons --> ${(button_primary_link || button_secondary_link) && renderTemplate`<div class="button-row" data-astro-cid-jwwomprd> ${button_secondary_link && renderTemplate`${renderComponent($$result, "Button", $$Button, { "href": button_secondary_link, "text": button_secondary_text, "target": button_secondary_target, "type": "outline", "data-astro-cid-jwwomprd": true })}`} ${button_primary_link && renderTemplate`${renderComponent($$result, "Button", $$Button, { "href": button_primary_link, "text": button_primary_text, "target": button_primary_target, "data-astro-cid-jwwomprd": true })}`} </div>`} <!-- <div class="flex gap-3">
              <Button href="contact" />
              <Button href="resume" data-bs-toggle="offcanvas" data-bs-target="#resume" aria-controls="resume" />
            </div> --> </div> <!-- Hero image --> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": image_alt, "format": "avif", "loading": "eager", "data-astro-cid-jwwomprd": true })} </div> <!-- </div> --> </section> `;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/src/components/heroes/HeroPostSingle.astro", void 0);

const $$Astro = createAstro("https://nickbravo.dev");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const work = await getEntryBySlug("works", slug);
  if (!work) {
    return Astro2.redirect("/404");
  }
  const { Content } = await work.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": work.data.title, "description": "We build privacy-focused websites, visual identities, and digital assets to solidify brand authority and trust across platforms. All while protecting your users' privacy.", "og_image": "https://astrowork.io/images/opengraph.png", "og_url": "https://astrowork.io/blog/", "data-astro-cid-by4zwojz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPostSingle", $$HeroPostSingle, { "h1": work.data.title, "image": work.data.image, "image_alt": work.data.title, "p1": work.data.client, "data-astro-cid-by4zwojz": true })} ${maybeRenderHead()}<section class="description" data-astro-cid-by4zwojz> <div class="content-grid" data-astro-cid-by4zwojz> <div class="text-block" data-astro-cid-by4zwojz> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-by4zwojz": true })} </div> <div class="sidebar" data-astro-cid-by4zwojz> <h3 data-astro-cid-by4zwojz>Technologies</h3> <div class="hr-div" data-astro-cid-by4zwojz></div> <p data-astro-cid-by4zwojz>${work.data.tech}</p> </div> </div> </section> ` })} `;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/src/pages/work/[slug].astro", void 0);

const $$file = "/Users/nb258622/dev/Github/nickbravodev-v2/src/pages/work/[slug].astro";
const $$url = "/work/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _slug_ as _, getCollection as g };
