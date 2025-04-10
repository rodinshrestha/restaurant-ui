module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "@babel/plugin-transform-template-literals",
      {
        loose: true,
      },
    ],
    [
      "babel-plugin-styled-components",
      {
        ssr: true,
        displayName: false,
        preprocess: false,
        pure: true,
        transpileTemplateLiterals: true,
        minify: true,
        namespace: "restaurant-ui",
        meaninglessFileNames: ["index", "styles"],
        removeImport: true,
      },
    ],
    [
      "module-resolver",
      {
        alias: {
          "@": "./src",
        },
      },
    ],
  ],
};
