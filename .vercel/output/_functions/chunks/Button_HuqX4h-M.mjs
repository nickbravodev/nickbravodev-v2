import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, e as renderComponent, d as renderTemplate } from './astro/server_D5xLaq5v.mjs';
import { $ as $$Icon } from './MainLayout_BkJaE8bp.mjs';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const commonButtonData = [
    {
      slug: "contact",
      text: "Contact Me",
      href: "#contact",
      type: "outline"
    },
    {
      slug: "resume",
      text: "Resume",
      href: "#resume",
      classes: "resume-trigger",
      id: "resume-trigger",
      type: "outline"
    },
    {
      slug: "_template",
      // shortcut - compares against href when placing Button component
      href: "/path-to-page",
      // Everything below can be overridded when placing Button component
      text: "Button Text",
      target: "_blank",
      // "_blank" for new window - "_parent" dufault
      size: "lg",
      // "sm" or "lg" - md default
      type: "outline",
      // "outline" - solid default
      color: "secondary",
      // "secondary" - primary default
      icon: {
        name: "icon-name",
        side: "left"
        // "left" or "right"
      },
      classes: "d-none"
      // any additional classes you want to apply to this button
    }
  ];
  const {
    href,
    text,
    target,
    size,
    type,
    color,
    icon,
    classes,
    ...rest
  } = Astro2.props;
  const buttonCompare = commonButtonData.find((item) => item.slug === href);
  const buttonHref = buttonCompare ? buttonCompare.href : href;
  const buttonText = !text && buttonCompare ? buttonCompare.text : text;
  const buttonTarget = !target && buttonCompare ? buttonCompare.target : target;
  const buttonSize = !size && buttonCompare ? buttonCompare.size : size;
  const buttonType = !type && buttonCompare ? buttonCompare.type : type;
  const buttonColor = !color && buttonCompare ? buttonCompare.color : color;
  const buttonClasses = !classes && buttonCompare ? buttonCompare.classes : classes;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(buttonHref, "href")}${addAttribute(buttonTarget, "target")}${addAttribute(buttonText, "aria-label")}${addAttribute(buttonText, "aria-roledescription")}${addAttribute([
    "button",
    buttonClasses,
    buttonSize,
    buttonType,
    buttonColor
  ], "class:list")}${spreadAttributes(rest)}>${// Sets left icon if applicable
  !icon && buttonCompare && (buttonCompare.icon && buttonCompare.icon.side === "left") ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": buttonCompare.icon.name, "size": "22", "class": "me-2" })}` : icon && icon.side === "left" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "size": "22", "class": "me-2" })}`} <span>${buttonText}</span> ${// Sets right icon if applicable
  !icon && buttonCompare && (buttonCompare.icon && buttonCompare.icon.side === "right") ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": buttonCompare.icon.name, "size": "22", "class": "me-2" })}` : icon && icon.side === "right" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "size": "22", "class": "me-2" })}`}</a>`;
}, "/Users/nickbates/Sync/development/nickbravodev-v2/src/components/Button.astro", void 0);

export { $$Button as $ };
