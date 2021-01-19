module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "airbnb-base",
        "plugin:prettier/recommended"
    ],
    "env": {
        "node": false,
        "browser": true,
        "es2021": true
    },
    "rules": {
        'prettier/prettier': ['error', {
            semi: false,
            singleQuote: true,
            tabWidth: 2,
            printWidth: 100,
        }],
        'class-methods-use-this': 0,
        'import/no-cycle': 0,
        'import/no-duplicates': 0,
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        '@typescript-eslint/semi': 0,
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/indent': 0,
    }
};
