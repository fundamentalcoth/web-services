import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog — knowledge articles on local online business (Astro 5 content layer).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** Optional YouTube/embed URL — rendered above the article. */
    videoUrl: z.string().optional(),
    /** If this article also exists elsewhere, point canonical there. */
    canonicalUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
