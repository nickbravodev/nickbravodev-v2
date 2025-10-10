import { n as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_D5xLaq5v.mjs';
import 'clsx';

const frontmatter = {
  "client": "Fortify 24x7",
  "title": "Digital magazine ads.",
  "categories": ["studio tips"],
  "featured": true,
  "image": "./img/Fortify-24x7-ad-cover.png",
  "date": "2022-08-09T07:00:00.000Z",
  "tech": "Adobe Illustrator, InDesign",
  "blurb": "Fortify 24x7 asked me to design a series of half-page magazine ads to be included in several issues of Unredacted Magazine. After receiving the parameters and copy, I designed the ads in Adobe Illustrator. Since the magazine is an Interactive PDF, the final designs were embedded directly into the InDesign document with multiple targeted hyperlinks. These ads can be seen in various issues of Unredacted Magazine.",
  "slug": "fortify-24x7"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/works/fortify247.mdx";
const file = "/Users/nickbates/Sync/development/nickbravodev-v2/src/content/works/fortify247.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nickbates/Sync/development/nickbravodev-v2/src/content/works/fortify247.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
