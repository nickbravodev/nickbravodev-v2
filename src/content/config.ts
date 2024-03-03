import { z, defineCollection } from "astro:content";
// import { format } from "date-fns";

// const authorsCollection = defineCollection({
//   schema: ({ image }) =>
//     z.object({
//       name: z.string(),
//       image: image(),
//     }),
// });

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      //       categories: z.array(z.string()),
      date: z.string(),
      //       date: z
      //         .string()
      //         .transform((str) => format(new Date(str), "MMMM d, yyyy")),
      //       featured: z.boolean().default(false),
      image: image(),
      title: z.string(),
    }),
});

const works = defineCollection({
  schema: ({ image }) =>
    z.object({
      client: z.string(),
      title: z.string(),
      categories: z.array(z.string()),
      featured: z.boolean().default(false),
      image: image(),
      url: z.string().url().optional(),
      date: z.date(),
      draft: z.boolean().optional(),
      tech: z.string().optional(),
      blurb: z.string().optional(),
    }),
});

const caseStudiesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      client: z.string(),
      title: z.string(),
      url: z.string().url().optional(),
      date: z.string(),
      image: image(),
      categories: z.array(z.string()),
      featured: z.boolean().default(false),
    }),
});

export const collections = {
  //   authors: authorsCollection,
  works,
  caseStudies: caseStudiesCollection,
  posts: postsCollection,
};
