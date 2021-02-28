const testOverrides = require("@cassler/eslint-config-base/tests.js");

module.exports = {
  extends: ["@cassler/eslint-config-base"],

  parser: "@typescript-eslint/parser",

  plugins: ["@typescript-eslint"],

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      typescript: {},
    },
  },

  rules: {
    // ESLint doesn't understand interfaces yet and marks them as undefined.
    "no-undef": "off",

    // These core rules don't work well on TS code, use the ones from the plugin instead.
    "no-unused-vars": "off",
    "no-shadow": "off",
    "no-redeclare": "off",

    // This is noisy while refactoring.
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        // Allow `let { ignored, ...rest} = foo`.
        ignoreRestSiblings: true,
      },
    ],

    // Allow `constructor(private foo: number) {}`
    "no-useless-constructor": "off",
    "no-empty-function": [
      "error",
      {
        allow: ["constructors"],
      },
    ],
  },

  overrides: [
    {
      files: testOverrides.files,
      rules: {
        // Re-apply this override because we've customized the error above.
        "no-empty-function": "off",
      },
    },
  ],
};
