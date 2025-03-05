import { jsxs, jsx } from 'react/jsx-runtime';
import { Html, Head, Preview, Body, Container, Img, Text, Section, Link, Button } from '@react-email/components';

const baseUrl = "https://demo.react.email/";
const SampleEmail = ({ username }) => /* @__PURE__ */ jsxs(Html, { children: [
  /* @__PURE__ */ jsx(Head, {}),
  /* @__PURE__ */ jsx(Preview, { children: "A fine-grained personal access token has been added to your account" }),
  /* @__PURE__ */ jsx(Body, { style: main, children: /* @__PURE__ */ jsxs(Container, { style: container, children: [
    /* @__PURE__ */ jsx(Img, { src: `${baseUrl}/static/github.png`, width: "32", height: "32", alt: "Github" }),
    /* @__PURE__ */ jsxs(Text, { style: title, children: [
      /* @__PURE__ */ jsxs("strong", { children: [
        "@",
        username
      ] }),
      ", a personal access was created on your account."
    ] }),
    /* @__PURE__ */ jsxs(Section, { style: section, children: [
      /* @__PURE__ */ jsxs(Text, { style: text, children: [
        "Hey ",
        /* @__PURE__ */ jsx("strong", { children: username }),
        "!"
      ] }),
      /* @__PURE__ */ jsxs(Text, { style: text, children: [
        "A fine-grained personal access token (",
        /* @__PURE__ */ jsx(Link, { children: "resend" }),
        ") was recently added to your account."
      ] }),
      /* @__PURE__ */ jsx(Button, { style: button, children: "View your token" })
    ] }),
    /* @__PURE__ */ jsxs(Text, { style: links, children: [
      /* @__PURE__ */ jsx(Link, { style: link, children: "Your security audit log" }),
      " ・ ",
      /* @__PURE__ */ jsx(Link, { style: link, children: "Contact support" })
    ] }),
    /* @__PURE__ */ jsx(Text, { style: footer, children: "GitHub, Inc. ・88 Colin P Kelly Jr Street ・San Francisco, CA 94107" })
  ] }) })
] });
SampleEmail.PreviewProps = {
  username: "alanturing"
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
const button = {
  fontSize: "14px",
  backgroundColor: "#28a745",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "12px 24px"
};
const links = {
  textAlign: "center"
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

export { SampleEmail as S };
