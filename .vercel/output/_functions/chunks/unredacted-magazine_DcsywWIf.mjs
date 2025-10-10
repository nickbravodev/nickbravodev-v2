import { n as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_D5xLaq5v.mjs';
import 'clsx';

const frontmatter = {
  "client": "Unredacted Magazine",
  "title": "Digital magazine layout.",
  "categories": ["studio tips"],
  "featured": true,
  "image": "./img/unredacted-magazine-002-cover.png",
  "url": "https://unredactedmagazine.com/",
  "date": "2022-08-10T07:00:00.000Z",
  "tech": "Adobe InDesign, Illustrator",
  "blurb": "I designed the entire layout of Unredacted Magazine, an interactive magazine, beginning with Issue 002 in June 2022. I built an adaptable, accessible layout in InDesign and created several graphical components and ads in Illustrator. The magazine is digital-only and is delivered as an interactive PDF.",
  "slug": "unredacted-magazine"
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

const url = "src/content/works/unredacted-magazine.mdx";
const file = "/Users/nickbates/Sync/development/nickbravodev-v2/src/content/works/unredacted-magazine.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nickbates/Sync/development/nickbravodev-v2/src/content/works/unredacted-magazine.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
