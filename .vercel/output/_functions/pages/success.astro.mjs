import { c as createAstro, a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_tDdmYNVf.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_uwv1wgoV.mjs';
import { a as $$MainLayout } from '../chunks/MainLayout_DgyPmUUi.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://nickbravo.dev");
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  await getCollection("works");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Thanks for reaching out!", "description": "Thanks for reaching out!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- <HeroFull
      id="thank-you"
      heading="Websites and content. <br /> Privacy-focused websites that drive results."
      p1="We build privacy-focused websites that drive outcomes and solidify brand authority and trust across platforms. All while protecting your users' privacy."
      image={homeHero}
      image_alt="Astropost Portfolio Show"
      button_primary_link="start"
    /> --> <section> <h1>Thanks!</h1> </section> </main> ` })}`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/pages/success.astro", void 0);

const $$file = "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/pages/success.astro";
const $$url = "/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
