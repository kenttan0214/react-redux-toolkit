module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true, // Defines things like process.env when generating through node
  },
  extends: [
    'eslint:recommended',
    'prettier', // Uses eslint-config-prettier to disable ESLint rules from eslint that would conflict with prettier
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:import/warnings',
    'plugin:tailwindcss/recommended',
    'plugin:testing-library/react',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: '@babel/eslint-parser', // Uses babel-eslint transforms.
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    requireConfigFile: false, // Slient the Parsing error: No Babel config file detected
  },
  plugins: [
    'import', // eslint-plugin-import plugin. https://www.npmjs.com/package/eslint-plugin-import
    'tailwindcss',
  ],
  root: true, // For configuration cascading.
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'index', 'sibling', 'parent', 'internal'],
        'newlines-between': 'never',
      },
    ],
    eqeqeq: ['error'],
    'no-undefined': ['error'],
    'no-use-before-define': ['error', { functions: true, classes: true }],
    'comma-dangle': ['error', 'always-multiline'], // Trailing commas
  },
  settings: {
    react: {
      version: 'detect', // Detect react version
    },
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      // You can add Typescript specific rules here.
      // If you are adding the typescript variant of a rule which is there in the javascript
      // ruleset, disable the JS one.
      rules: {
        '@typescript-eslint/no-array-constructor': 'warn',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'none',
          },
        ],
      },
    },
  ],
};
