import { defineCollection, z } from "astro:content";

// Definir el esquema para los datos de cada trabajo
const works = defineCollection({
    schema: z.object({
        img: z.string(),
        title: z.string(),
        titleProduct: z.string(),
        titleDescription: z.string(),
        type: z.string(),
        team: z.string(),
        time: z.string(),
        tags: z.array(z.string()),
        description: z.string().optional(), // Agregamos la descripción como campo opcional
    })
});

// Exportar las colecciones
export const collections = { works };
