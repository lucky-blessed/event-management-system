// .eslintrc.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Add your custom rules here
    'no-unused-vars': 'warn',
    'quotes': ['error', 'single'],
    "@typescript-eslint/no-explicit-any": "off",
  },
};  