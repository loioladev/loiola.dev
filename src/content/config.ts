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

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    featured: z.boolean().default(false),
    tech: z.array(z.string()),
    github: z.string().optional(),
    live: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = {
  experience: experienceCollection,
  projects: projectsCollection,
};
