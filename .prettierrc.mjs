import * as prettierPluginAstro from "prettier-plugin-astro";

/** @type {import("prettier").Config} */
export default {
  plugins: [prettierPluginAstro],

  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
