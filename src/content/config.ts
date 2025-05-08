import { defineCollection, z } from "astro:content";

// Definir el esquema para los datos de cada trabajo
const works = defineCollection({
    schema: z.object({
        img: z.string(),
        imgInside: z.string(),
        titleProduct: z.string(),
        titleDescription: z.string(),
        description: z.string(),
        type: z.string(),
        team: z.string(),
        time: z.string(),
        tags: z.array(z.string()),
        link: z.string().url()
    })
});

// Exportar las colecciones
export const collections = { works };
