import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, e as renderComponent, d as renderTemplate } from '../chunks/astro/server_D5xLaq5v.mjs';
import 'kleur/colors';
import { a as getCollection } from '../chunks/_astro_content_CkWKB8BT.mjs';
import { $ as $$Icon, a as $$MainLayout } from '../chunks/MainLayout_4Q-umG_H.mjs';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CcXl6T4b.mjs';
import { $ as $$Button } from '../chunks/Button_CifggIsi.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$BlogListingCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogListingCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="blog-card"${addAttribute(`window.location="/blog/${post.slug}";`, "onclick")}> <div class="blog-card__inner"> <a${addAttribute(`/blog/${post.slug}`, "href")}${addAttribute(`Read more about ${post.data.title}`, "aria-label")}> ${renderComponent($$result, "Image", $$Image, { "src": post.data.image, "alt": post.data.title, "width": 600, "height": 600 / 1.5, "format": "avif" })} </a> <div class="launch-icon"> ${post.data.url ? renderTemplate`<a${addAttribute(post.data.url, "href")} target="_blank"${addAttribute(`Read more about ${post.data.title}`, "aria-label")}>${renderComponent($$result, "Icon", $$Icon, { "name": "new-window" })}</a>` : renderTemplate`<span>&nbsp;</span>`} </div> </div> <div class="blog-card__label"> <h3 class=""><a${addAttribute(`/blog/${post.slug}`, "href")}>${post.data.title}</a></h3> <p class="text-overflow">${post.data.blurb}</p> <p class="text-overflow tech one-line">${post.data.tags}</p> ${renderComponent($$result, "Button", $$Button, { "href": `/blog/${post.slug}`, "text": "Read more", "color": "secondary", "classes": "mt-3" })} </div> </article>`;
}, "/Users/nickbates/Sync/development/nickbravodev-v2/src/components/BlogListingCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$BlogList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogList;
  const blogPosts = (await getCollection("blogPosts", ({ data }) => {
    return data.draft !== true;
  })).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return renderTemplate`${maybeRenderHead()}<div class="blog-grid padding-nav-height"> ${blogPosts.map((post) => renderTemplate`${renderComponent($$result, "BlogListingCard", $$BlogListingCard, { "post": post })}`)} </div>`;
}, "/Users/nickbates/Sync/development/nickbravodev-v2/src/components/BlogList.astro", void 0);

const $$Astro = createAstro();
const getStaticPaths = (async ({ paginate }) => {
  const landing = (await getCollection("blogPosts", ({ data }) => {
    return data.isDraft !== true;
  })).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return paginate(landing, { pageSize: 9 });
});
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const blogPosts = await getCollection("blogPosts");
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Blog" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "BlogList", $$BlogList, { "blogPosts": blogPosts })} </section> ` })}`;
}, "/Users/nickbates/Sync/development/nickbravodev-v2/src/pages/blog/index.astro", void 0);

const $$file = "/Users/nickbates/Sync/development/nickbravodev-v2/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
