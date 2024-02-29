import { _ as __astro_tag_component__, k as Fragment, w as createVNode } from './astro_oCEbWNjX.mjs';
import { a as $$Image } from './pages/404_ggS6vBLN.mjs';
import 'clsx';

const frontmatter = {
  "client": "Explore Eastern Utah",
  "title": "Restaurant listing website.",
  "categories": ["studio tips"],
  "featured": true,
  "image": "./img/explore-eastern-utah-homepage-cover.png",
  "date": "08/10/2021",
  "tech": "WordPress, HTML, CSS, JavaScript, Bootstrap, Adobe CC",
  "blurb": "We built Explore Eastern Utah to showcase local restaurants that remained open during pandemic shutdowns. We designed the UI in Adobe XD and built it using WordPress and Bootstrap. Through extensive use of dynamic content and APIs, Business owners were able to create user accounts and update their listings. All logos and graphics were designed in Adobe CC.",
  "slug": "explore-eastern-utah"
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
      children: "We built Explore Eastern Utah to showcase local restaurants that remained open during pandemic shutdowns. We designed the UI in Adobe XD and built it using WordPress and Bootstrap. Through extensive use of dynamic content and APIs, Business owners were able to create user accounts and update their listings. All logos and graphics were designed in Adobe CC."
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
const url = "src/content/works/3-explore-eastern-utah.mdx";
const file = "/Users/nb258622/dev/Github/nickbravodev-v2/src/content/works/3-explore-eastern-utah.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nb258622/dev/Github/nickbravodev-v2/src/content/works/3-explore-eastern-utah.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
