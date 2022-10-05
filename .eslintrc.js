module.exports = {
    root: true,
    env: {
        noder: true 
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecamFeatures: {
            jsx: true 
        }
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommend',
        'prettier',
        'plugin:prettier/recommended'
    ],
    rules: {
        '@typescript-eslint/no-var-requires':0,
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'space-before-function-paren': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}