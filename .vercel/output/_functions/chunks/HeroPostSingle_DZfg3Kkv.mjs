import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, e as renderComponent, d as renderTemplate } from './astro/server_D5xLaq5v.mjs';
import 'kleur/colors';
import { $ as $$Button } from './Button_CifggIsi.mjs';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_CcXl6T4b.mjs';
import { $ as $$Icon } from './MainLayout_4Q-umG_H.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$HeroPostSingle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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
}, "/Users/nickbates/Sync/development/nickbravodev-v2/src/components/heroes/HeroPostSingle.astro", void 0);

export { $$HeroPostSingle as $ };
