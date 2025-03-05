import { c as createAstro, a as createComponent, b as addAttribute, d as renderTemplate, s as spreadAttributes, u as unescapeHTML, r as renderComponent, B as renderHead, m as maybeRenderHead, F as Fragment, C as renderScript, f as renderSlot } from './astro/server_tDdmYNVf.mjs';
import 'kleur/colors';
import 'clsx';
import '@resvg/resvg-js';
import 'satori';
import 'jsdom';
import 'react/jsx-runtime';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                         */

const SITE_TITLE = "Designer. Developer. Problem solver.";
const SITE_TITLE_TAG = "NickBravo.dev";
const SITE_DESCRIPTION = "I build engaging, high-performing websites, graphics, and digital assets to solidify brand authority and trust across platforms.";

const $$Astro$c = createAstro("https://nickbravo.dev");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$b = createAstro("https://nickbravo.dev");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$a = createAstro("https://nickbravo.dev");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$9 = createAstro("https://nickbravo.dev");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$8 = createAstro("https://nickbravo.dev");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$7 = createAstro("https://nickbravo.dev");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$6 = createAstro("https://nickbravo.dev");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$5 = createAstro("https://nickbravo.dev");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/node_modules/astro-seo/src/SEO.astro", void 0);

function getImagePath({ url, site }) {
    if (!site) {
        throw new Error("`site` must be set in your Astro configuration: https://docs.astro.build/en/reference/configuration-reference/#site");
    }
    let target = url.pathname;
    // if url ends with a slash, it's a directory
    // add index.png to the end
    if (target.endsWith("/")) {
        target = target + "index.png";
    }
    else {
        target = target + ".png";
    }
    // Astro creates these as top-level files rather than in a folder
    if (target === "/404/index.png") {
        return site.toString() + "404.png";
    }
    else if (target === "/500/index.png") {
        return site.toString() + "500.png";
    }
    // remove leading slash
    target = target.slice(1);
    // add site URL
    target = site.toString() + target;
    return target;
}

