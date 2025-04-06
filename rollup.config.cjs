const typescript = require("@rollup/plugin-typescript");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const alias = require("@rollup/plugin-alias");
const image = require("@rollup/plugin-image");

const config = [
  {
    input: {
      index: "src/index.ts",
      components: "src/components/index.ts",
    },
    output: [
      {
        dir: "dist",
        format: "cjs",
        entryFileNames: "[name]/index.js",
        sourcemap: true,
      },
      {
        dir: "dist",
        format: "esm",
        entryFileNames: "[name]/index.esm.js",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      alias({
        entries: [{ find: "@", replacement: "./src" }],
      }),
      nodeResolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      image(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/__tests__", "**/*.test.tsx"],
      }),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
];

module.exports = config;
