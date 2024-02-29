import { _ as __astro_tag_component__, k as Fragment, w as createVNode } from './astro_oCEbWNjX.mjs';
import { a as $$Image } from './pages/404_jDnNbzbL.mjs';
import 'clsx';

const frontmatter = {
  "client": "Arcane Ops",
  "title": "Arcane Ops. A paranormal podcast.",
  "categories": ["studio tips"],
  "featured": true,
  "image": "./img/arcane-ops-homepage-cover.png",
  "date": "08/10/2021",
  "tech": "WordPress, HTML, CSS, JavaScript, Bootstrap, Adobe CC",
  "blurb": "Arcane Ops was a limited-run paranormal podcast that ran for seven episodes at the end of 2020. We designed the website layout in Adobe XD and built it using WordPress, WooCommerce, and Bootstrap. We designed the entire brand identity, including logos, social media images, video animations, and video thumbnails in Adobe Illustrator, InDesign, Photoshop, AfterEffects, and Premiere.",
  "slug": "arcane-ops"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "overview",
    "text": "Overview"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode("div", {
      class: "hr-div"
    }), "\n", createVNode(_components.p, {
      children: "Arcane Ops was a limited-run paranormal podcast that ran for seven episodes at the end of 2020. We designed the website layout in Adobe XD and built it using WordPress, WooCommerce, and Bootstrap. We designed the entire brand identity, including logos, social media images, video animations, and video thumbnails in Adobe Illustrator, InDesign, Photoshop, AfterEffects, and Premiere."
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/works/4-arcane-ops.mdx";
const file = "/Users/nb258622/dev/Github/nickbravodev-v2/src/content/works/4-arcane-ops.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nb258622/dev/Github/nickbravodev-v2/src/content/works/4-arcane-ops.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
