import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D5xLaq5v.mjs';
import 'kleur/colors';
import { a as getCollection } from '../chunks/_astro_content_QQ6JkzMZ.mjs';
import { a as $$MainLayout } from '../chunks/MainLayout_BkJaE8bp.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  await getCollection("works");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Thanks for reaching out!", "description": "Thanks for reaching out!" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- <HeroFull
      id="thank-you"
      heading="Websites and content. <br /> Privacy-focused websites that drive results."
      p1="We build privacy-focused websites that drive outcomes and solidify brand authority and trust across platforms. All while protecting your users' privacy."
      image={homeHero}
      image_alt="Astropost Portfolio Show"
      button_primary_link="start"
    /> --> <section class="mt-12"> <h1>Thanks!</h1> </section> </main> ` })}`;
}, "/Users/nickbates/Sync/development/nickbravodev-v2/src/pages/success.astro", void 0);

const $$file = "/Users/nickbates/Sync/development/nickbravodev-v2/src/pages/success.astro";
const $$url = "/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
