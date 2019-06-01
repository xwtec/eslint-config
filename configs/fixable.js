// https://eslint.org/docs/rules/
// ALL RULES [...$$('td > [title=fixable]')].map(d => d.parentNode.nextElementSibling.querySelector('a').getAttribute('href'))

const ruleIDs = [
  'no-extra-boolean-cast',
  'no-extra-parens',
  'no-extra-semi',
  'no-regex-spaces',
  'no-unsafe-negation',
  'curly',
  'dot-location',
  'dot-notation',
  'eqeqeq',
  'no-div-regex',
  'no-else-return',
  'no-extra-bind',
  'no-extra-label',
  'no-floating-decimal',
  // 'no-implicit-coercion',
  'no-multi-spaces',
  'no-unused-labels',
  'no-useless-return',
  'wrap-iife',
  'yoda',
  // 'strict',
  'no-undef-init',
  'array-bracket-newline',
  'array-bracket-spacing',
  'array-element-newline',
  'block-spacing',
  'brace-style',
  // 'capitalized-comments',
  'comma-dangle',
  'comma-spacing',
  'comma-style',
  'computed-property-spacing',
  'eol-last',
  'func-call-spacing',
  'function-paren-newline',
  'implicit-arrow-linebreak',
  'indent',
  'jsx-quotes',
  'key-spacing',
  'keyword-spacing',
  'linebreak-style',
  'lines-around-comment',
  // 'lines-between-class-members',
  // 'multiline-comment-style',
  'new-parens',
  'newline-per-chained-call',
  // 'no-lonely-if',
  'no-multiple-empty-lines',
  'no-trailing-spaces',
  'no-unneeded-ternary',
  'no-whitespace-before-property',
  'nonblock-statement-body-position',
  'object-curly-newline',
  'object-curly-spacing',
  'object-property-newline',
  'one-var',
  'one-var-declaration-per-line',
  'operator-assignment',
  'operator-linebreak',
  'padded-blocks',
  // 'padding-line-between-statements',
  'prefer-object-spread',
  'quote-props',
  'quotes',
  'semi',
  'semi-spacing',
  'semi-style',
  // 'sort-vars',
  'space-before-blocks',
  'space-before-function-paren',
  'space-in-parens',
  'space-infix-ops',
  'space-unary-ops',
  'spaced-comment',
  'switch-colon-spacing',
  'template-tag-spacing',
  'unicode-bom',
  'wrap-regex',
  'arrow-body-style',
  'arrow-parens',
  'arrow-spacing',
  'generator-star-spacing',
  'no-confusing-arrow',
  'no-useless-computed-key',
  'no-useless-rename',
  'no-var',
  'object-shorthand',
  'prefer-arrow-callback',
  'prefer-const',
  'prefer-destructuring',
  'prefer-numeric-literals',
  'prefer-template',
  'rest-spread-spacing',
  // 'sort-imports',
  'template-curly-spacing',
  'yield-star-spacing',
];

const rules = Object.fromEntries
  ? Object.fromEntries(ruleIDs.map(rule => [rule, 'warn']))
  : ruleIDs.reduce((rules, id) => {
      rules[id] = 'warn';
      return rules;
    }, {});

module.exports = {
  rules: {
    ...rules,
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
  },

  'on-var': ['warn', 'never'],
};
