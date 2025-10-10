import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D5xLaq5v.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from '../../chunks/MainLayout_4Q-umG_H.mjs';
import { g as getEntryBySlug, a as getCollection } from '../../chunks/_astro_content_CkWKB8BT.mjs';
import { $ as $$HeroPostSingle } from '../../chunks/HeroPostSingle_DZfg3Kkv.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const landing = await getCollection("blogPosts");
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
  const post = await getEntryBySlug("blogPosts", slug);
  if (!post) {
    return Astro2.redirect("/404");
  }
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": post.data.title, "description": post.data.blurb, "og_image": post.data.image, "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPostSingle", $$HeroPostSingle, { "h1": post.data.title, "image": post.data.image, "image_alt": post.data.title, "p1": post.data.client, "liveUrl": post.data.url, "data-astro-cid-4sn4zg3r": true })} ${maybeRenderHead()}<section class="py-4" data-astro-cid-4sn4zg3r> <div class="description" data-astro-cid-4sn4zg3r> <div class="content-grid" data-astro-cid-4sn4zg3r> <div class="text-block" data-astro-cid-4sn4zg3r> <!-- <h2>{post.data.title}</h2>
              <div class="hr-div"></div>
              <p>{post.data.blurb}</p> --> ${Content && renderTemplate`<div class="post-content" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-4sn4zg3r": true })} </div>`} </div> <div class="sidebar" data-astro-cid-4sn4zg3r> <h3 data-astro-cid-4sn4zg3r>Tags</h3> <div class="hr-div" data-astro-cid-4sn4zg3r></div> <p data-astro-cid-4sn4zg3r>${post.data.tags}</p> </div> </div> </div> </section> ` })} `;
}, "/Users/nickbates/Sync/development/nickbravodev-v2/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/nickbates/Sync/development/nickbravodev-v2/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
