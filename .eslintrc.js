module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'globals': {
    'jQuery': true
  },
  'extends': 'eslint:recommended',
  "ecmaFeatures": {
    "modules": true
  },
  'parserOptions': {
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'no-undef': 'error',
    'no-console': 0,
    'linebreak-style': [
      'error',
      'unix'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
