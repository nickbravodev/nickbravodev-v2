import { defineAction } from "astro:actions";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { z } from "astro:schema";
import SampleEmail from "../emails/sampleEmail";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      username: z.string(),
      email: z.string().email(),
    }),
    handler: async ({ username, email }) => {
      // create the email
      const emailContent = SampleEmail({ username });
      const html = await render(emailContent);
      const text = await render(emailContent, {
        plainText: true,
      });

      // send an email
      const { data, error } = await resend.emails.send({
        from: "NickBravo.dev <noreply@mail.nickbravo.dev>",
        to: ["nick@nickbravo.dev", email],
        subject: "NickBravo.dev Contact Form",
        html,
        text,
      });

      if (error) {
        throw error;
      }

      return data;
    },
  }),
};
