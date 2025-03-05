import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate } from '../chunks/astro/server_tDdmYNVf.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout } from '../chunks/MainLayout_DgyPmUUi.mjs';
import { g as getCollection } from '../chunks/_astro_content_uwv1wgoV.mjs';
import { $ as $$Button } from '../chunks/Button_jwyUD9Ad.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BeanF8c5.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://nickbravo.dev");
const $$WorkFeatured = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WorkFeatured;
  const { work } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="collection-card__featured"${addAttribute(`window.location="/work/${work.slug}";`, "onclick")}> <div class="collection-card__featured__inner"> <a${addAttribute(`/work/${work.slug}`, "href")}${addAttribute(`Read more about ${work.data.title}`, "aria-label")}> ${renderComponent($$result, "Image", $$Image, { "src": work.data.image, "alt": work.data.title, "width": 1200, "height": 1200 / 1.5, "format": "avif", "loading": "eager" })} </a> <div class="launch-icon"> ${work.data.url ? renderTemplate`<a${addAttribute(work.data.url, "href")} target="_blank"${addAttribute(`Read more about ${work.data.title}`, "aria-label")}>${renderComponent($$result, "Icon", $$Icon, { "name": "new-window" })}</a>` : renderTemplate`<span>&nbsp;</span>`} </div> <div class="text-block"> <h3 class="one-line"><a${addAttribute(`/work/${work.slug}`, "href")}>${work.data.title}</a></h3> <p class="text-overflow">${work.data.blurb}</p> <p class="text-overflow tech one-line">${work.data.tech}</p> </div> <!-- <p class="one-line"><a href={\`/work/\${work.slug}\`}>{work.data.client}</a></p> --> <div> ${renderComponent($$result, "Button", $$Button, { "href": `/work/${work.slug}`, "text": work.data.client })} </div> </div> </article>`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/WorkFeatured.astro", void 0);

const $$Astro$1 = createAstro("https://nickbravo.dev");
const $$WorkListFeatured = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WorkListFeatured;
  const works = (await getCollection("works", ({ data }) => {
    return data.featured !== false && data.draft !== true;
  })).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return renderTemplate`${maybeRenderHead()}<div class="collection-grid__featured"> ${works.slice(0, 5).map((work) => renderTemplate`${renderComponent($$result, "WorkFeatured", $$WorkFeatured, { "work": work })}`)} </div>`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/components/WorkListFeatured.astro", void 0);

const profileImageGoofy = new Proxy({"src":"/_astro/nb-goofy.C29jPWF9.jpg","width":720,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/img/nb-goofy.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://nickbravo.dev");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const works = await getCollection("works");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Designer. Developer. Problem solver." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section id="home" class="section__100vh"> <div class="container"> <!-- Hero text --> <div class="grid-2"> <div> <p class="superheading">Nick Bravo.</p> <h1>Designer. Developer. Problem solver.</h1> <div class="hr-div"></div> <p class="subheading">
I build engaging, high-performing websites, graphics, and digital assets to solidify brand authority and trust across platforms.
</p> <!-- CTA buttons --> <div class="flex gap"> ${renderComponent($$result2, "Button", $$Button, { "href": "contact" })} ${renderComponent($$result2, "Button", $$Button, { "href": "resume", "data-bs-toggle": "offcanvas", "data-bs-target": "#resume", "aria-controls": "resume" })} </div> </div> <!-- Hero image SVG --> <div class="hero-image"> ${renderComponent($$result2, "Image", $$Image, { "src": profileImageGoofy, "class": "profile-image", "alt": "This is me. Nick Bravo.", "format": "avif", "loading": "eager" })} <!-- <Icon name="nickbravodev" /> --> </div> </div> </div> </section>  <section id="about" class="section__100vh"> <div class="container flex-md-row-reverse"> <!-- About text --> <div class="section__body flex flex-column"> <h2>Career change from cop to web developer? Don't mind if I do!</h2> <div class="hr-div"></div> <p>Short version? I recently made a career change from a full-time cop / part-time web developer/designer back to a full-time web developer.</p> <p>I worked full-time as a graphic and web designer for two years before working in law enforcement. I worked on a lot of freelance web development projects during my 15-year law enforcement career.</p> <p class="mb-4">
Long version? My official biography is set to be released in 2552.
</p> <!-- IYKYK --> <!-- CTA buttons --> <div class="flex gap"> ${renderComponent($$result2, "Button", $$Button, { "href": "contact" })} ${renderComponent($$result2, "Button", $$Button, { "href": "resume", "data-bs-toggle": "offcanvas", "data-bs-target": "#resume", "aria-controls": "resume" })} </div> </div> <!-- Profile photo. Yes, it's really a photo of me! --> <div class="section__aside hero-image d-none flex-md"> <!-- <Image src={profileImage} class="profile-image" alt="This is me. Nick Bravo." format="avif" /> --> ${renderComponent($$result2, "Icon", $$Icon, { "name": "nickbravodev" })} </div> </div> </section>  <section id="scope" class="section__100vh"> <div class="container"> <div class="section__body"> <!-- Scope main text --> <h2>Languages & frameworks.</h2> <div class="hr-div"></div> <p class="subheading">
I've been developing websites using HTML, CSS, and JavaScript and designing graphics, layouts, and brand assets with Adobe software since 2004 - you know, back when we could break MySpace. I have a solid mastery of HTML, CSS, JS and Adobe Illustrator, InDesign, and Photoshop.
</p> <p> <code>Adobe CC, VS Code, Astro, Next.js, Bootstrap, Webflow, WordPress</code> </p> <div class="flex gap"> ${renderComponent($$result2, "Button", $$Button, { "href": "contact" })} ${renderComponent($$result2, "Button", $$Button, { "href": "resume", "data-bs-toggle": "offcanvas", "data-bs-target": "#resume", "aria-controls": "resume" })} </div> </div> <!-- Scope detail text --> <div class="section__aside"> <h3 class="mb-1">Design</h3> <p>Figma, Adobe Illustrator, InDesign, Photoshop, XD.</p> <h3 class="mb-1">Frontend</h3> <p>HTML, CSS, JavaScript, TypeScript.</p> <h3 class="mb-1">Backend</h3> <p>Netlify, Node.js, NGINX, Contentful, GraphQL, Rest.</p> <h3 class="mb-1">Libraries & Builders</h3> <p>Astro, Next.js, Bootstrap, Webflow, WordPress.</p> </div> <!-- </div> --> </div> </section>  <section id="work" class="section__alt"> <div class="container flex-column"> <!-- Portfolio header --> <h2 class="text-dark text-center">A few of my projects.</h2> <div class="hr-div"></div> <p class="subheading text-dark text-center pb-5">
Here are some projects I've worked on as a designer and developer.
</p> ${renderComponent($$result2, "WorkListFeatured", $$WorkListFeatured, { "works": works })} </div> </section> ` })}`;
}, "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/pages/index.astro", void 0);

const $$file = "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
