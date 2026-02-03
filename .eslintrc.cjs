module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
  },

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  settings: {
    react: {
      version: "18.2",
    },
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],

  plugins: ["react-refresh"],

  rules: {
    // ❌ PropTypes kikapcsolva (TS vagy sima JS esetén is OK)
    "react/prop-types": "off",

    // ⚠️ Vite + Fast Refresh biztonság
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // 🧹 kis életminőség-javítások
    "react/jsx-key": "warn",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react/self-closing-comp": "warn",
  },

  ignorePatterns: ["dist"],
};
