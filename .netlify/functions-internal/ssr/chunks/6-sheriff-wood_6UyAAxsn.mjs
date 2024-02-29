import { _ as __astro_tag_component__, p as Fragment, w as createVNode } from './astro_mQgevgBf.mjs';
import { $ as $$Image } from './pages/_slug__RUXDXY85.mjs';
import 'clsx';

const frontmatter = {
  "client": "Sherrif Wood",
  "title": "Sheriff campaign website.",
  "categories": ["studio tips"],
  "featured": false,
  "image": "./img/sheriff-wood-homepage-cover.png",
  "date": "08/10/2021",
  "tech": "HTML, CSS, JavaScript, PHP, Bootstrap, Adobe CC",
  "blurb": "Campaign website for a sheriff election. This website had many pages, a simple CMS for news updates, and simple PayPal API setup to accept donations. I created the UI in Adobe XD and built it using Bootstrap, HTML, CSS, JavaScript, and some basic PHP to run the CMS. All logos and graphics were designed in Adobe CC.",
  "slug": "sheriff-wood"
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
      children: "Campaign website for a sheriff election. This website had many pages, a simple internal CMS for news updates, and simple PayPal API setup to accept donations. I created the UI in Adobe XD and built it using Bootstrap, HTML, CSS, JavaScript, and some basic PHP to run the CMS. All logos and graphics were designed in Adobe CC."
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
const url = "src/content/works/6-sheriff-wood.mdx";
const file = "/Users/nb258622/dev/Github/nickbravodev-v2/src/content/works/6-sheriff-wood.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nb258622/dev/Github/nickbravodev-v2/src/content/works/6-sheriff-wood.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
