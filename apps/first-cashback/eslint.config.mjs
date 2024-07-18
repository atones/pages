// @ts-check
import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import react from 'eslint-plugin-react/configs/recommended.js'
import g from 'globals'

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  react,
  {
    languageOptions: {
      globals: { ...g.node, ...g.browser }
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  }
)
