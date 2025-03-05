import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import htmlBeautifier from "astro-html-beautifier";
import netlify from "@astrojs/netlify";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // adapter: vercel(),
  adapter: netlify(),
  site: "https://nickbravo.dev",
  integrations: [
    icon(),
    sitemap(),
    robotsTxt(),
    mdx(),
    react(),
    htmlBeautifier({
      indent_size: 2,
      end_with_newline: true,
      preserve_newlines: true,
      max_preserve_newlines: 2,
      space_in_paren: true,
      space_in_empty_paren: false,
      wrap_line_length: 0,
    }),
  ],
});
