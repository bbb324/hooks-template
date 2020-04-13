module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            "jsx": true
        }
    },
    env: {
        browser: true,
    },
    rules: {
        // 取1是忽略SwitchCase
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "no-console": "error",
        "arrow-parens": 0,
    },
    parser: "babel-eslint",
    plugins: [
        "react"
    ],
};
