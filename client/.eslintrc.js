const baseConfig = require('@em-tipp/tools/.eslintrc')

module.exports = {
  ...baseConfig,

  extends: baseConfig.extends.concat([
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ]),

  plugins: baseConfig.plugins.concat(['react', 'react-hooks']),

  settings: {
    react: {
      version: 'detect'
    }
  },

  rules: {
    ...baseConfig.rules,

    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },

  globals: {
    process: 'readonly',
    __DEV__: 'readonly'
  }
}
