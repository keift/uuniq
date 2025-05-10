import typescript_eslint from "typescript-eslint";

export default [
  { ignores: ["./dist/**"] },
  ...typescript_eslint.configs.strict,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescript_eslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module"
      }
    },
    plugins: {
      "typescript-eslint": typescript_eslint.plugin
    },
    rules: {
      "arrow-body-style": "error",
      "default-case": "error",
      eqeqeq: "error",
      "no-empty": "error",
      "no-useless-catch": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      "no-duplicate-imports": "error",
      quotes: ["error", "double", { avoidEscape: false }],
      "typescript-eslint/consistent-type-definitions": ["error", "type"],
      "typescript-eslint/typedef": ["error", {
        arrayDestructuring: true,
        arrowParameter: true,
        memberVariableDeclaration: true,
        objectDestructuring: true,
        parameter: true,
        propertyDeclaration: true,
        variableDeclaration: true,
        variableDeclarationIgnoreFunction: true
      }],
      "typescript-eslint/explicit-function-return-type": "error"
    }
  }
];