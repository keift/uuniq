import eslint from "typescript-eslint";

export default [
  { ignores: ["./dist/**"] },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: eslint.parser,
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
        variableDeclaration: true,
        variableDeclarationIgnoreFunction: false,
        memberVariableDeclaration: true,
        propertyDeclaration: true,
        parameter: true,
        arrowParameter: true
      }],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error"
    }
  }
];