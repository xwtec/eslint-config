// https://eslint.org/docs/rules/
// ALL RULES [...$$('td > [title=fixable]')].map(d => d.parentNode.nextElementSibling.querySelector('a').getAttribute('href'))

const ruleIDs = [
  // Possible Errors
  'no-extra-boolean-cast',
  'no-extra-parens',
  'no-extra-semi',
  'no-regex-spaces',
  'no-unsafe-negation',

  // Best Practices
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

  // Strict Mode
  // 'strict',

  // Variables
  'no-undef-init',

  // Stylistic Issues ()
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
  'indent',
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
    'one-var': ['warn', 'never'],

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'warn',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'], // space here to support sprockets directives
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!'], // space here to support sprockets directives
          balanced: true,
        },
      },
    ],
  },
};
