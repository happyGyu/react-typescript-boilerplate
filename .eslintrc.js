module.exports = {
  parser: '@typescript-eslint/parser', 
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb/typescript'
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    "project": "./tsconfig.json"
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: false },
    ],
  },
  
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', '@types'],
      },
      typescript: {}, 
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};