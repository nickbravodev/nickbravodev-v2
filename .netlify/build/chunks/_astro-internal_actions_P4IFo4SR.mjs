import './_astro_actions_Bso-LI2H.mjs';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import * as z from 'zod';
import { S as SampleEmail } from './sampleEmail_y607_1Ot.mjs';
import { d as defineAction } from './server_DXh5NdKE.mjs';

const resend = new Resend("re_ZZopqq7Z_LyTuyNA5hC2JtENPyBpS2PQe");
const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      username: z.string(),
      email: z.string().email()
    }),
    handler: async ({ username, email }) => {
      const emailContent = SampleEmail({ username });
      const html = await render(emailContent);
      const text = await render(emailContent, {
        plainText: true
      });
      const { data, error } = await resend.emails.send({
        from: "NickBravo.dev <noreply@mail.nickbravo.dev>",
        to: ["nick@nickbravo.dev", email],
        subject: "NickBravo.dev Contact Form",
        html,
        text
      });
      if (error) {
        throw error;
      }
      return data;
    }
  })
};

const actions = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  server
}, Symbol.toStringTag, { value: 'Module' }));

export { actions as a, server as s };
