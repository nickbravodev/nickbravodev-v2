import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate } from '../chunks/astro/server_tDdmYNVf.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_uwv1wgoV.mjs';
import { $ as $$Icon, a as $$MainLayout } from '../chunks/MainLayout_DgyPmUUi.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BeanF8c5.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://nickbravo.dev");
const $$Work = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Work;
  const { work } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="collection-card"${addAttribute(`window.location="/work/${work.slug}";`, "onclick")}> <div class="collection-card__inner"> <a${addAttribute(`/work/${work.slug}`, "href")}${addAttribute(`Read more about ${work.data.title}`, "aria-label")}> ${renderComponent($$result, "Image", $$Image, { "src": work.data.image, "alt": work.data.title, "width": 600, "height": 600 / 1.5, "format": "avif" })} </a> <div class="launch-icon"> ${work.data.url ? renderTemplate`<a${addAttribute(work.data.url, "href")} target="_blank"${addAttribute(`Read more about ${work.data.title}`, "aria-label")}>${renderComponent($$result, "Icon", $$Icon, { "name": "new-window" })}</a>` : renderTemplate`<span>&nbsp;</span>`} </div> <h3 class="one-line"><a${addAttribute(`/work/${work.slug}`, "href")}>${work.data.title}</a></h3> <p class="text-overflow">${work.data.blurb}</p> <p class="text-overflow tech one-line">${work.data.tech}</p> </div> <!-- <div>
      <Button
      href={\`/work/\${work.slug}\`}
      text={\`Read more about \${work.data.title}\`}
      icon={{ name: "new-window", side: "left"}}
      />
    </div> --> <div class="collection-card__label"> <p class="one-line"><a${addAttribute(`/work/${work.slug}`, "href")}>${work.data.client}</a></p> </div> </article>`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/Work.astro", void 0);

const $$Astro$1 = createAstro("https://nickbravo.dev");
const $$WorkList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WorkList;
  const works = (await getCollection("works", ({ data }) => {
    return data.draft !== true;
  })).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return renderTemplate`${maybeRenderHead()}<div class="collection-grid padding-nav-height"> ${works.map((work) => renderTemplate`${renderComponent($$result, "Work", $$Work, { "work": work })}`)} </div>`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/WorkList.astro", void 0);

const $$Astro = createAstro("https://nickbravo.dev");
const getStaticPaths = async ({ paginate }) => {
  const landing = (await getCollection("works", ({ data }) => {
    return data.isDraft !== true;
  })).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return paginate(landing, { pageSize: 9 });
};
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const works = await getCollection("works");
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Work" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "WorkList", $$WorkList, { "works": works })} </section> ` })}`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/pages/work/index.astro", void 0);

const $$file = "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/pages/work/index.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
