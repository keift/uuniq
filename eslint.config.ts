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
      "@typescript-eslint": typescript_eslint.plugin
    },
    rules: {
      "@typescript-eslint/typedef": ["error", {
        arrayDestructuring: true,
        arrowParameter: true,
        memberVariableDeclaration: true,
        objectDestructuring: true,
        parameter: true,
        propertyDeclaration: true,
        variableDeclaration: true,
        variableDeclarationIgnoreFunction: false
      }],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error"
    }
  }
];
