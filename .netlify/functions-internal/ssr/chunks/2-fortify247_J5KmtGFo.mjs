import { _ as __astro_tag_component__, p as Fragment, w as createVNode } from './astro_mQgevgBf.mjs';
import { $ as $$Image } from './pages/_slug__e8uenzzS.mjs';
import 'clsx';

const frontmatter = {
  "client": "Fortify 24x7",
  "title": "Digital magazine ads.",
  "categories": ["studio tips"],
  "featured": true,
  "image": "./img/Fortify-24x7-ad-cover.png",
  "date": "08/10/2021",
  "tech": "Adobe Illustrator, InDesign",
  "blurb": "Fortify 24x7 asked us to design a series of half-page magazine ads to be included in several issues of Unredacted Magazine. After receiving the parameters and copy, we designed the ads in Adobe Illustrator. Since the magazine is an Interactive PDF, the final designs were embedded directly into the InDesign document with multiple targeted hyperlinks. These ads can be seen in various issues of Unredacted Magazine.",
  "slug": "fortify-24x7"
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
      children: "Fortify 24x7 asked us to design a series of half-page magazine ads to be included in several issues of Unredacted Magazine. After receiving the parameters and copy, we designed the ads in Adobe Illustrator. Since the magazine is an Interactive PDF, the final designs were embedded directly into the InDesign document with multiple targeted hyperlinks. These ads can be seen in various issues of Unredacted Magazine."
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
const url = "src/content/works/2-fortify247.mdx";
const file = "/Users/nb258622/dev/Github/nickbravodev-v2/src/content/works/2-fortify247.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nb258622/dev/Github/nickbravodev-v2/src/content/works/2-fortify247.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
