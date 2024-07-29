import globals from "globals"
import path from "path"
import js from "@eslint/js"

export default [
    js.configs.recommended,
    {
    languageOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        globals: {
            ...globals.browser,
            ...globals.jest,
            ...globals.node,
            ...globals.qunit,
            ...globals.supabase
            },
        }
    },
    {
        rules: {
            "no-console": "off",
            "no-multi-spaces": "error",
            "no-unused-vars": "warn",
            "no-undef": "error",
            "no-var": "error",
            "prefer-const": "error",
            "new-cap": ["error", {
                capIsNew: false
            }],
            "no-redeclare": "error",
            "no-use-before-define": "error",
            "space-in-parens": ["error"],
            "space-infix-ops": "error",
            "object-curly-spacing": ["error", "always"],
            "comma-spacing": "error",
            "space-before-function-paren": ["error", {
                anonymous: "never",
                named: "never",
                asyncArrow: "always",
            }],
            "keyword-spacing": ["error", {
                before: true,
                after: true,
            }],
            "array-bracket-spacing": "error",
            eqeqeq: ["error", "always"],
            indent: ["error", 2, {
                SwitchCase: 1,
                ignoreComments: true,
            }],
            quotes: ["error", "single", {
                avoidEscape: true,
                allowTemplateLiterals: true,
            }],

            semi: ["error", "always"],
                
            }
        },
        {
            ignores: ["eslint.config.mjs"]
        }
    ];
