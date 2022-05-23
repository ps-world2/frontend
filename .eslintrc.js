module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  ignorePatterns: ["index.js", "reportWebVitals.js"],
  rules: {
    "import/no-unresolved": "off",
    "react/prop-types": 0,
    "no-extra-semi": "error",
    "react/jsx-props-no-spreading": [1, { custom: "ignore" }],
  },
};
