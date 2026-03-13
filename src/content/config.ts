import { defineCollection, z } from "astro:content";

const works = defineCollection({
    schema: z.object({
        img: z.string(),
        imgInside: z.string(),
        titleProduct: z.string(),
        titleDescription: z.string(),
        titleDescription_en: z.string().optional(),
        description: z.string(),
        description_en: z.string().optional(),
        type: z.string(),
        team: z.string(),
        time: z.string(),
        time_en: z.string(),
        tags: z.array(z.string()),
        link: z.string().url(),
        repo: z.string().url().optional(),
    })
});

export const collections = { works };