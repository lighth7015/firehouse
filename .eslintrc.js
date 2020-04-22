module.exports = {
    env: {
        browser: true
    },
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion:  2018,
        sourceType: "module",
    },
    rules: {
        "react/no-unknown-property": ["error", { ignore: ["class"] }],
    },
    settings: {
        react: {
            pragma: "h",
            version: "detect"
        },
        "indent": [2, "tab"],
    },
    overrides: [
        {
            files: ["*.ts","*.tsx"],
            rules: {
                "@typescript-eslint/explicit-function-return-type": "off",
            }
        }
    ]
};
