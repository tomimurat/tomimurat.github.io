import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Asegúrate de que este sea tu sitio exacto
  site: 'https://tomimurat.github.io',

  base: '/',
  integrations: [icon()],

  build: {
    // ESTA ES LA CLAVE: Fuerza a Astro a no separar el CSS en archivos aparte.
    // Lo inyectará directamente en el HTML para que no haya pérdida.
    inlineStylesheets: 'always',
  },

  // Evita que Astro genere rutas que confundan a GitHub Pages
  compressHTML: true,

  outDir: 'dist',

  vite: {
    plugins: [tailwindcss()],
  },
});