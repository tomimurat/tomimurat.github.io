import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  // Asegúrate de que tu usuario sea correcto
  site: 'https://tomimurat.github.io',
  base: '/', 
  integrations: [
    icon(),
  ],
  // Esto ayuda a que Astro maneje mejor los archivos estáticos en GitHub
  build: {
    assets: '_assets',
  }
});