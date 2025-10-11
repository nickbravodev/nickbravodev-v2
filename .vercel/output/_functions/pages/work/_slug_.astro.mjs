import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D5xLaq5v.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from '../../chunks/MainLayout_4Q-umG_H.mjs';
import { g as getEntryBySlug, a as getCollection } from '../../chunks/_astro_content_CkWKB8BT.mjs';
import { $ as $$HeroPostSingle } from '../../chunks/HeroPostSingle_DZfg3Kkv.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const landing = await getCollection("works");
  return landing.map((a) => {
    return {
      params: { slug: a.slug },
      props: a
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const work = await getEntryBySlug("works", slug);
  if (!work) {
    return Astro2.redirect("/404");
  }
  const { Content } = await work.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": work.data.title, "description": work.data.blurb, "og_image": work.data.image, "data-astro-cid-by4zwojz": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPostSingle", $$HeroPostSingle, { "h1": work.data.title, "image": work.data.image, "image_alt": work.data.title, "p1": work.data.client, "liveUrl": work.data.url, "data-astro-cid-by4zwojz": true })} ${maybeRenderHead()}<section class="py-16" data-astro-cid-by4zwojz> <div class="description" data-astro-cid-by4zwojz> <div class="content-grid" data-astro-cid-by4zwojz> <div class="text-block" data-astro-cid-by4zwojz> <h2 data-astro-cid-by4zwojz>Project Overview</h2> <div class="hr-div" data-astro-cid-by4zwojz></div> <p data-astro-cid-by4zwojz>${work.data.blurb}</p> ${Content && renderTemplate`${renderComponent($$result2, "Content", Content, { "data-astro-cid-by4zwojz": true })}`} </div> <div class="sidebar" data-astro-cid-by4zwojz> <h3 data-astro-cid-by4zwojz>Technologies</h3> <div class="hr-div" data-astro-cid-by4zwojz></div> <p data-astro-cid-by4zwojz>${work.data.tech}</p> </div> </div> </div> </section> ` })} `;
}, "/Users/nickbates/Sync/development/nickbravodev-v2/src/pages/work/[slug].astro", void 0);

const $$file = "/Users/nickbates/Sync/development/nickbravodev-v2/src/pages/work/[slug].astro";
const $$url = "/work/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
