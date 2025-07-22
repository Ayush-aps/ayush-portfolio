module.exports = {
  extends: ['standard', 'next/core-web-vitals'],
  rules: {
    // Customize rules as needed
    'no-unused-vars': 'warn',
    'prefer-const': 'error',
    'space-before-function-paren': 'off'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  }
}
