import './chunks/_astro_actions_CLdTVrdY.mjs';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import * as z from 'zod';
import { C as ContactForm } from './chunks/contactForm_BtxpGBvx.mjs';
import { d as defineAction } from './chunks/index_DrXFWJvU.mjs';

const resend = new Resend("re_ZZopqq7Z_LyTuyNA5hC2JtENPyBpS2PQe");
const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      message: z.string()
    }),
    handler: async ({ firstName, lastName, email, message }) => {
      const emailContent = ContactForm({ firstName, lastName, email, message });
      const html = await render(emailContent);
      const text = await render(emailContent, {
        plainText: true
      });
      const { data, error } = await resend.emails.send({
        from: "NickBravo.dev <contact@mail.nickbravo.dev>",
        to: ["nick@nickbravo.dev"],
        replyTo: email,
        subject: "NickBravo.dev Contact Form",
        html,
        text
      });
      await resend.contacts.create({
        email,
        firstName,
        lastName,
        unsubscribed: false,
        audienceId: "928fb621-0e5e-4cb3-bff6-7f9e449131cf"
      });
      if (error) {
        throw error;
      }
      return data;
    }
  })
};

export { server };
