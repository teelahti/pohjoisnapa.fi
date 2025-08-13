// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "fi",
    locales: ["fi", "en"],
  },
  site: "https://www.pohjoisnapa.fi",
  // This follows previous site's convention
  trailingSlash: "always",
  // This is an attept to fix the fsevents build bugs
  // vite: {
  //   build: {
  //     rollupOptions: {
  //       external: "fsevents",
  //     },
  //   },
  // },
});
