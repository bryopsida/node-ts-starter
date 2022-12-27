module.exports = {
  env: {
    browser: false,
    es2022: true,
  },
  extends: ["standard", "prettier"],
  ignorePatterns: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
};
