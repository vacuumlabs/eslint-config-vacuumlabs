'use strict';

module.exports = {
  settings: {
    'import/ignore': ['node_modules', 'assets', '\\.(scss|less|css|json)$'],
  },
  rules: {
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-console': 1,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 1,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-template-curly-in-string': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 1,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'consistent-return': 2,
    'curly': [2, 'multi-line'],
    'default-case': 2,
    'dot-location': [2, 'property'],
    'eqeqeq': [2, 'allow-null'],
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-empty-function': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-global-assign': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-lone-blocks': 2,
    'no-multi-str': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': [2, {'allowShortCircuit': true, 'allowTernary': true}],
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-void': 2,
    'no-with': 2,
    'radix': 2,
    'wrap-iife': [2, 'inside'],
    'strict': [2, 'never'],
    'no-delete-var': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unused-vars': [1, {'vars': 'all', 'args': 'none'}],
    'no-use-before-define': [2, 'nofunc'],
    'handle-callback-err': [2, '^(err|error)$'],
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'no-path-concat': 2,
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'never'],
    'comma-dangle': [1, 'always-multiline'],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [2, 'self'],
    'eol-last': 2,
    'indent': 0,
    'jsx-quotes': [2, 'prefer-double'],
    'keyword-spacing': [1, {'before': true, 'after': true, 'overrides': {}}],
    'linebreak-style': [2, 'unix'],
    'max-len': [1, {'code': 100, 'tabWidth': 2, 'ignoreStrings': true, 'ignoreTemplateLiterals': true, 'ignoreRegExpLiterals': true, 'ignoreUrls': true}],
    'new-cap': [2, {'capIsNew': false, 'newIsCap': true}],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-bitwise': 1,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': 1,
    'no-new-object': 2,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': [2, {'defaultAssignment': false}],
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [2, 'never'],
    'quote-props': [2, 'consistent-as-needed'],
    'quotes': [2, 'single', 'avoid-escape'],
    'semi': [2, 'never'],
    'semi-spacing': [2, {'before': false, 'after': true}],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, {'anonymous': 'ignore', 'named': 'never', 'asyncArrow': 'always'}],
    'space-unary-ops': [2, {'words': true, 'nonwords': false}],
    'unicode-bom': 2,
    'arrow-parens': [2, 'always'],
    'arrow-spacing': 2,
    'constructor-super': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': [2, {"allowUnboundThis": false}],
    'prefer-const': 1,
    'prefer-numeric-literals': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-await': 1,
    'require-yield': 1,
    'rest-spread-spacing': 2,
    'template-curly-spacing': 2,
    'import/export': 2,
    'import/imports-first': 2,
    'import/named': 2,
    'import/namespace': [2, {allowComputed: true}],
    'import/no-unresolved': [2, {'commonjs': true, 'amd': true, 'ignore': ['\\?.*$']}],
  },
  plugins: ['import'],
  globals: {
    'Promise': true,
    'Map': true,
    'Set': true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      'jsx': true
    }
  },
}
