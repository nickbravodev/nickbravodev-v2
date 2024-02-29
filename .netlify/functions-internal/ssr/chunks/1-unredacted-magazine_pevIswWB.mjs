import { _ as __astro_tag_component__, k as Fragment, w as createVNode } from './astro_oCEbWNjX.mjs';
import { a as $$Image } from './pages/404_ggS6vBLN.mjs';
import 'clsx';

const frontmatter = {
  "client": "Unredacted Magazine",
  "title": "Digital magazine layout.",
  "categories": ["studio tips"],
  "featured": true,
  "image": "./img/unredacted-magazine-002-cover.png",
  "url": "https://unredactedmagazine.com/",
  "date": "08/10/2020",
  "tech": "Adobe InDesign, Illustrator",
  "blurb": "We've designed the entire layout of Unredacted Magazine, an interactive magazine, beginning with Issue 002 in June 2022. We built an adaptable, accessible layout in InDesign and created several graphical components and ads in Illustrator. The magazine is digital-only and is delivered as an interactive PDF.",
  "slug": "unredacted-magazine"
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
      children: "We\u2019ve designed the entire layout of Unredacted Magazine, an interactive magazine, beginning with Issue 002 in June 2022. We built an adaptable, accessible layout in InDesign and created several graphical components and ads in Illustrator. The magazine is digital-only and is delivered as an interactive PDF."
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
const url = "src/content/works/1-unredacted-magazine.mdx";
const file = "/Users/nb258622/dev/Github/nickbravodev-v2/src/content/works/1-unredacted-magazine.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nb258622/dev/Github/nickbravodev-v2/src/content/works/1-unredacted-magazine.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
