module.exports = {
  extends: ["next/core-web-vitals", "standard-with-typescript", "prettier"],
  plugins: ["unused-imports"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "src/**",
            group: "internal",
          },
        ],
      },
    ],
  },
};
