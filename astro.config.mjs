import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://tomimurat.github.io',
  base: '/',
  trailingSlash: 'always', // Esto ayuda a GitHub Pages a encontrar los archivos
  integrations: [icon()],
});