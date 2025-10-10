import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import htmlBeautifier from "astro-html-beautifier";
import netlify from "@astrojs/netlify";
import vercel from "@astrojs/vercel";

// import opengraphImages, { presets } from "astro-opengraph-images";

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
    sitemap({
      customPages: async () => {
        const [blogPosts, works] = await Promise.all([
          getCollection("blogPosts"),
          getCollection("works"),
        ]);

        // Map each collection to its route pattern
        const blogUrls = blogPosts.map((post) => `/blog/${post.slug}/`);
        const projectUrls = works.map((work) => `/work/${work.slug}/`);

        // Return a single combined array of all URLs
        return [...blogUrls, ...projectUrls];
      },
    }),
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
    react(),
    // opengraphImages({
    //   options: {
    //     fonts: [
    //       {
    //         name: "Roboto",
    //         weight: 400,
    //         style: "normal",
    //         data: fs.readFileSync(
    //           "node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff"
    //         ),
    //       },
    //     ],
    //   },
    //   render: presets.backgroundImage,
    // }),
    turnstile(),
  ],
});
