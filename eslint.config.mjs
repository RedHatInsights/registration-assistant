import js from "@eslint/js";

export default [
    // Global ignores (equivalent to .eslintignore)
    {
        ignores: ["node_modules/*", "static/*", "dist/*"]
    },
    
    // Base JavaScript configuration
    js.configs.recommended,
    
    // Configuration for Node.js config files (CommonJS)
    {
        files: ["config/cypress.webpack.config.js", "config/test.webpack.config.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "commonjs", // These files use CommonJS
            globals: {
                __dirname: "readonly",
                module: "readonly",
                require: "readonly",
                process: "readonly",
                console: "readonly",
                Buffer: "readonly"
            },
        },
        rules: {
            "no-unused-vars": ["error", { "ignoreRestSiblings": true }],
            "no-console": "off", // Allow console in config files
            "prefer-const": "error",
            "no-var": "error"
        },
    },
    
    // Configuration for ES Module config files  
    {
        files: ["config/overrideChrome.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module", // This file uses ES modules
            globals: {
                console: "readonly",
                process: "readonly"
            },
        },
        rules: {
            "no-unused-vars": ["error", { "ignoreRestSiblings": true }],
            "no-console": "off",
            "prefer-const": "error",
            "no-var": "error"
        },
    },
    
    // Configuration for test setup files
    {
        files: ["**/setupTests.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module", // setupTests.js uses ES modules
            globals: {
                global: "readonly",
                jest: "readonly",
                console: "readonly",
                // React import is used
                React: "readonly"
            },
        },
        rules: {
            "no-unused-vars": ["error", { 
                "ignoreRestSiblings": true,
                "varsIgnorePattern": "^React$|^_"
            }],
            "no-console": "off"
        },
    },
    
    // Configuration for Jest test files
    {
        files: ["**/*.test.js", "**/__tests__/**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                // Jest globals
                jest: "readonly",
                describe: "readonly",
                it: "readonly",
                test: "readonly",
                expect: "readonly",
                beforeEach: "readonly",
                afterEach: "readonly",
                beforeAll: "readonly",
                afterAll: "readonly",
                // React Testing Library globals
                render: "readonly",
                screen: "readonly",
                fireEvent: "readonly",
                waitFor: "readonly",
                // Other common test globals
                shallow: "readonly",
                mount: "readonly",
                navigator: "readonly",
                require: "readonly",
                // Browser globals for React components
                window: "readonly",
                document: "readonly",
                console: "readonly"
            },
        },
        rules: {
            "no-unused-vars": ["warn", { 
                "ignoreRestSiblings": true,
                "varsIgnorePattern": "^React$|^_|Router|render|screen|fireEvent|waitFor|shallow|mount|.*Step$|.*Content$|.*Modal$|.*Block$|.*Footer$" // Ignore React and testing imports and component names
            }],
            "no-console": "off", // Allow console in tests
            "prefer-const": "error",
            "no-var": "error"
        },
    },
    
    // Configuration for Cypress test files
    {
        files: ["**/*.cy.js", "cypress/**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                // Cypress globals
                cy: "readonly",
                Cypress: "readonly",
                describe: "readonly",
                it: "readonly",
                beforeEach: "readonly",
                afterEach: "readonly",
                before: "readonly",
                after: "readonly",
                expect: "readonly",
                // Browser globals
                window: "readonly",
                document: "readonly",
                console: "readonly"
            },
        },
        rules: {
            "no-unused-vars": ["error", { "ignoreRestSiblings": true }],
            "no-console": "off", // Allow console in Cypress tests
            "prefer-const": "error",
            "no-var": "error",
            // Disable the rule that's causing issues in Cypress files
            "rulesdir/disallow-fec-relative-imports": "off"
        },
    },
    
    // Configuration for React source files
    {
        files: ["src/**/*.js"],
        ignores: ["**/*.test.js", "**/*.cy.js", "**/__tests__/**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                // Custom application globals
                insights: "readonly",
                // Browser globals
                window: "readonly",
                document: "readonly",
                console: "readonly",
                navigator: "readonly",
                process: "readonly"
            },
        },
        rules: {
            // Disable specific rules that might be causing issues
            "rulesdir/forbid-pf-relative-imports": "off",
            "testing-library/no-wait-for-side-effects": "off",
            "rulesdir/disallow-fec-relative-imports": "off",
            // Standard React/JavaScript rules with relaxed unused vars for React imports
            "no-unused-vars": ["off"], // Turn off for React components as many imports are used in JSX
            "no-console": "warn",
            "prefer-const": "error",
            "no-var": "error"
        },
    }
];