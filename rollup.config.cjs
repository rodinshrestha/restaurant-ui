const typescript = require("@rollup/plugin-typescript");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const alias = require("@rollup/plugin-alias");
const image = require("@rollup/plugin-image");
const replace = require("@rollup/plugin-replace");
const path = require("path");

const config = [
  {
    input: {
      components: "src/components/index.ts",
      providers: "src/providers/index.ts",
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
      replace({
        preventAssignment: true,
        "use client": "",
      }),
      alias({
        entries: [
          {
            find: "@",
            replacement: path.resolve(__dirname, "src"),
          },
        ],
      }),
      nodeResolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      image(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/__tests__", "**/*.test.tsx"],
        declaration: true,
        declarationDir: "dist/types",
      }),
    ],
    external: ["react", "react-dom", "styled-components", "framer-motion"],
  },
];

module.exports = config;
