import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tu-usuario.github.io',
  base: '/nombre-del-repo', // Solo si el repo NO se llama tu-usuario.github.io
});