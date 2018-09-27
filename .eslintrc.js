module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    "prettier/standard",
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    "indent": ["warn", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["warn", "single"],
    "no-return-assign": "off",
    "no-console": "off",
    "no-extra-semi": "warn",
    "no-unused-vars": "warn",
    "no-multiple-empty-lines": "warn",
    "space-before-function-paren": "off",
    "arrow-parens": "off",
    "comma-dangle": ["warn", "always-multiline"],

  }
}
