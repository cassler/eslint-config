const testOverrides = require('./tests.js');

module.exports = {
  root: true,

  extends: [
    'eslint-config-airbnb-base/rules/best-practices',
    'eslint-config-airbnb-base/rules/errors',
    'eslint-config-airbnb-base/rules/node',
    'eslint-config-airbnb-base/rules/style',
    'eslint-config-airbnb-base/rules/variables',
    'eslint-config-airbnb-base/rules/es6',
  ]
    .map(require.resolve)
    .concat([
      // This disables all stylistic rules from the above.
      'prettier',
      'prettier/react',
    ]),

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },

  plugins: ['prettier', 'import'],

  rules: {
    'arrow-body-style': [2, 'as-needed'],

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
      },
    ],

    'jsx-a11y/href-no-hash': 'off',
    // "jsx-a11y/anchor-is-valid": 2,
    'one-var': 0,
    'one-var-declaration-per-line': 0,
    'prefer-arrow-callback': 0,
    strict: 0,
    'no-use-before-define': [2, { functions: false }],
    'no-underscore-dangle': 0,
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-plusplus': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': 2,
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],

    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        printWidth: 80,
        singleQuote: true,
      },
    ],
    radix: 0,
  },

  overrides: [testOverrides],
};
