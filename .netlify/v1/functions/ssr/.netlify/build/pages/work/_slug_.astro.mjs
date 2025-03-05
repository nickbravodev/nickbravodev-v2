import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, e as renderComponent, d as renderTemplate } from '../../chunks/astro/server_Bjo-g0z2.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout } from '../../chunks/MainLayout_D76ITQaI.mjs';
import { a as getEntryBySlug, g as getCollection } from '../../chunks/_astro_content_SPr_RqyP.mjs';
import { $ as $$Button } from '../../chunks/Button_Df-Pi2uM.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_BpfFM2Yp.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://nickbravo.dev");
const $$HeroPostSingle = createComponent(($$result, $$props, $$slots) => {
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
    button_secondary_target = "",
    liveUrl = ""
  } = Astro2.props;
  return renderTemplate`<!-- Hero section -->${maybeRenderHead()}<section${addAttribute(id, "id")} class="py-0 my-0 padding-nav-height" data-astro-cid-jwwomprd> <!-- <div class="container"> --> <div${addAttribute(`hero-full ${text_side === "right" && "text-right"}`, "class")} data-astro-cid-jwwomprd> <!-- Hero text --> <div class="text-block" data-astro-cid-jwwomprd> <!-- <p class="superheading">Nick Bravo.</p> --> <div class="flex align-items-start gap-3" data-astro-cid-jwwomprd> <h1 data-astro-cid-jwwomprd>${unescapeHTML(h1)}</h1> <div class="launch-icon" data-astro-cid-jwwomprd> ${liveUrl ? renderTemplate`<a${addAttribute(liveUrl, "href")} target="_blank"${addAttribute(`Read more about ${h1}`, "aria-label")} data-astro-cid-jwwomprd>${renderComponent($$result, "Icon", $$Icon, { "name": "new-window", "data-astro-cid-jwwomprd": true })}</a>` : renderTemplate`<span data-astro-cid-jwwomprd>&nbsp;</span>`} </div> </div> ${h2 && renderTemplate`<h2 data-astro-cid-jwwomprd>${unescapeHTML(h2)}</h2>`} <div class="hr-div" data-astro-cid-jwwomprd></div> <p class="subheading" data-astro-cid-jwwomprd>${unescapeHTML(p1)}</p> ${p2 && renderTemplate`<p data-astro-cid-jwwomprd>${unescapeHTML(p2)}</p>`} ${sm1 && renderTemplate`<p class="small" data-astro-cid-jwwomprd>${sm1}</p>`} ${sm2 && renderTemplate`<p class="small" data-astro-cid-jwwomprd>${sm2}</p>`} <!-- CTA buttons --> ${(button_primary_link || button_secondary_link) && renderTemplate`<div class="button-row" data-astro-cid-jwwomprd> ${button_secondary_link && renderTemplate`${renderComponent($$result, "Button", $$Button, { "href": button_secondary_link, "text": button_secondary_text, "target": button_secondary_target, "type": "outline", "data-astro-cid-jwwomprd": true })}`} ${button_primary_link && renderTemplate`${renderComponent($$result, "Button", $$Button, { "href": button_primary_link, "text": button_primary_text, "target": button_primary_target, "data-astro-cid-jwwomprd": true })}`} </div>`} <!-- <div class="flex gap-3">
              <Button href="contact" />
              <Button href="resume" data-bs-toggle="offcanvas" data-bs-target="#resume" aria-controls="resume" />
            </div> --> </div> <!-- Hero image --> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": image_alt, "format": "avif", "loading": "eager", "data-astro-cid-jwwomprd": true })} </div> <!-- </div> --> </section> `;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/heroes/HeroPostSingle.astro", void 0);

const $$Astro = createAstro("https://nickbravo.dev");
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
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": work.data.title, "description": work.data.blurb, "og_image": work.data.image, "data-astro-cid-by4zwojz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPostSingle", $$HeroPostSingle, { "h1": work.data.title, "image": work.data.image, "image_alt": work.data.title, "p1": work.data.client, "liveUrl": work.data.url, "data-astro-cid-by4zwojz": true })} ${maybeRenderHead()}<section class="py-16" data-astro-cid-by4zwojz> <div class="description" data-astro-cid-by4zwojz> <div class="content-grid" data-astro-cid-by4zwojz> <div class="text-block" data-astro-cid-by4zwojz> <h2 data-astro-cid-by4zwojz>Project Overview</h2> <div class="hr-div" data-astro-cid-by4zwojz></div> <p data-astro-cid-by4zwojz>${work.data.blurb}</p> ${Content && renderTemplate`${renderComponent($$result2, "Content", Content, { "data-astro-cid-by4zwojz": true })}`} </div> <div class="sidebar" data-astro-cid-by4zwojz> <h3 data-astro-cid-by4zwojz>Technologies</h3> <div class="hr-div" data-astro-cid-by4zwojz></div> <p data-astro-cid-by4zwojz>${work.data.tech}</p> </div> </div> </div> </section> ` })} `;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/pages/work/[slug].astro", void 0);

const $$file = "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/pages/work/[slug].astro";
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
