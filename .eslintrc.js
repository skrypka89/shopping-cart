module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    indent: ['warn', 2, {
      SwitchCase: 1,
      flatTernaryExpressions: true
    }],
    'no-console': 0,
    'no-constant-condition': ['error', {
      checkLoops: false
    }],
    'no-debugger': 'off',
    'no-labels': ['error', {
      allowLoop: true
    }],
    semi: [2, 'always']
  }
};
