module.exports = {
  "env": {
      "browser": true,
      "es2020": true,
      "node": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 11,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "@typescript-eslint"
  ],
  "rules": {
  },
  "overrides": [
      {
        "files": ["*.js"],
        "rules": {
          "@typescript-eslint/no-var-requires": "off",
        },
      },
  ],
  "ignorePatterns": [ "node_modules/*", "build/*"],
  "settings": {
      "react": {
          "version": "detect",
      },
  },
  "@typescript-eslint/ban-ts-comment": "off" // d.ts
};