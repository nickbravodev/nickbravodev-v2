import { Resend } from 'resend';
import { S as SampleEmail } from '../../chunks/sampleEmail_y607_1Ot.mjs';
import { render } from '@react-email/render';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_ZZopqq7Z_LyTuyNA5hC2JtENPyBpS2PQe");
const GET = async () => {
  const emailContent = SampleEmail({ username: "Chris" });
  const html = await render(emailContent);
  const text = await render(emailContent, {
    plainText: true
  });
  const { data, error } = await resend.emails.send({
    from: "YOUR_NAME <YOUR_EMAIL@YOUR_DOMAIN>",
    to: ["delivered@resend.dev"],
    subject: "It works!",
    html,
    text
  });
  if (error) {
    return new Response(JSON.stringify(error));
  }
  return new Response(JSON.stringify(data));
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
