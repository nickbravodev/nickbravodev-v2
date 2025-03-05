import { q as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Bjo-g0z2.mjs';
import 'clsx';

const frontmatter = {
  "client": "Arcane Ops",
  "title": "Arcane Ops. A paranormal podcast.",
  "categories": ["studio tips"],
  "featured": true,
  "image": "./img/arcane-ops-homepage-cover.png",
  "date": "2022-08-07T07:00:00.000Z",
  "tech": "WordPress, HTML, CSS, JavaScript, Bootstrap, Adobe CC",
  "blurb": "Arcane Ops was a limited-run paranormal podcast that ran for seven episodes at the end of 2020. I designed the website layout in Adobe XD and built it using WordPress, WooCommerce, and Bootstrap. I designed the entire brand identity, including logos, social media images, video animations, and video thumbnails in Adobe Illustrator, InDesign, Photoshop, AfterEffects, and Premiere.",
  "slug": "arcane-ops"
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

const url = "src/content/works/arcane-ops.mdx";
const file = "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/arcane-ops.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/arcane-ops.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
