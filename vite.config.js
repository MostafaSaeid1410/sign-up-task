import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eslint({ cache: false })],
  esbuild: {
    jsxInject: `import React from 'react';`,
  },
  eslint: {
    configure: {
      rules: {
        "no-unused-vars": "off",
      },
    },
  },
});
