const tsPlugin = require('@typescript-eslint/eslint-plugin')
const globals = require('globals')
const tseslint = require('typescript-eslint')
module.exports = tseslint.config(
  {
    files: ['**/*.js', '**/*.ts', ''],
    extends: [tseslint.configs.base],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      // 自定义规则
    },
  },
  {
    ignores: [
      '**/dist/',
      '**/eg-test/',
      '**/__tests__/',
      '**/java-swagger-example/',
      '**/*.config.js',
      'scripts/*.js',
    ],
  },
)
