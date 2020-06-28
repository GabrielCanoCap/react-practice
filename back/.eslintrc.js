module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
    },
    extends: [
        "airbnb-base",
    ],
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        indent: [2, 4],
        quotes: [2, "double"],
    },
};
