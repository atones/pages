// @ts-check
import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import react from 'eslint-plugin-react/configs/recommended.js'

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  react,
  {
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  }
)
