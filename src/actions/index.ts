import { defineAction } from "astro:actions";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { z } from "astro:schema";
import ContactForm from "../emails/contactForm";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      message: z.string(),
    }),
    handler: async ({ firstName, lastName, email, message }) => {
      // create the email
      const emailContent = ContactForm({ firstName, lastName, email, message });
      const html = await render(emailContent);
      const text = await render(emailContent, {
        plainText: true,
      });

      // send an email
      const { data, error } = await resend.emails.send({
        from: "NickBravo.dev <contact@mail.nickbravo.dev>",
        to: ["nick@nickbravo.dev"],
        replyTo: email,
        subject: "NickBravo.dev Contact Form",
        html,
        text,
      });

      await resend.contacts.create({
        email,
        firstName,
        lastName,
        unsubscribed: false,
        audienceId: "928fb621-0e5e-4cb3-bff6-7f9e449131cf",
      });

      if (error) {
        throw error;
      }

      return data;
    },
  }),
};
