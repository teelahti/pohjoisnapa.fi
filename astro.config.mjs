// @ts-check
import { defineConfig } from "astro/config";
import  i18n  from "./src/i18n_config.ts";

// https://astro.build/config
export default defineConfig({
  i18n: i18n,
  site: "https://www.pohjoisnapa.fi",
  // This follows previous site's convention
  trailingSlash: "always",
});
