import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_tDdmYNVf.mjs';
import 'clsx';

const frontmatter = {
  "client": "Bates Corporate Law",
  "title": "Corporate lawfirm website.",
  "categories": ["studio tips"],
  "featured": true,
  "image": "./img/corporate-law-homepage-cover.png",
  "date": "2022-08-06T07:00:00.000Z",
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
      children: "In an effort to explore the Webflow platform we designed and built this was a pro bono micro website for a fledgling corporate law firm. We created the UI in Adobe XD and developed it using Webflow, Finsweet Client First, and custom JavaScript components. Webflow’s interface and ease of use are intuitive, but it’s a bit restrictive for complex styling. All logos and graphics were designed in Adobe CC."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/works/bates-corporate-law.mdx";
const file = "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/bates-corporate-law.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/bates-corporate-law.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
