import { n as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_D5xLaq5v.mjs';
import 'clsx';

const frontmatter = {
  "client": "Maverik - Adventure's First Stop",
  "title": "Web Ecosystem Transformation.",
  "categories": ["studio tips"],
  "featured": true,
  "image": "./img/mav-hero.jpg",
  "url": "https://maverik.com/",
  "date": "2024-08-26T07:00:00.000Z",
  "tech": "Astro, TypeScript, JavaScript, HTML, CSS, Figma, Adobe Illustrator, Photoshop",
  "blurb": "Recruited to provide strategic leadership and full ownership of the Maverik and Kum & Go web ecosystems, I directed a complete digital transformation of both brands' customer-facing websites and the unified Careers platform. My goal was to create scalable, modern platforms that could evolve with business needs, strengthen marketing and customer engagement, and deliver measurable impact across the enterprise.",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-challenge",
    "text": "The Challenge"
  }, {
    "depth": 2,
    "slug": "my-role",
    "text": "My Role"
  }, {
    "depth": 2,
    "slug": "the-process",
    "text": "The Process"
  }, {
    "depth": 2,
    "slug": "the-outcome",
    "text": "The Outcome"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "the-challenge",
      children: "The Challenge"
    }), "\n", createVNode("div", {
      class: "hr-div"
    }), "\n", createVNode(_components.p, {
      children: "The original Maverik website was built with static HTML, CSS, and JavaScript and had grown to over 100 pages, making updates slow and unsustainable. Both brands also had significant overlap in content, resulting in inefficiencies and duplicated effort. To support business growth and faster campaign launches, the sites needed modern architecture, dynamic content capabilities, and a shared framework that could reduce operational overhead."
    }), "\n", createVNode(_components.h2, {
      id: "my-role",
      children: "My Role"
    }), "\n", createVNode("div", {
      class: "hr-div"
    }), "\n", createVNode(_components.p, {
      children: "I spearheaded the rebuild of the Kum & Go site in under four weeks, integrating CMS and API-driven solutions that improved performance, accessibility, and reliability. Building on that success, I led the modernization of the Maverik website, implementing scalable frameworks and establishing enterprise-level coding standards using Astro, React, TypeScript, and modern DevOps workflows."
    }), "\n", createVNode(_components.h2, {
      id: "the-process",
      children: "The Process"
    }), "\n", createVNode("div", {
      class: "hr-div"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Architected new platforms that expanded monthly traffic from 22K to 640K page views, advancing marketing and engagement objectives"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Implemented Astro Content Collections to power dynamic content and automated routing, reducing the need for manual page creation"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Integrated Maverik’s UI/UX design system into reusable components, following Atomic Design principles for long-term scalability"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Partnered with Marketing, PR, and Digital Product teams to align functionality with business goals, accelerating campaign delivery"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Championed cross-functional collaboration and established coding best practices that improved communication between technical and non-technical teams"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "the-outcome",
      children: "The Outcome"
    }), "\n", createVNode("div", {
      class: "hr-div"
    }), "\n", createVNode(_components.p, {
      children: "The rebuilt web platforms delivered more than $600K in annual operational savings and dramatically improved site performance, accessibility, and maintainability. For users, the result is a streamlined experience with faster navigation, modern design features such as light/dark mode, and a consistent brand experience across Maverik and Kum & Go. For internal teams, updates are faster, workflows are smoother, and marketing campaigns go live more efficiently."
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
const file = "/Users/nickbates/Sync/development/nickbravodev-v2/src/content/works/maverik.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nickbates/Sync/development/nickbravodev-v2/src/content/works/maverik.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
