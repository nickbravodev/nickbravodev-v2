import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import htmlBeautifier from "astro-html-beautifier";
import netlify from "@astrojs/netlify";
import vercel from "@astrojs/vercel";

import opengraphImages, { presets } from "astro-opengraph-images";

// https://astro.build/config
export default defineConfig({
  output: "server",
  // adapter: netlify(),
  adapter: vercel(),
  // server: "./server.js",
  site: "https://nickbravo.dev",

  // redirects: {
  //   "niktheuntamed.com": {
  //     status: 301,
  //     destination: "https://nickbravo.dev/work/$1",
  //   },
  // },
  integrations: [
    icon(),
    sitemap(),
    robotsTxt(),
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
    opengraphImages({
      options: {
        fonts: [
          {
            name: "Roboto",
            weight: 400,
            style: "normal",
            data: fs.readFileSync("node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff"),
          },
        ],
      },
      render: presets.backgroundImage,
    }),
  ],

  adapter: vercel(),
});
