import { n as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_D5xLaq5v.mjs';
import 'clsx';

const frontmatter = {
  "client": "University of Utah Police Department",
  "title": "Public Safety Rebrand.",
  "categories": ["studio tips"],
  "featured": true,
  "image": "./img/uupd-rebrand.jpg",
  "date": "2025-08-26T07:00:00.000Z",
  "tech": "Adobe Illustrator, Photoshop, InDesign",
  "blurb": "In 2021, the University of Utah Police Department underwent a leadership transition that marked a turning point for the organization. With a renewed focus on safety, transparency, and community trust, the department needed a fresh identity that would embody its vision and values. I was brought in to lead the full rebranding effort, from research and discovery to design and implementation, creating a cohesive brand system that now defines every touchpoint of public safety across campus.",
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
      children: "When new leadership took over, the department’s existing visual identity no longer reflected its mission. The challenge was to design a brand that was professional, approachable, and trusted by a diverse community of students, faculty, staff, patients, and visitors, while also earning buy-in from officers and leadership inside the department."
    }), "\n", createVNode(_components.h2, {
      id: "my-role",
      children: "My Role"
    }), "\n", createVNode("div", {
      class: "hr-div"
    }), "\n", createVNode(_components.p, {
      children: "As lead designer, I oversaw the entire rebrand process. I conducted stakeholder interviews at every level, from command staff to front-line officers, to uncover the department’s vision, then translated those insights into a unified design system that could scale across all mediums."
    }), "\n", createVNode(_components.h2, {
      id: "the-process",
      children: "The Process"
    }), "\n", createVNode("div", {
      class: "hr-div"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Conducted discovery through interviews and workshops with leadership and staff"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Defined the department’s brand attributes: trust, professionalism, approachability"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Designed a new visual identity system, including logos, patches, and badges"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Applied the brand across vehicle wraps, presentation materials, social media assets, signage, and merchandise"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "the-outcome",
      children: "The Outcome"
    }), "\n", createVNode("div", {
      class: "hr-div"
    }), "\n", createVNode(_components.p, {
      children: "The rebrand delivered a strong, unified presence that communicates the department’s renewed mission at every touchpoint. Today, whether it is a patrol car, an officer’s uniform, a community presentation, or a digital asset, the University of Utah Police Department’s updated identity and my design leadership are front and center."
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

const url = "src/content/works/uupd.mdx";
const file = "/Users/nickbates/Sync/development/nickbravodev-v2/src/content/works/uupd.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nickbates/Sync/development/nickbravodev-v2/src/content/works/uupd.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
