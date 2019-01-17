module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'airbnb',
    // 'plugin:jest/recommended',
    // 'jest-enzyme',
    'eslint:recommended',
    // 'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
    // 'react-app'
  ],
  plugins: [
    // 'babel',
    'import',
    'jsx-a11y',
    'react',
    'prettier',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'linebreak-style': 'off', // Don't play nicely with Windows.
    'arrow-parens': 'off', // Incompatible with prettier
    'object-curly-newline': 'off', // Incompatible with prettier
    'no-mixed-operators': 'off', // Incompatible with prettier
    'arrow-body-style': 'off', // Not our taste?
    'function-paren-newline': 'off', // Incompatible with prettier
    'no-plusplus': 'off',
    'space-before-function-paren': 0, // Incompatible with prettier
    'for-direction': 'off', // eslint 5.0.0
    'getter-return': 'off', // eslint 5.0.0
    'max-len': ['error', 100, 2, { ignoreUrls: true }], // airbnb is allowing some edge cases
    'no-console': 'off', // airbnb is using warn
    'no-alert': 'error', // airbnb is using warn
    'no-param-reassign': 'off', // Not our taste?
    'no-unused-vars': 'warn',
    radix: 'off', // parseInt, parseFloat radix turned off. Not my taste.

    'react/require-default-props': 'off', // airbnb use error
    'react/forbid-prop-types': 'off', // airbnb use error
    'react/jsx-filename-extension': ['off', { extensions: ['.js'] }], // airbnb is using .jsx
    'react/destructuring-assignment': 'off',
    'react/no-find-dom-node': 'off', // I don't know
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off', // Is still buggy
    'react/jsx-one-expression-per-line': 'off',
    // 'jsx-a11y/anchor-is-valid': [
    //   'error',
    //   { components: ['Link'], specialLink: ['to'] },
    // ],
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/label-has-for': 'off',
    // 'jsx-a11y/label-has-for': [
    //   2,
    //   {
    //     components: ['Label'],
    //     required: {
    //       every: ['nesting', 'id'],
    //     },
    //     allowChildren: false,
    //   },
    // ], // for nested label htmlFor error
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],
    'prettier/prettier': ['warn'],
  },
};
