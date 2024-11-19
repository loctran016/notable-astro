import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        // heroImage: z.string().optional(),
        heroImage: z.string().optional().default('/blog-placeholder-3.jpg'),
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
