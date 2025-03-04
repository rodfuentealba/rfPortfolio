import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{astro,html,js,ts,jsx,tsx}',  // Asegúrate de que Tailwind esté buscando en todos los archivos relevantes
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),  // Añadir el plugin de tipografía
    ],
  }
  