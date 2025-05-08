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
      "@typescript-eslint": eslint.plugin
    },
    rules: {
      "@typescript-eslint/typedef": ["error", {
        arrowParameter: true,
        memberVariableDeclaration: true,
        parameter: true,
        propertyDeclaration: true,
        variableDeclarationIgnoreFunction: false,
        variableDeclaration: true
      }],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error"
    }
  }
];