const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "eslint-config-turbo",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
  ],
  plugins: ["@typescript-eslint", "import", "only-warn", "react"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
    react: { version: "detect" },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ["*.js?(x)", "*.ts?(x)"] },
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { fixStyle: "inline-type-imports", prefer: "type-imports" },
    ],
    "@typescript-eslint/consistent-type-exports": [
      "error",
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    "import/no-cycle": "error",
    "import/exports-last": "error",
    "import/first": "error",
    "import/group-exports": "error",
    "import/order": [
      "error",
      {
        alphabetize: { caseInsensitive: true, order: "asc" },
        groups: ["builtin", "external", "object"],
        "newlines-between": "always",
      },
    ],
    "react/jsx-sort-props": "error",
    "react/function-component-definition": [
      "error",
      { namedComponents: "function-declaration" },
    ],
    "react/jsx-no-leaked-render": [
      "error",
      { validStrategies: ["coerce", "ternary"] },
    ],
    "react/jsx-fragments": "error",
    "react/hook-use-state": "error",
    "react/jsx-child-element-spacing": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      { children: "never", propElementValues: "always", props: "never" },
    ],
    "react/jsx-boolean-value": "error",
    "react/jsx-handler-names": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-sort-props": "error",
    "react/no-unused-prop-types": "error",
    "sort-imports": [
      "error",
      {
        allowSeparatedGroups: false,
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "sort-keys": ["error", "asc", { caseSensitive: false, natural: true }],
  },
};
