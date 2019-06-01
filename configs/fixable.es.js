// https://eslint.org/docs/rules/
// ALL RULES [...$$('td > [title=fixable]')].map(d => d.parentNode.nextElementSibling.querySelector('a').getAttribute('href'))

const ruleIDs = [
  // Stylistic Issues
  'implicit-arrow-linebreak',
  'jsx-quotes',
  'prefer-object-spread',

  // ECMAScript 6
  'arrow-body-style',
  'arrow-parens',
  'arrow-spacing',
  'generator-star-spacing',
  'no-confusing-arrow',
  'no-useless-computed-key',
  'no-useless-rename',
  'no-var',
  'object-shorthand',
  // 'prefer-arrow-callback',
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

    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
  },
};
