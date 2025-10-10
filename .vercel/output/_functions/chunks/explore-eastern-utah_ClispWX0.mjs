import { n as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_D5xLaq5v.mjs';
import 'clsx';

const frontmatter = {
  "client": "Explore Eastern Utah",
  "title": "Restaurant listing website.",
  "categories": ["studio tips"],
  "featured": true,
  "image": "./img/explore-eastern-utah-homepage-cover.png",
  "date": "2022-08-08T07:00:00.000Z",
  "tech": "WordPress, HTML, CSS, JavaScript, Bootstrap, Adobe CC",
  "blurb": "I built Explore Eastern Utah to showcase local restaurants that remained open during pandemic shutdowns. I designed the UI in Adobe XD and built it using WordPress and Bootstrap. Through extensive use of dynamic content and APIs, Business owners were able to create user accounts and update their listings. All logos and graphics were designed in Adobe CC.",
  "slug": "explore-eastern-utah"
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

const url = "src/content/works/explore-eastern-utah.mdx";
const file = "/Users/nickbates/Sync/development/nickbravodev-v2/src/content/works/explore-eastern-utah.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nickbates/Sync/development/nickbravodev-v2/src/content/works/explore-eastern-utah.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
