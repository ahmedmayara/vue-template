/** @type {import("prettier").Config} */
const config = {
  printWidth: 100,
  semi: true,
  vueIndentScriptAndStyle: false,
  bracketSpacing: true,
  bracketSameLine: false,
  singleAttributePerLine: true,
  plugins: [require("prettier-plugin-tailwindcss")],
};
