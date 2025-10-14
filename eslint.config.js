import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.strict,
      tseslint.configs.strictTypeChecked,
      react.configs.flat.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React 17+ 자동 JSX 변환 지원
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      
      // TypeScript 엄격성 강화 (조정된)
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/strict-boolean-expressions': 'warn',
      '@typescript-eslint/no-confusing-void-expression': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      
      // React 최적화
      'react-hooks/exhaustive-deps': 'error',
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-key': 'error',
      'react/prop-types': 'off', // TypeScript로 대체
      
      // 일반 코드 품질
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
])
