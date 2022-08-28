import { IS_BROWSER } from "$fresh/runtime.ts";
import { apply, Configuration, setup, strict } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: strict,
  preflight: {
    h1:
      apply`text(uppercase 6xl md:7xl) font(extrabold serif) my(2 md:4) md:leading-none`,
    h2: apply`text(capitalize 5xl md:6xl) font(extrabold) my(2 md:4)`,
    h3: apply`text(uppercase 4xl md:5xl) font(extrabold mono) my(1 md:2)`,
  },
};
if (IS_BROWSER) setup(config);
