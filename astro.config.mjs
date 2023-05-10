import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://kjugk.github.io",
  base: "my-astro-blog",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
