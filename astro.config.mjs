import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import htmlBeautifier from "astro-html-beautifier";
import netlify from "@astrojs/netlify";
import vercel from "@astrojs/vercel";

import turnstile from "astro-turnstile";

// https://astro.build/config
export default defineConfig({
  output: "server",
  // adapter: netlify(),
  adapter: vercel({
    isr: true,
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
    maxDuration: 8,
  }),
  site: "https://nickbravo.dev",
  integrations: [
    icon(),
    sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: "Googlebot",
          allow: "/",
          disallow: ["/search"],
          crawlDelay: 2,
        },
        {
          userAgent: "OtherBot",
          allow: ["/allow-for-all-bots", "/allow-only-for-other-bot"],
          disallow: ["/admin", "/login"],
          crawlDelay: 2,
        },
        {
          userAgent: "*",
          allow: "/",
          disallow: "/search",
          crawlDelay: 10,
          cleanParam: "ref /articles/",
        },
      ],
    }),
    mdx(),
    htmlBeautifier({
      indent_size: 2,
      end_with_newline: true,
      preserve_newlines: true,
      max_preserve_newlines: 2,
      space_in_paren: true,
      space_in_empty_paren: false,
      wrap_line_length: 0,
    }),
    react(),
    turnstile(),
  ],
});
