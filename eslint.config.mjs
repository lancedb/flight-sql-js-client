// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import tsdoclint from "eslint-plugin-tsdoc";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    plugins: { tsdoc: tsdoclint },
  },
  {
    ignores: ["src/generated/**", "**/jest.config.js", "dist/**"],
  },
);
