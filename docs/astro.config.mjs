import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://mrdannael.github.io",
  base: "/react-coolicons",
  integrations: [tailwind(), react()]
});