import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup, strict } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: strict,
  theme: {
    fontFamily: {
      sans: ["Oswald", "sans-serif"],
      serif: ["Crete Round", "serif"],
      mono: ["Consolas"],
    },
  },
};
if (IS_BROWSER) setup(config);
