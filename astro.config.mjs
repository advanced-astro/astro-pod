import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import decap from "astro-decap-cms";
import decapConfig from "./decap.config.mjs";
import astropodConfig from "./.astropod/astropod.config.json";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: astropodConfig.link,
  integrations: [
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
          disallow: "/admin",
        },
      ],
    }),
    mdx(),
    sitemap(),
    tailwind(),
    decap({
      config: decapConfig(),
    }),
  ],
});
