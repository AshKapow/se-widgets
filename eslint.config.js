export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: true,
        document: true,
        console: true,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
