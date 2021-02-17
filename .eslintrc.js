module.exports = {
    root: true,
    env: {
        'browser': true, // Разрешить запуск кода в браузере
        'commonjs': true, // Разрешить commonJS
        'es6': true, // Включает синтаксис ES6 автоматически
        'node': true // Разрешить запуск кода в node
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard',
    ],
    parserOptions: {
        parser: 'babel-eslint',
        "ecmaFeatures": {
            "jsx": true // Разрешить формат JSX
        },
        'ecmaVersion': 2020, // Указываем версию ECMAScript
        'sourceType': "module", // Включить модульную поддержку кода ECMAScript
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'eol-last': 0,
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
        'comma-dangle': ['error', 'only-multiline'],
        semi: ['error', 'never'],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        indent: [
            'error',
            4,
            { SwitchCase: 1 }
        ],
        'space-in-parens': 0,
        'key-spacing': 0,
        // 'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }]
    }
}
