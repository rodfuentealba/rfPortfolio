# Rodolfo Fuentealba - Portfolio

Portafolio personal de Rodolfo Fuentealba, Diseñador UX/UI & Frontend Developer con +9 años de experiencia, basado en Valparaíso, Chile.

## Tecnologías

- [Astro 5](https://astro.build/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript
- i18n (Español/Inglés)
- View Transitions API
- [Vercel Analytics](https://vercel.com/analytics)

## Estructura

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── icons/
│   │   └── logos/
│   ├── content/
│   │   └── works/
│   ├── i18n/
│   ├── layouts/
│   ├── pages/
│   │   ├── en/
│   │   └── projects/
│   └── styles/
└── package.json
```

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                | Descripción                                    |
| :--------------------- | :--------------------------------------------- |
| `pnpm install`         | Instala dependencias                           |
| `pnpm dev`             | Inicia servidor local en `localhost:4321`      |
| `pnpm build`           | Construye el sitio para producción en `./dist/`|
| `pnpm preview`         | Previsualiza el build localmente               |
| `pnpm check`           | Verifica tipos con Astro Check                 |
| `pnpm astro ...`       | Ejecuta comandos CLI de Astro                  |

## Idiomas

El sitio soporta español (ES) e inglés (EN):
- `/` - Versión en español
- `/en` - Versión en inglés

## Deploy

Desplegado en [rodfuentealba.com](https://www.rodfuentealba.com)
