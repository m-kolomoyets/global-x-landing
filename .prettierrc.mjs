/** @type {import("prettier").Config} */
export default {
    printWidth: 120,
    proseWrap: 'never',
    arrowParens: 'always',
    endOfLine: 'lf',
    trailingComma: 'es5',
    tabWidth: 4,
    singleQuote: true,
    overrides: [
        {
            files: ['**/*.css', '**/*.html', '**/*.svg'],
            options: {
                singleQuote: false,
            },
        },
    ],
};
