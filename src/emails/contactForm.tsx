import { Body, Button, Container, Head, Html, Img, Link, Preview, Section, Text } from "@react-email/components";

interface ContactFormProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const baseUrl = "https://nickbravo.dev/";

export const ContactForm = ({ firstName, lastName, email, message }: ContactFormProps) => (
  <Html>
    <Head />
    <Preview>NickBravo.dev Contact Form Submission</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={`${baseUrl}/nickbravodev-logo-64.png`} width="32" height="32" alt="NickBravo.dev" />

        <Text style={title}>
          <strong>
            {firstName} {lastName}
          </strong>{" "}
          submitted a Contact Form on NickBravo.dev.
        </Text>

        <Section style={section}>
          <Text style={text}>
            Name:{" "}
            <strong>
              {firstName} {lastName}
            </strong>
          </Text>
          <Text style={text}>
            Email: <strong>{email}</strong>
          </Text>
          <Text style={text}>Message:</Text>
          <Text style={text}>{message}</Text>
        </Section>

        <Text style={footer}>
          NickBravo.dev ・{" "}
          <Link style={link} href="https://nickbravo.dev">
            https://nickbravo.dev
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

ContactForm.PreviewProps = {
  name: "alanturing",
} as ContactFormProps;

export default ContactForm;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const button = {
  fontSize: "14px",
  backgroundColor: "#28a745",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "12px 24px",
};

const links = {
  textAlign: "center" as const,
};

const link = {
  color: "#0366d6",
  fontSize: "12px",
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "60px",
};
