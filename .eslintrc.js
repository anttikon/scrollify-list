module.exports = {
  settings: {
    react: {
      version: '16.8.0',
    },
  },
  extends: 'airbnb',
  rules: {
    'implicit-arrow-linebreak': ['off'],
    'arrow-parens': ['off'],
    'react/destructuring-assignment': ['off', { ignoreClassFields: true }],
    semi: [2, 'never'],
    'max-len': ['error', 120],
    'react/jsx-filename-extension': ['off'],
    'react/no-array-index-key': ['off'],
    'import/no-unresolved': ['off'],
    'import/extensions': ['off'],
  },
}
