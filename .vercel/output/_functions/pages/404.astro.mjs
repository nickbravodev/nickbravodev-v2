import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderTemplate, r as renderComponent, u as unescapeHTML } from '../chunks/astro/server_tDdmYNVf.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout } from '../chunks/MainLayout_DgyPmUUi.mjs';
import 'clsx';
/* empty css                               */
import { $ as $$Button } from '../chunks/Button_jwyUD9Ad.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BeanF8c5.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://nickbravo.dev");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Container;
  const {
    id = "",
    background = "",
    columns = "",
    classes = ""
  } = Astro2.props;
  return renderTemplate`<!-- Banner section -->${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`banner-section
    ${background && "bg"} 
    ${background.includes("alt") && "alt"} 
    ${background.includes("map") && "map"} 
    ${background.includes("swoop") && "swoop"} 
    ${background.includes("full") && "full"} 
    ${columns === "2" && "container__2-col"} 
    ${columns === "3" && "container__3-col"} 
    ${columns === "4" && "container__4-col"} 
    ${classes}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/Container.astro", void 0);

const $$Astro = createAstro("https://nickbravo.dev");
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Banner;
  const {
    type = "",
    eyebrow = "",
    h1 = "",
    h2 = "",
    h3 = "",
    p1 = "",
    p2 = "",
    p3 = "",
    sm1 = "",
    sm2 = "",
    sm3 = "",
    id = "",
    position = "",
    text_align = "",
    heading_size = "",
    heading_style = "",
    body_size = "",
    theme = "",
    size = "",
    icon = "",
    image = "",
    image_alt = "",
    image_loading = "",
    aspect_ratio = "",
    rounded_corners = "",
    button1_link = "",
    button1_text = "",
    button1_target = "",
    button1_type = "",
    button1_icon = "",
    button2_link = "",
    button2_text = "",
    button2_target = "",
    button2_type = "",
    button2_icon = "",
    button_size = "",
    pub_date = "",
    start_date = "",
    exp_date = "",
    brand = "",
    banner_color = "",
    banner_border = "",
    classes = "",
    banner_classes = "",
    image_round_corners = "",
    image_classes = "",
    grid_span = "",
    isActive = "",
    overlay = "",
    shadow = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`wrapper
        ${heading_size.includes("xxl") && "heading-xxl"}
        ${heading_size.includes("xl") && "heading-xl"}
        ${heading_size.includes("lg") && "heading-lg"}
        ${heading_size.includes("md") && "heading-md"}
        ${heading_size.includes("sm") && "heading-sm"}
        ${heading_size.includes("xs") && "heading-xs"}
        ${heading_style.includes("hero") && "heading-style-hero"}
        ${heading_style.includes("banner") && "heading-style-banner"}
        ${body_size.includes("xl") && "body-xl"}
        ${body_size.includes("lg") && "body-lg"}
        ${body_size.includes("md") && "body-md"}
        ${body_size.includes("sm") && "body-sm"}
        ${body_size.includes("xs") && "body-xs"}
        ${banner_color.includes("alt") && "banner__bg-alt"}
        ${banner_color.includes("border") && "banner__border"}
        ${grid_span.includes("all") && "grid-span-all"}
        ${isActive === true && "active"}
        ${classes}`, "class")}> <div${addAttribute(`${type.includes("hero") ? "hero" : type.includes("banner") ? "banner" : "card"}
    ${(size.includes("medium") || size.includes("md")) && "size-medium"}
    ${(size.includes("small") || size.includes("sm")) && "size-small"}
        ${theme.includes("full") && "full-width"}
        ${theme.includes("card") && "text-card"}
        ${theme.includes("light") && "theme-light"}
        ${theme.includes("tape") && "tape"}
        ${overlay.includes("none") && "no-overlay"}
        ${shadow.includes("none") && "no-shadow"}
        ${(position.includes("right") || position.includes("reverse")) && "position-right"}
        ${position.includes("center") && "position-center"}
        ${position.includes("top") && "position-top"}
        ${position.includes("bottom") && "position-bottom"}
        ${!image && "text-only"}
        ${rounded_corners.includes("true") && "rounded-corners"}
        ${banner_border.includes("true") && "border"}
        ${text_align.includes("center") && "text-center"}
        ${text_align.includes("right") && "text-right"}

        ${banner_classes}`, "class")}> <div class="banner__inner"> <!-- Banner text --> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "" })}`} <div class="banner__text-block"> ${eyebrow && renderTemplate`<p class="eyebrow">${eyebrow}</p>`} ${h1 && renderTemplate`<h1 class="banner__heading">${unescapeHTML(h1)}</h1>`} ${h2 && renderTemplate`<h2 class="banner__heading">${unescapeHTML(h2)}</h2>`} ${h3 && renderTemplate`<h2 class="banner__heading">${unescapeHTML(h3)}</h2>`} ${pub_date && renderTemplate`<p class="banner__body">${unescapeHTML(pub_date)}</p>`} ${p1 && renderTemplate`<p class="banner__body">${unescapeHTML(p1)}</p>`} ${p2 && renderTemplate`<p class="banner__body">${unescapeHTML(p2)}</p>`} ${p3 && renderTemplate`<p class="banner__body">${unescapeHTML(p3)}</p>`} ${sm1 && renderTemplate`<p class="banner__small">${sm1}</p>`} ${sm2 && renderTemplate`<p class="banner__small">${sm2}</p>`} ${sm3 && renderTemplate`<p class="banner__small">${sm3}</p>`} <!-- CTA buttons --> ${(button1_link || button2_link) && renderTemplate`<div class="button-row"> ${(brand || exp_date) && renderTemplate`<div class="deal-footer"> ${brand && renderTemplate`<p class="card__brand">${brand}</p>`} ${exp_date && renderTemplate`<p class="card__exp-date">Expires ${exp_date}</p>`} </div>`} ${button1_link && renderTemplate`${renderComponent($$result, "Button", $$Button, { "href": button1_link, "text": button1_text, "target": button1_target, "icon": button1_icon, "size": button_size, "type": `${button1_type.includes("outline") && "outline"}
                  ${button1_type.includes("text") && "text"}`, "color": button1_type.includes("secondary") && "secondary" })}`} ${button2_link && renderTemplate`${renderComponent($$result, "Button", $$Button, { "href": button2_link, "text": button2_text, "target": button2_target, "icon": button2_icon, "size": button_size, "type": `${button2_type.includes("outline") && "outline"}
                  ${button2_type.includes("text") && "text"}`, "color": button2_type.includes("secondary") && "secondary" })}`} </div>`} </div> </div> <!-- Hero image --> ${image && renderTemplate`<div${addAttribute(`banner-image
        ${(aspect_ratio.includes("square") || aspect_ratio.includes("1")) && "square"}
        ${aspect_ratio.includes("3/2") && "ar-32"}
        ${aspect_ratio.includes("5/4") && "ar-54"}
        ${aspect_ratio.includes("auto") && "ar-auto"}
        ${image_round_corners.includes("true") && "round-corners"}
        ${image_classes}`, "class")}> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": image_alt, "format": "avif", "class": "cover-image", "width": image.width / 2, "densities": [1.5, 2], "loading": image_loading ? image_loading : "eager" })} </div>`} </div> </div> <!-- </div> --> <!-- </section> -->`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/Banner.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Page not Found", "description": "Sorry but the page you were looking for was not found." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "id": "", "background": "", "columns": "1", "classes": "pt-80 pb-40" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Banner", $$Banner, { "type": "banner", "h1": "Page not found", "p1": "Sorry but the page you were looking for was lost in Neverland.", "button1_link": "/", "button1_text": "Run Home Jack", "button1_target": "", "button1_type": "outline", "button2_link": "", "button2_text": "", "position": "center", "theme": "", "size": "sm", "rounded_corners": "true", "heading_size": "lg", "body_size": "md" })} ` })} ` })}`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/pages/404.astro", void 0);

const $$file = "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
