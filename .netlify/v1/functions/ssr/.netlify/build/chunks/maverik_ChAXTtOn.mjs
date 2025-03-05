import { q as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Bjo-g0z2.mjs';
import 'clsx';

const frontmatter = {
  "client": "Maverik - Adventure's First Stop",
  "title": "Marketing Website Refresh",
  "categories": ["studio tips"],
  "featured": true,
  "image": "./img/mav-hero.jpg",
  "url": "https://maverik.com/",
  "date": "2024-08-26T07:00:00.000Z",
  "tech": "Astro, TypeScript, JavaScript, HTML, CSS, Figma, Adobe Illustrator, Photoshop",
  "blurb": "After a successful launch of the brand-new Kum & Go website, the Maverik marketing team decided it was time to update the Maverik marketing website with better functionality, scalability, and a modern look.",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "site-architecture",
    "text": "Site Architecture"
  }, {
    "depth": 2,
    "slug": "design-system",
    "text": "Design System"
  }, {
    "depth": 2,
    "slug": "user-experience-upgrade",
    "text": "User Experience Upgrade"
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
      id: "site-architecture",
      children: "Site Architecture"
    }), "\n", createVNode("div", {
      class: "hr-div"
    }), "\n", createVNode(_components.p, {
      children: "The original site was built using vanilla HTML, CSS, and JavaScript and housed over 100 pages. Building new pages and maintaining the site became too convoluted to continue. Since the Maverik and Kum & Go sites had a lot of duplicate content, we decided to build the new site using the same Astro framework and share a lot of components between the new sites."
    }), "\n", createVNode(_components.p, {
      children: "Instead of building new landing pages from scratch, we set up Astro Content Collections for more dynamic page building with automatic routing. We found a lot of areas to use Content Collections for dynamic content."
    }), "\n", createVNode(_components.h2, {
      id: "design-system",
      children: "Design System"
    }), "\n", createVNode("div", {
      class: "hr-div"
    }), "\n", createVNode(_components.p, {
      children: "Maverik’s awesome UI/UX team built an awesome design system for the new site. Using Astro components, I integrated the design system into the site using Atomic Design principles. Now changes are easier, and we don’t have to worry about missing hidden elements."
    }), "\n", createVNode(_components.p, {
      children: "The new design system features a light/dark mode toggle, respecting user’s system preferences by default, but giving them the option to switch anytime."
    }), "\n", createVNode(_components.h2, {
      id: "user-experience-upgrade",
      children: "User Experience Upgrade"
    }), "\n", createVNode("div", {
      class: "hr-div"
    }), "\n", createVNode(_components.p, {
      children: "By focusing on the user journey, and new site architecture built for improved functionality, users have noticed a much better user experience. The site is easier for users to navigate and for the marketing team to update. A solid win for everyone."
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

const url = "src/content/works/maverik.mdx";
const file = "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/maverik.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/maverik.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
