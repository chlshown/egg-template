module.exports = {
  env: {
    node: true,
    es6: true
  },
  'extends': [
    'eslint-config-standard'
  ],
  rules: {
    'no-console': 'off',
    'eol-last': 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    // 'space-in-parens': 'off',
    "indent": 'off',
    'prefer-promise-reject-errors': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  }
}