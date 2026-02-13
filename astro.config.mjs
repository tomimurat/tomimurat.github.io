import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tomimurat.github.io',
  base: '/', // Solo si el repo NO se llama tu-usuario.github.io
  integrations: [
    icon(), // Debe estar inicializado como una función
  ],
});
