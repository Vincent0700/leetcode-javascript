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
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'prettier/prettier': 2
  }
}