const $$Astro$4 = createAstro("https://nickbravo.dev");
const $$MainHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MainHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).href;
  const { title, title_tag, description, og_image } = Astro2.props;
  const { url, site } = Astro2;
  const openGraphImageUrl = getImagePath({ url, site });
  return renderTemplate`<head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Static Site Generated by Astro - https://astro.build --><title>${`${title} - ${title_tag}`}</title><link rel="canonical"${addAttribute(canonicalURL, "href")}><link rel="sitemap" href="/sitemap-index.xml"><meta name="description"${addAttribute(description, "content")}><meta name="color-scheme" content="dark light">${renderComponent($$result, "SEO", $$SEO, { "openGraph": {
    basic: {
      title,
      type: "website",
      image: openGraphImageUrl,
      url
    },
    optional: {
      description
    }
  } })}<!-- <meta property="og:title" content={\`\${title} - \${title_tag}\`} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={\`\${Astro.site}\${og_image}\`} />
  <meta property="og:url" content={canonicalURL} />

  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@maverik"/>
  <meta name="twitter:title" content={\`\${title} - \${title_tag}\`}/>
  <meta name="twitter:description" content={description}/>
  <meta name="twitter:image" content={\`\${Astro.site}\${og_image}\`}/> 
  <meta property="twitter:url" content={canonicalURL} /> --><!-- <ViewTransitions fallback="swap" /> -->${renderHead()}</head>`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/layouts/MainHead.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1741201064,"icons":{"close-button":{"body":"<path fill=\"currentColor\" d=\"m12 13.4-4.9 4.9q-.275.275-.7.275t-.7-.275-.275-.7.275-.7l4.9-4.9-4.9-4.9q-.275-.275-.275-.7t.275-.7.7-.275.7.275l4.9 4.9 4.9-4.9q.275-.275.7-.275t.7.275.275.7-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7-.7.275-.7-.275z\"/>"},"dark-mode-toggle":{"body":"<path fill=\"currentColor\" d=\"M9.5 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07 1.91-2.16 3.01-4.98 3.01-7.93s-1.1-5.77-3.01-7.93C8.82 4.02 9.16 4 9.5 4m0-2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2\"/>"},"download":{"body":"<path fill=\"none\" stroke=\"#dde0bd\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\" d=\"M28.5 19.5v6a3 3 0 0 1-3 3h-21a3 3 0 0 1-3-3v-6m6-7.5 7.5 7.5 7.5-7.5M15 19.5v-18\"/>","width":30,"height":30},"light-mode-toggle":{"body":"<path fill=\"currentColor\" d=\"M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z\"/>"},"nav-toggle":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"1.5\" d=\"M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16\"/>"},"new-window":{"body":"<path fill=\"currentColor\" d=\"M24 24H3V3h9.375V0H3a3.01 3.01 0 0 0-3 3v21a3.01 3.01 0 0 0 3 3h21a3.01 3.01 0 0 0 3-3v-9.375h-3ZM15.75 0v3h6.15L6.75 18.15l2.1 2.1L24 5.1v6.15h3V0Z\"/>","width":27,"height":27},"nickbravodev":{"body":"<defs><clipPath id=\"a\"><path fill=\"none\" d=\"M0 0h344.484v387.233H0z\"/></clipPath></defs><g clip-path=\"url(#a)\"><path fill=\"#edefce\" d=\"M344.484 18.356A18.41 18.41 0 0 0 326.128 0H18.356A18.41 18.41 0 0 0 0 18.356v253.383c0 10.1 7.095 22.586 15.768 27.754l140.706 83.863c8.672 5.169 22.863 5.169 31.536 0l140.706-83.863c8.672-5.168 15.768-17.658 15.768-27.754Z\"/><path fill=\"#272b2a\" d=\"M173.709 71.739a4.8 4.8 0 0 1 2.6-2.6l4.208-1.469c1.059-.37 1.06-.975 0-1.345l-4.21-1.473a4.8 4.8 0 0 1-2.6-2.6l-1.472-4.214c-.37-1.059-.976-1.059-1.347 0l-1.473 4.21a4.8 4.8 0 0 1-2.6 2.6l-4.211 1.475c-1.058.371-1.058.976 0 1.346l4.213 1.47a4.8 4.8 0 0 1 2.6 2.6l1.471 4.211c.37 1.059.976 1.059 1.346 0Zm27.863-9.339a4.8 4.8 0 0 1 2.6-2.6l4.209-1.471c1.059-.37 1.059-.976 0-1.347l-4.209-1.472a4.8 4.8 0 0 1-2.6-2.6L200.1 48.7c-.37-1.059-.976-1.059-1.346 0l-1.474 4.21a4.8 4.8 0 0 1-2.6 2.6l-4.21 1.472c-1.059.371-1.059.977 0 1.347l4.213 1.472a4.8 4.8 0 0 1 2.6 2.6l1.471 4.209c.371 1.059.976 1.059 1.346 0Zm-54.935 18.681a4.8 4.8 0 0 1 2.6-2.6l4.209-1.471c1.059-.37 1.059-.976 0-1.346l-4.209-1.47a4.8 4.8 0 0 1-2.6-2.6l-1.47-4.21c-.37-1.059-.976-1.059-1.346 0l-1.474 4.21a4.8 4.8 0 0 1-2.6 2.6l-4.209 1.472c-1.059.37-1.059.976 0 1.346l4.213 1.473a4.8 4.8 0 0 1 2.6 2.6l1.471 4.207c.371 1.059.976 1.059 1.346 0Z\"/><path fill=\"#272b2a\" d=\"M87.153 55.8c-.456-1.025-.83-.945-.83.176v16.316a10.6 10.6 0 0 0 .892 3.874l9.759 20.059c.49 1.008.334 1.105-.348.214l-36.814-48.1c-.681-.891-1.126-.709-.988.4l2.166 17.438a8.8 8.8 0 0 0 1.5 3.633l35.6 45.711c.69.885.625.94-.143.122L49.778 64.355c-.768-.817-1.183-.594-.923.5L52.926 81.9a8.6 8.6 0 0 0 1.907 3.435l36.182 36.618c.789.8.73.862-.131.143L43.519 82.523c-.861-.719-1.177-.476-.7.54l7.21 15.437a9.25 9.25 0 0 0 2.521 3.036L87.5 126.6c.912.653.856.742-.124.2l-44.58-24.83c-.98-.546-1.328-.194-.774.781l6.454 11.35a7.63 7.63 0 0 0 2.849 2.65l33.484 15.967c1.012.483.968.592-.1.243L40.6 118.5c-1.066-.35-1.357.075-.647.943l8.238 10.068a7.1 7.1 0 0 0 3.275 2.055l31.944 7.673c1.09.262 1.065.5-.056.52l-32.619.7c-1.121.024-1.285.568-.365 1.209l9.04 6.291a7.4 7.4 0 0 0 3.713 1.13l23.365-.4c1.122-.019 1.131.092.02.246l-29.832 4.143c-1.111.155-1.233.752-.27 1.328l10.927 6.532a6.04 6.04 0 0 0 3.747.629l20-4.184c1.1-.23 1.129-.117.068.249l-25.155 8.7c-1.06.366-1.111 1.084-.112 1.6l10.167 5.2a5.76 5.76 0 0 0 3.763.32l16.652-5.211c1.071-.335 1.115-.221.1.254L76.419 177.9c-1.017.475-1.049 1.314-.072 1.865l8.679 4.9a4.78 4.78 0 0 0 3.665.231l14.264-5.827c1.038-.424 1.082-.331.1.206L84.517 189.39c-.985.537-.919 1.264.147 1.614l8.044 2.646a6.3 6.3 0 0 0 3.815-.16l12.868-5.464c1.033-.438 1.087-.331.12.239L92.8 198.114c-.967.569-.869 1.264.218 1.543l7.65 1.965a5.8 5.8 0 0 0 3.745-.507l10.421-5.972c.973-.558 1.031-.47.128.2l-15.223 11.22c-.9.666-.758 1.46.322 1.764l7.209 2.03a4.76 4.76 0 0 0 3.61-.649l10.034-7.321c.906-.661.982-.57.169.2l-12.727 12.091c-.813.773-.581 1.594.517 1.824l5.733 1.2a5.08 5.08 0 0 0 3.616-.82l9.466-7.246c.89-.682.992-.57.224.248l-11.172 11.928c-.767.819-.481 1.568.637 1.666l4.878.428a4.7 4.7 0 0 0 3.415-1.321l8.524-9.235c.761-.824.858-.746.217.175l-9.586 13.748c-.642.92-.249 1.691.873 1.713l3.919.076a4.05 4.05 0 0 0 3.135-1.68l6.9-10.831c.6-.946.72-.883.259.14l-6.795 15.1c-.46 1.023.032 1.564 1.094 1.2l3.511-1.2a6.57 6.57 0 0 0 2.995-2.4l6.024-9.85c.586-.957.7-.9.257.133l-5.755 13.349c-.444 1.03.074 1.616 1.151 1.3l4.709-1.371a5.5 5.5 0 0 0 2.9-2.378l3.6-6.891c.52-.994 1.36-.989 1.867.012l5.054 9.973a2.98 2.98 0 0 1-.523 3.262 85.8 85.8 0 0 1-19.245 13.31 272 272 0 0 1-26.935 11.539c-1.056.381-1.056 1.006 0 1.388l10.432 3.784a5.4 5.4 0 0 0 3.736-.228l28.2-14.306c1-.507 1.069-.393.152.253l-32.892 23.211c-.916.647-.75 1.233.369 1.3l11.141.69a5.63 5.63 0 0 0 3.558-1.23l20.009-17.83c.837-.746.949-.64.248.236l-21.916 27.395c-.7.876-.363 1.48.75 1.342l8.653-1.07a4.77 4.77 0 0 0 3.08-1.995l13.259-21.915c.581-.959.679-.908.218.115l-13.377 29.684c-.461 1.023.034 1.576 1.1 1.229l8.664-2.816a4.4 4.4 0 0 0 2.533-2.582l6.97-22.916c.326-1.073.463-1.043.305.068l-3.5 24.507a5.28 5.28 0 0 0 1.011 3.591l4.143 5.011a1.627 1.627 0 0 0 2.6 0l4.143-5.011a5.28 5.28 0 0 0 1.012-3.591l-3.5-24.507c-.159-1.111-.021-1.141.305-.068l6.966 22.916a4.4 4.4 0 0 0 2.533 2.581l8.67 2.817c1.067.347 1.563-.206 1.1-1.229l-13.382-29.684c-.461-1.023-.363-1.074.218-.115l13.259 21.915a4.77 4.77 0 0 0 3.08 1.995l8.653 1.07c1.113.138 1.451-.466.75-1.342l-21.912-27.395c-.7-.876-.589-.982.249-.236l20 17.829a5.63 5.63 0 0 0 3.559 1.231l11.14-.69c1.12-.069 1.286-.655.369-1.3l-32.894-23.211c-.917-.646-.848-.76.152-.253l28.2 14.306a5.4 5.4 0 0 0 3.736.228l10.44-3.784c1.054-.383 1.054-1.007 0-1.388a272 272 0 0 1-26.936-11.539 86 86 0 0 1-19.247-13.311 2.97 2.97 0 0 1-.533-3.248l5.056-9.973c.508-1 1.348-1.006 1.867-.011l3.6 6.89a5.5 5.5 0 0 0 2.9 2.378l4.711 1.371c1.077.313 1.6-.273 1.151-1.3l-5.755-13.349c-.444-1.03-.328-1.09.257-.133l6.024 9.85a6.6 6.6 0 0 0 2.994 2.4l3.51 1.194c1.062.362 1.554-.179 1.094-1.2l-6.793-15.1c-.46-1.023-.344-1.086.259-.14l6.9 10.831a4.05 4.05 0 0 0 3.135 1.68l3.92-.076c1.121-.022 1.514-.793.872-1.713l-9.585-13.748c-.642-.921-.544-1 .217-.175l8.524 9.235a4.7 4.7 0 0 0 3.415 1.321l4.875-.428c1.118-.1 1.4-.848.638-1.666l-11.167-11.92c-.767-.819-.666-.931.225-.249l9.462 7.245a5.07 5.07 0 0 0 3.615.821l5.729-1.2c1.1-.23 1.331-1.051.518-1.824l-12.727-12.102c-.813-.773-.737-.864.17-.2l10.037 7.321a4.76 4.76 0 0 0 3.611.649l7.209-2.03c1.079-.3 1.224-1.1.321-1.764l-15.225-11.227c-.9-.666-.846-.754.128-.2l10.42 5.972a5.8 5.8 0 0 0 3.745.507l7.655-1.965c1.086-.279 1.184-.973.218-1.543l-16.719-9.849c-.967-.57-.913-.677.12-.239l12.873 5.468a6.3 6.3 0 0 0 3.815.16l8.042-2.65c1.065-.35 1.132-1.077.147-1.614l-18.532-10.12c-.985-.537-.941-.63.1-.206l14.257 5.827a4.78 4.78 0 0 0 3.664-.231l8.68-4.9c.977-.551.944-1.39-.072-1.865l-20.142-9.409c-1.016-.475-.972-.589.1-.254l16.65 5.211a5.77 5.77 0 0 0 3.763-.319l10.169-5.2c1-.511.949-1.229-.111-1.6l-25.155-8.7c-1.06-.366-1.029-.479.069-.249l20 4.184a6.04 6.04 0 0 0 3.747-.629l10.928-6.532c.963-.576.842-1.173-.269-1.328l-29.833-4.143c-1.111-.154-1.1-.265.019-.246l23.367.4a7.4 7.4 0 0 0 3.713-1.13l9.039-6.291c.921-.641.757-1.185-.365-1.209l-32.619-.7c-1.122-.024-1.147-.258-.056-.52l31.948-7.673a7.1 7.1 0 0 0 3.274-2.055l8.238-10.068c.71-.868.42-1.293-.646-.943l-44.114 14.464c-1.066.349-1.11.24-.1-.243l33.485-15.958a7.6 7.6 0 0 0 2.849-2.651l6.451-11.349c.554-.975.206-1.327-.775-.781l-44.581 24.83c-.98.546-1.036.457-.125-.2l34.951-25.067a9.25 9.25 0 0 0 2.521-3.036l7.209-15.434c.474-1.016.159-1.259-.7-.54L253.037 122.1c-.861.719-.92.655-.132-.143l36.18-36.618a8.6 8.6 0 0 0 1.907-3.435l4.073-17.047c.261-1.091-.155-1.314-.923-.5l-48.174 51.288c-.768.818-.832.763-.143-.122l35.6-45.711a8.75 8.75 0 0 0 1.5-3.633l2.167-17.438c.138-1.113-.307-1.295-.989-.4l-36.814 48.11c-.682.891-.838.795-.348-.214l9.759-20.071a10.6 10.6 0 0 0 .892-3.874V55.975c0-1.121-.373-1.2-.83-.176l-28.491 63.967a13.94 13.94 0 0 0-1.2 6.785c1.243 15.336-8.788 35.455-16.129 42.576-13.362 12.961-24.568 14-24.568 14a2.34 2.34 0 0 1-2.442-1.81l-2.627-12.784a11 11 0 0 0-1.626-3.636l-1.177-1.586a10.7 10.7 0 0 1-1.608-3.639 100 100 0 0 1-1.486-11.017 43 43 0 0 0-2.7-10.966c-.416-1.042-1.1-1.042-1.514 0a42.7 42.7 0 0 0-2.694 10.966 101 101 0 0 1-1.487 11.017 10.7 10.7 0 0 1-1.609 3.639l-1.176 1.586a11 11 0 0 0-1.626 3.636l-2.628 12.784a2.34 2.34 0 0 1-2.441 1.81s-11.2-1.035-24.567-14c-7.338-7.12-17.374-27.238-16.128-42.574a13.94 13.94 0 0 0-1.2-6.789Z\"/></g>","width":344.484,"height":387.233},"social/github":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2\" clip-rule=\"evenodd\"/>"},"social/instagram":{"body":"<path fill=\"currentColor\" d=\"M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008\"/><circle cx=\"16.806\" cy=\"7.207\" r=\"1.078\" fill=\"currentColor\"/><path fill=\"currentColor\" d=\"M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419 4.6 4.6 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688 3 3 0 0 1-1.712 1.711 5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311 3 3 0 0 1-1.719-1.711 5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311 3 3 0 0 1 1.712 1.712 5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z\"/>"},"social/linkedin":{"body":"<circle cx=\"4.983\" cy=\"5.009\" r=\"2.188\" fill=\"currentColor\"/><path fill=\"currentColor\" d=\"M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z\"/>"},"social/twitter":{"body":"<path fill=\"currentColor\" d=\"M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078z\"/>"}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$3 = createAstro("https://nickbravo.dev");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$2 = createAstro("https://nickbravo.dev");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    text,
    href,
    target,
    style,
    icon,
    classes,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(href, "href")}${addAttribute(target, "target")}${addAttribute([classes, style], "class:list")}${spreadAttributes(rest)}>${icon && icon.side === "left" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "height": "24", "width": "24" })}`}<span>${text}</span>${icon && icon.side === "right" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "height": "24", "width": "24" })}`} </a> </li>`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/Link.astro", void 0);

const navData = [
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Scope",
    path: "/#scope",
    // icon: {
    //   name: "twitter",
    //   side: "right",
    // },
  },
  {
    name: "Work",
    path: "/#work",
    // icon: {
    //   name: "twitter",
    //   side: "left",
    // },
  },
  {
    name: "Contact",
    path: "/#contact",
  },
  {
    name: "Resume",
    path: "#resume",
    classes: "resume-trigger",
    id: "resume-trigger",
  },
];

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <!-- Brand logo SVG --> <a class="nav-logo" href="/" aria-label="Nick Bravo Home"> ${renderComponent($$result, "Icon", $$Icon, { "name": "nickbravodev" })} <!-- Brand name --> <span class="brand-text">Nick Bravo</span> </a> <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false"> <span class="sr-only">Menu</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "nav-toggle" })} </button> <nav> <ul id="primary-navigation" data-visible="false" class="primary-navigation"> ${navData.map((item) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "text": item.name, "href": item.path, "target": item.target, "class": item.classes, "aria-label": item.name, "icon": item.icon })}`)} </ul> </nav> </header> ${renderScript($$result, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/Nav.astro", void 0);

const socialData = [
  {
    name: "Github",
    path: "https://www.github.com/nickbravodev/",
    target: "_blank",
    icon: "social/github",
  },
  {
    name: "Twitter",
    path: "https://www.twitter.com/nickbravodev/",
    target: "_blank",
    icon: "social/twitter",
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/nickbravodev/",
    target: "_blank",
    icon: "social/instagram",
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/nickbravodev/",
    target: "_blank",
    icon: "social/linkedin",
  },
];

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class="footer-social"> ${socialData.map((item) => renderTemplate`<a${addAttribute(item.path, "href")}${addAttribute(item.target, "target")}${addAttribute(item.name, "aria-label")}> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon })} </a>`)} </div> <div class="copyright text-center">
Copyright &copy; <span id="copyright"></span> NickBravo.dev. All rights reserved.
</div> </footer> ${renderScript($$result, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/Footer.astro", void 0);

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Contact section -->${maybeRenderHead()}<section id="contact" data-astro-cid-baqc3mtv> <div class="contact-wrapper" data-astro-cid-baqc3mtv> <div data-astro-cid-baqc3mtv> <!-- Contact text --> <h2 data-astro-cid-baqc3mtv>Get in touch.</h2> <div class="hr-div" data-astro-cid-baqc3mtv></div> <p class="subheading" data-astro-cid-baqc3mtv>
I'm ready to join your team! Send me a message if you think we'd be a great fit!
</p> </div> <!-- Contact form --> <div data-astro-cid-baqc3mtv> <form name="contact-form" id="contact-form" action="/success/" method="POST" data-netlify="true" data-netilfy-honeypot="bot-field" data-astro-cid-baqc3mtv> <!-- Robot honeypot. That rhymes! --> <div class="sr-only" data-astro-cid-baqc3mtv> <label data-astro-cid-baqc3mtv>
Robot honeypot: Leave this field empty if you're human
<input name="bot-field" data-astro-cid-baqc3mtv> </label> </div> <!-- Name input --> <div data-astro-cid-baqc3mtv> <label class="form-label sr-only" for="name" data-astro-cid-baqc3mtv>Name</label> <input class="form-control" type="text" id="name" name="name" placeholder="Name" required data-astro-cid-baqc3mtv> </div> <!-- Email input --> <div data-astro-cid-baqc3mtv> <label class="form-label sr-only" for="email" data-astro-cid-baqc3mtv>Email</label> <input class="form-control" type="email" id="email" name="email" placeholder="Email" required data-astro-cid-baqc3mtv> </div> <!-- Message input --> <div data-astro-cid-baqc3mtv> <label class="form-label sr-only" for="description" data-astro-cid-baqc3mtv>Message</label> <textarea class="form-control" rows="3" id="description" name="message" placeholder="Type your message here" required data-astro-cid-baqc3mtv></textarea> </div> <!-- Submit button --> <div data-astro-cid-baqc3mtv> <button class="outline" data-astro-cid-baqc3mtv>Send message</button> </div> </form> </div> </div> </section> `;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/forms/ContactForm.astro", void 0);

const resumeExperience = [
  {
    position: "Principal Web Developer",
    employer: "Maverik",
    city: "Salt Lake City",
    state: "UT",
    startDate: "July 2023",
    endDate: "Present",
    synopsis:
      "Recruited to this role to oversee codebases of all Maverik, Kum & Go, and FJ Management (FJM) web properties, including primary websites for all companies, and the combined Careers website.",
    duties: [
      {
        task: "Completely rebuilt the Kum & Go public website from scratch (including CMS and API integration) within a tight deadline of four weeks, which significantly reduced page load times, increased accessibility and performance, and saved the company over $600,000 in annual costs.",
      },
      {
        task: "Architected scalable codebases for Maverik and Kum & Go web properties using HTML, CSS, JavaScript, JSX, and TypeScript within the Astro framework, effectively utilizing complex web components, content collections, and routing.",
      },
      {
        task: "Constructed converting landing pages for active Maverik and Kum & Go marketing campaigns, sweepstakes, and loyalty programs.",
      },
      {
        task: "Enhanced workflow efficiency between the Digital Product Team and the rest of the Marketing and Public Relations Teams to streamline web updates across all websites.",
      },
    ],
  },
  {
    position: "Web Development Consultant",
    employer: "Astropost",
    city: "Salt Lake City",
    state: "UT",
    startDate: "March 2022",
    endDate: "Present",
    synopsis:
      "Transitioned freelance business to a systemized business with streamlined client onboarding and project management workflow.",
    duties: [
      {
        task: "Implemented complex web architecture strategies for fast websites that meet high-performance metrics.",
      },
      {
        task: "Built scalable codebases for privacy-focused websites designed for headless CMS and API integration.",
      },
      {
        task: "Designed and built an accessible digital layout for Unredacted Magazine.",
      },
    ],
  },
  {
    position: "Adjunct Faculty - Web Design & Development",
    employer: "Salt Lake Community College",
    city: "Salt Lake City",
    state: "UT",
    startDate: "December 2023",
    endDate: "Present",
    synopsis: "",
    duties: [
      {
        task: "Instructed students in novice to advanced UI/UX and web design and development courses.",
      },
      {
        task: "Taught students the fundamentals of web design and development, including Semantic HTML, CSS, JavaScript, responsive layouts, and accessibility practices.",
      },
      {
        task: "Demonstrated real-world project management and DevOps workflows and best practices.",
      },
    ],
  },
  {
    position: "Freelance Designer / Developer",
    employer: "Freelance",
    city: "Salt Lake City",
    state: "UT",
    startDate: "May 2007",
    endDate: " March 2022",
    synopsis:
      "Provided freelance web design and development services to local businesses, including several pro bono projects.",
    duties: [
      {
        task: "Built engaging websites, user interfaces, visual identities, digital products, and online assets.",
      },
      {
        task: "Constructed many pro bono websites for public safety, political, and nonprofit organizations.",
      },
    ],
  },
  {
    position: "Graphic Designer / Web Developer",
    employer: "8fish",
    city: "Sandy",
    state: "UT",
    startDate: "June 2008",
    endDate: "September 2009",
    synopsis:
      "Recruited as a graphic designer and illustrator, quickly transitioned to primary web developer due to previous experience.",
    duties: [
      {
        task: "Developed the website for Maverik’s Kick Start, a local adventure TV show produced by Maverik, a leading convenience store chain.",
      },
      {
        task: "Elevated brands by building powerful websites, and designing graphics, social media content, and other digital assets.",
      },
    ],
  },
  {
    position: "Police Officer",
    employer: "University Of Utah Police Department",
    city: "Salt Lake City",
    state: "UT",
    startDate: "March 2021",
    endDate: "July 2023",
    synopsis: "",
    duties: [
      {
        task: "Spearheaded educational and community outreach campaigns as a liaison between the police and marketing departments.",
      },
    ],
  },
  {
    position: "Police Detective",
    employer: "Price City Police Department",
    city: "Price",
    state: "UT",
    startDate: "November 2015",
    endDate: "March 2021",
    synopsis: "",
    duties: [
      {
        task: "Developed and oversaw a comprehensive training and equipment program.",
      },
    ],
  },
  {
    position: "Police Lieutenant",
    employer: "Wellington Police Department",
    city: "Wellington",
    state: "UT",
    startDate: "August 2010",
    endDate: "November 2015",
    synopsis: "",
    duties: [
      {
        task: "Improved transparency and community relationships by building the department's first website and social media channels and generating timely press releases.",
      },
      {
        task: "Developed and implemented a Reserve Officer Program that reduced personnel expenditures by 20% and increased shift coverage by 50%.",
      },
    ],
  },
];

const $$ResumeExperience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${resumeExperience.map((exp) => renderTemplate`${maybeRenderHead()}<h4 data-astro-cid-nfm7tao6>${exp.position}</h4>
    <h5 data-astro-cid-nfm7tao6>${exp.employer}, <i data-astro-cid-nfm7tao6>${exp.city}, ${exp.state}</i> | ${exp.startDate} - ${exp.endDate}</h5>
    <p data-astro-cid-nfm7tao6><i data-astro-cid-nfm7tao6>${exp.synopsis}</i></p>
    <ul data-astro-cid-nfm7tao6>${exp.duties.map(
    (d) => renderTemplate`<li data-astro-cid-nfm7tao6>${d.task}</li>`
  )}</ul>`)}`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/ResumeExperience.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://nickbravo.dev");
const $$ResumePopout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ResumePopout;
  return renderTemplate(_a || (_a = __template(["<!-- Off-canvas resume popout -->", '<section class="resume-popout" tabindex="-1" id="resume" data-visible="false" data-astro-cid-iyzdqnlb> <div class="popout-wrapper" data-astro-cid-iyzdqnlb><div class="popout" data-astro-cid-iyzdqnlb> <!-- Resume header --> <div class="popout-header" data-astro-cid-iyzdqnlb> <!-- Brand logo --> <a href="/" class="popoutbar-brand" aria-label="NickBravo.dev Logo" data-astro-cid-iyzdqnlb> ', ' </a> <!-- Resume header text --> <div class="ms-3 me-auto" data-astro-cid-iyzdqnlb> <h2 class="resume-heading" data-astro-cid-iyzdqnlb>Nick Bravo</h2> <p class="resume-subheading" data-astro-cid-iyzdqnlb>\nWeb Development Architect.\n</p> </div> <!-- Close button --><!-- Close button --> <button type="button" class="btn-close text-reset" aria-label="Close" data-astro-cid-iyzdqnlb> ', ' </button> </div> <!-- Resume body --> <div id="resume-body" class="popout-body" data-astro-cid-iyzdqnlb> <!-- Performance profile --> <div class="profile" data-astro-cid-iyzdqnlb> <h3 data-astro-cid-iyzdqnlb>PERFORMANCE PROFILE</h3> <p data-astro-cid-iyzdqnlb>\nAdvanced web designer and developer with 16+ years of HTML, CSS, and JavaScript experience. Architected complex, high-performing websites using Astro JS, TypeScript, React, Tailwind CSS, and other common UI frameworks. Strong Proficiency in Figma and VS Code, mastery of Adobe Illustrator, InDesign, and Photoshop.\n</p> </div> <!-- Work experience --> <div class="experience" data-astro-cid-iyzdqnlb> <h3 data-astro-cid-iyzdqnlb>EXPERIENCE</h3> ', ' <!-- Education history --> <h3 data-astro-cid-iyzdqnlb>EDUCATION</h3> <h4 data-astro-cid-iyzdqnlb>Bachelor Of Science | Digital Cinematography</h4> <h5 data-astro-cid-iyzdqnlb>Full Sail University</h5> <ul data-astro-cid-iyzdqnlb> <li data-astro-cid-iyzdqnlb>GPA 3.99 | Valedictorian</li> </ul> <!-- <p>&nbsp;</p> --> <h4 data-astro-cid-iyzdqnlb>Associate Of Applied Science | Graphic Design</h4> <h5 data-astro-cid-iyzdqnlb>College Of Eastern Utah</h5> </div> <!-- Resume skills breakdown --> <div class="skills" data-astro-cid-iyzdqnlb> <h3 data-astro-cid-iyzdqnlb>AREAS OF EXPERTISE</h3> <ul data-astro-cid-iyzdqnlb> <li data-astro-cid-iyzdqnlb>Astro JS</li> <li data-astro-cid-iyzdqnlb>JavaScript</li> <li data-astro-cid-iyzdqnlb>TypeScript</li> <li data-astro-cid-iyzdqnlb>React</li> <li data-astro-cid-iyzdqnlb>HTML / CSS</li> <li data-astro-cid-iyzdqnlb>SCSS / SASS</li> <li data-astro-cid-iyzdqnlb>PostCSS</li> <li data-astro-cid-iyzdqnlb>Tailwind CSS</li> <li data-astro-cid-iyzdqnlb>Node.js</li> <li data-astro-cid-iyzdqnlb>Git and CI/CD</li> <li data-astro-cid-iyzdqnlb>Contentful</li> <li data-astro-cid-iyzdqnlb>CMS</li> <li data-astro-cid-iyzdqnlb>Responsive Design</li> <li data-astro-cid-iyzdqnlb>Mobile-First Design</li> <li data-astro-cid-iyzdqnlb>Product Design </li> <li data-astro-cid-iyzdqnlb>UI/UX Design</li> <li data-astro-cid-iyzdqnlb>Adobe CC</li> <li data-astro-cid-iyzdqnlb>Figma</li> <li data-astro-cid-iyzdqnlb>Core Web Vitals</li> <li data-astro-cid-iyzdqnlb>Web Accessibility</li> </ul> </div> </div> <div class="resume-download" data-astro-cid-iyzdqnlb> <a href="/resume/NickBravoWebDeveloperResume.pdf" target="_blank" aria-label="Download Resume" data-astro-cid-iyzdqnlb> ', ` </a> </div> </div> </div> </section> <script>
  const resumePopout = document.querySelector('#resume');
  const popoutTrigger = document.querySelectorAll('.resume-trigger');
  const buttonClose = document.querySelector('.btn-close');
  const popout = document.querySelector('.resume-popout');

  // Open popout
  const modalOpen = () => {
    document.body.classList.add('modal-open'); // Disables scrolling behavior on body
    resumePopout.setAttribute('data-visible', 'true'); 
    popoutTrigger.setAttribute('aria-expanded', 'true'); 
    buttonClose.setAttribute('aria-expanded', 'true'); 
  }

  // Close popout
  const modalClose = () => {
    document.body.classList.remove('modal-open'); // Disables scrolling behavior on body
    resumePopout.setAttribute('data-visible', 'false'); 
    popoutTrigger.setAttribute('aria-expanded', 'false'); 
    buttonClose.setAttribute('aria-expanded', 'false'); 
  }

  // Control popout - open/close toggle
  const modalDeploy = (e) => {
    const visibility = resumePopout.getAttribute('data-visible');
    e.preventDefault();
    if (visibility === 'false') {
      modalOpen(); // Open popout
    } else if (visibility === 'true') {
      modalClose(); // Close popout
    }
  };

  // Popout trigger - opens popout
  popoutTrigger.forEach(trigger => trigger.addEventListener('click', modalDeploy));

  // Close button - closes popout
  buttonClose.addEventListener('click', modalDeploy);

  // Closes popout when clicked outside popout wrapper
  popout.addEventListener('click', (e) => {
    const visibility = resumePopout.getAttribute('data-visible');
    const popoutWrapper = e.target.closest(".popout-wrapper");
    if (visibility === 'false') {
      return;
    } else if (visibility === 'true') {
      if (!popoutWrapper) {
        modalClose();
      }
  }
})
  
  // ESC key to close nav on mobile
  document.addEventListener('keydown', function (e) {
    const visibility = resumePopout.getAttribute('data-visible');
    
    if (e.key === 'Escape' && (visibility === 'true')) {
      document.body.classList.remove('modal-open'); // Disables scrolling behavior on body
      resumePopout.setAttribute('data-visible', 'false');
      popoutTrigger.setAttribute('aria-expanded', 'false');
      buttonClose.setAttribute('aria-expanded', 'false');
    }
  });
<\/script> `])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "nickbravodev", "class": "brand-icon", "data-astro-cid-iyzdqnlb": true }), renderComponent($$result, "Icon", $$Icon, { "name": "close-button", "data-astro-cid-iyzdqnlb": true }), renderComponent($$result, "ResumeExperience", $$ResumeExperience, { "data-astro-cid-iyzdqnlb": true }), renderComponent($$result, "Icon", $$Icon, { "name": "download", "data-astro-cid-iyzdqnlb": true }));
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/ResumePopout.astro", void 0);

const $$Astro = createAstro("https://nickbravo.dev");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = SITE_TITLE,
    title_tag = SITE_TITLE_TAG,
    description = SITE_DESCRIPTION,
    og_image = "/img/open-graph.png"
  } = Astro2.props;
  return renderTemplate`<html lang="en" prefix="og: https://ogp.me/ns#"> ${renderComponent($$result, "MainHead", $$MainHead, { "title": title, "title_tag": title_tag, "description": description, "og_image": og_image })}${maybeRenderHead()}<body> ${renderComponent($$result, "Nav", $$Nav, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> <section id="contact" class="p-0"> <div class="container"> <div class="flex align-items-start justify-content-center"> ${renderComponent($$result, "ContactForm", $$ContactForm, {})} </div> </div> </section> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "ResumePopout", $$ResumePopout, {})} </body></html>`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/layouts/MainLayout.astro", void 0);

export { $$Icon as $, $$MainLayout as a };
