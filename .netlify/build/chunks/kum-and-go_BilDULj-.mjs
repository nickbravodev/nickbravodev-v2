import { q as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Bjo-g0z2.mjs';
import 'clsx';

const frontmatter = {
  "client": "Kum & Go",
  "title": "Complete Website Rebuild.",
  "categories": ["studio tips"],
  "featured": true,
  "image": "./img/kng-hero.jpg",
  "url": "https://kumandgo.com/",
  "date": "2024-03-03T07:00:00.000Z",
  "tech": "Astro, TypeScript, JavaScript, HTML, CSS, Figma, Adobe Illustrator, Photoshop",
  "blurb": "Kum & Go recently underwent a massive transition and rebranding of their loyalty program. Working with the Figma design system created by their awesome UI/UX team, I completely rebuilt the Kum & Go public website from scratch within a tight deadline of four weeks, saving the company over $600,000 per year.",
  "slug": "kum-and-go",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "project-background",
    "text": "Project Background"
  }, {
    "depth": 2,
    "slug": "cost-v-cost",
    "text": "Cost v. Cost"
  }, {
    "depth": 2,
    "slug": "a-fresh-perspective",
    "text": "A Fresh Perspective"
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
      id: "project-background",
      children: "Project Background"
    }), "\n", createVNode("div", {
      class: "hr-div"
    }), "\n", createVNode(_components.p, {
      children: "Kum & Go was acquired by Maverik, one of the largest convenience store chains in the United States, in August 2023. During the following months, the two brands began to merge loyalty programs."
    }), "\n", createVNode(_components.p, {
      children: "In February 2024, as contracts with vendors were sunsetting, we had a tight deadline to move the public website to the same internal server as maverik.com. I built the entire site with CMS integration in less than four weeks."
    }), "\n", createVNode(_components.h2, {
      id: "cost-v-cost",
      children: "Cost v. Cost"
    }), "\n", createVNode("div", {
      class: "hr-div"
    }), "\n", createVNode(_components.p, {
      children: "The original website was built using Next.js, React, and Contentful by two groups of contractors. They built the old website in 18 months, and the combined contractor fees and enterprise services cost the company over $1,000,000."
    }), "\n", createVNode(_components.p, {
      children: "Ongoing maintenance, updates, and vendor contracts would cost over $600,000 annually. So, the company decided to eliminate the ongoing expenses and bring everything in-house."
    }), "\n", createVNode(_components.h2, {
      id: "a-fresh-perspective",
      children: "A Fresh Perspective"
    }), "\n", createVNode("div", {
      class: "hr-div"
    }), "\n", createVNode(_components.p, {
      children: "I didn’t have access to the original codebase, so I worked with the UX/UI designers at Kum & Go to interpret the Figma design system and translate it to CSS within a fresh new codebase."
    }), "\n", createVNode(_components.p, {
      children: "Though the original website was built with Next.js, React, and Contentful, I built the new website using Astro, which I find to be faster and more user-friendly than Next.js in many ways. The original plan was to continue using Contentful for dynamic data, but the company ultimately decided to eliminate Contentful and use Astro Content Collections as the content management system. The site architecture changed, but the functionality remained the same."
    }), "\n", createVNode(_components.p, {
      children: "Despite the tight deadline, I rebuilt the website with full functionality and CMS integration using industry-standard practices, saving the company over $600,000 in annually recurring costs."
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

const url = "src/content/works/kum-and-go.mdx";
const file = "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/kum-and-go.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nb258622/Maverik CREATE Dept. Dropbox/Nick Bates/dev/Github/nickbravodev-v2/src/content/works/kum-and-go.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
