module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb", "airbnb/hooks", "plugin:prettier/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{ts,cjs}", "bin/www.ts"],
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["prettier"],
  rules: {
    semi: "warn",
    "no-unused-vars": "warn",
    "no-param-reassign": 0,
    "import/no-unresolved": "off",
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "array-callback-return": "off",
    "consistent-return": "off",
    "no-continue": "off",
    "no-underscore-dangle": "off",
    "no-await-in-loop": "off",
    "no-shadow": "off",
    "import/no-extraneous-dependencies": "off",
    "no-restricted-globals": "off",
    "no-use-before-define": "off",
  },
};
