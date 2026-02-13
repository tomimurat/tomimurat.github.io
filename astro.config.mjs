import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://tomimurat.github.io',
  base: '/',
  integrations: [icon()],
  // Esto obliga a Astro a meter todo el CSS junto para que no se pierda
  build: {
    inlineStylesheets: 'always'
  }
});