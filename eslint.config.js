import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
<<<<<<< HEAD
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
=======
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
>>>>>>> 2efece7c23f8d514e1f72e7781113311f2f48639
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
