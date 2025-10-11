import { defineCollection, z } from 'astro:content';

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    period: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  experience: experienceCollection,
};
