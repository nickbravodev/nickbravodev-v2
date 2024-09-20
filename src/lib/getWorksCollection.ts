import { getCollection } from "astro:content";
// import { SITE_URL } from "../consts";

const SITE_URL = "https://nickbravo.dev";

const collection = "works";

export default async () => {
  const posts = await getCollection(collection);

  return posts.map((post) => ({
    ...post,
    data: {
      ...post.data,
      ogImage: `${SITE_URL}/works/${post.data.image}`,
    },
  }));
};
