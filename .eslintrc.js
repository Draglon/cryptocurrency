module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    'import/prefer-default-export': 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "object-curly-newline": ["error", { "minProperties": 5, "consistent": true }],
    "jsx-a11y/label-has-associated-control": [ 2, { "depth": 2 }],
    "react/destructuring-assignment": ["error", "always", { "ignoreClassFields": true }],
    "no-unused-expressions": ["error", {"allowTernary": true}],
    'react/static-property-placement': 0,
    'react/jsx-props-no-spreading': 0,
    "react/react-in-jsx-scope": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/interactive-supports-focus": 0,
    "jsx-a11y/label-has-for": 0,
    "react/sort-comp": 0
  },
  'globals': {
    "fetch": false
  }
}
