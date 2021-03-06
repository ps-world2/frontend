module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
  },
  extends: ["eslint:recommended", "airbnb", "plugin:prettier/recommended"],
  ignorePatterns: ["index.js", "reportWebVitals.js"],
  rules: {
    "import/no-unresolved": "off",
    "react/prop-types": 0,
    "no-extra-semi": "error",
    "react/jsx-props-no-spreading": [1, { custom: "ignore" }],
    "react/no-children-prop": [0, { allowFunctions: true }],
    "import/no-extraneous-dependencies": ["off"],
    "import/prefer-default-export": "off",
  },
};
