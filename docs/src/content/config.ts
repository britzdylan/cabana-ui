// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const blogCollection = defineCollection({
  /* ... */
  schema: z.object({
    draft: z.boolean().default(true).optional(),
    title: z.string().optional(),
    summary: z.string().optional(),
    image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
    publishDate: z.date().optional(),
    author: z.string().optional(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
};
