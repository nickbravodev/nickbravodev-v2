import { _ as __astro_tag_component__, p as Fragment, w as createVNode } from './astro_mQgevgBf.mjs';
import { $ as $$Image } from './pages/_slug__RUXDXY85.mjs';
import 'clsx';

const frontmatter = {
  "client": "Bates Corporate Law",
  "title": "Corporate lawfirm website.",
  "categories": ["studio tips"],
  "featured": true,
  "image": "./img/corporate-law-homepage-cover.png",
  "date": "08/10/2021",
  "tech": "Webflow, HTML, CSS, JavaScript, Adobe CC",
  "blurb": "In an effort to explore the Webflow platform we designed and built this was a pro bono micro website for a fledgling corporate law firm. We created the UI in Adobe XD and developed it using Webflow, Finsweet Client First, and custom JavaScript components. Webflow's interface and ease of use are intuitive, but it's a bit restrictive for complex styling. All logos and graphics were designed in Adobe CC.",
  "slug": "bates-corporate-law"
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
      children: "In an effort to explore the Webflow platform we designed and built this was a pro bono micro website for a fledgling corporate law firm. We created the UI in Adobe XD and developed it using Webflow, Finsweet Client First, and custom JavaScript components. Webflow\u2019s interface and ease of use are intuitive, but it\u2019s a bit restrictive for complex styling. All logos and graphics were designed in Adobe CC."
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
const url = "src/content/works/5-bates-corporate-law.mdx";
const file = "/Users/nb258622/dev/Github/nickbravodev-v2/src/content/works/5-bates-corporate-law.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nb258622/dev/Github/nickbravodev-v2/src/content/works/5-bates-corporate-law.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
