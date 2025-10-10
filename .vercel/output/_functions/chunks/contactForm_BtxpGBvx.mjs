import { jsxs, jsx } from 'react/jsx-runtime';
import { Html, Head, Preview, Body, Container, Img, Text, Section, Link } from '@react-email/components';

const baseUrl = "https://nickbravo.dev/";
const ContactForm = ({ firstName, lastName, email, message }) => /* @__PURE__ */ jsxs(Html, { children: [
  /* @__PURE__ */ jsx(Head, {}),
  /* @__PURE__ */ jsx(Preview, { children: "NickBravo.dev Contact Form Submission" }),
  /* @__PURE__ */ jsx(Body, { style: main, children: /* @__PURE__ */ jsxs(Container, { style: container, children: [
    /* @__PURE__ */ jsx(Img, { src: `${baseUrl}/nickbravodev-logo-64.png`, width: "32", height: "32", alt: "NickBravo.dev" }),
    /* @__PURE__ */ jsxs(Text, { style: title, children: [
      /* @__PURE__ */ jsxs("strong", { children: [
        firstName,
        " ",
        lastName
      ] }),
      " ",
      "submitted a Contact Form on NickBravo.dev."
    ] }),
    /* @__PURE__ */ jsxs(Section, { style: section, children: [
      /* @__PURE__ */ jsxs(Text, { style: text, children: [
        "Name:",
        " ",
        /* @__PURE__ */ jsxs("strong", { children: [
          firstName,
          " ",
          lastName
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Text, { style: text, children: [
        "Email: ",
        /* @__PURE__ */ jsx("strong", { children: email })
      ] }),
      /* @__PURE__ */ jsx(Text, { style: text, children: "Message:" }),
      /* @__PURE__ */ jsx(Text, { style: text, children: message })
    ] }),
    /* @__PURE__ */ jsxs(Text, { style: footer, children: [
      "NickBravo.dev ・",
      " ",
      /* @__PURE__ */ jsx(Link, { style: link, href: "https://nickbravo.dev", children: "https://nickbravo.dev" })
    ] })
  ] }) })
] });
ContactForm.PreviewProps = {
  name: "alanturing"
};
const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'
};
const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px"
};
const title = {
  fontSize: "24px",
  lineHeight: 1.25
};
const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center"
};
const text = {
  margin: "0 0 10px 0",
  textAlign: "left"
};
const link = {
  color: "#0366d6",
  fontSize: "12px"
};
const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center",
  marginTop: "60px"
};

export { ContactForm as C };
