module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 9
  },
  rules: {
    'prettier/prettier': 'off',
    'no-unused-vars': 'off'
  }
};
