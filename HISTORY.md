2.1.0 - 2.1.1 / 2020-11-27
===================

* Disable no-undef rule for TypeScript

2.0.0 - 2.0.5 / 2020-10-02
===================

  * Reviewed rules:
    * no-await-in-loop
    * !! no-console
    * no-constant-condition
    * ++ no-dupe-else-if
    * no-empty
    * no-extra-parens
    * ++ no-import-assign
    * ++ no-loss-of-precision
    * no-misleading-character-class
    * ++ no-promise-executor-return
    * no-prototype-builtins
    * ++ no-setter-return
    * no-unreachable
    * ++ no-unreachable-loop
    * ++ no-useless-backreference
    * accessor-pairs
    * !! complexity
    * curly
    * ++ default-case-last
    * ++ default-param-last
    * dot-location
    * dot-notation
    * eqeqeq
    * ++ grouped-accessor-pairs
    * ++ no-constructor-return
    * ++ no-invalid-this
    * !! no-magic-numbers
    * no-multi-spaces
    * no-new
    * !! no-param-reassign
    * no-return-assign
    * no-unused-expressions
    * !! no-useless-return
    * !! no-void
    * no-warning-comments
    * ++ prefer-named-capture-group
    * ++ prefer-regex-literals
    * wrap-iife
    * yoda
    * strict
    * no-undef
    * no-unused-vars
    * no-use-before-define
    * array-bracket-newline
    * array-bracket-spacing
    * array-element-newline
    * block-spacing
    * brace-style
    * ++ camelcase
    * comma-dangle
    * comma-style
    * computed-property-spacing
    * ++ consistent-this
    * eol-last
    * func-call-spacing
    * func-name-matching
    * !! func-names
    * func-style
    * ++ function-call-argument-newline
    * !! function-paren-newline
    * ++ id-denylist
    * !! id-length
    * indent
    * key-spacing
    * keyword-spacing
    * linebreak-style
    * lines-between-class-members
    * !! max-depth
    * !! max-len
    * !! max-lines
    * multiline-comment-style
    * multiline-ternary
    * new-cap
    * !! newline-per-chained-call
    * !! no-inline-comments
    * no-mixed-operators
    * !! no-multi-assign
    * no-multiple-empty-lines
    * !! no-plusplus
    * !! no-restricted-syntax
    * no-tabs
    * no-trailing-spaces
    * no-underscore-dangle
    * !! object-curly-newline
    * object-curly-spacing
    * object-property-newline
    * one-var
    * operator-assignment
    * operator-linebreak
    * padded-blocks
    * !! padding-line-between-statements
    * ++ prefer-exponentiation-operator
    * quotes
    * semi
    * !! sort-keys
    * space-before-function-paren
    * space-in-parens
    * space-infix-ops
    * spaced-comment
    * template-tag-spacing
    * unicode-bom
    * arrow-body-style
    * arrow-parens
    * ++ no-restricted-exports
    * !! no-restricted-imports
    * object-shorthand
    * prefer-const
    * prefer-destructuring
    * !! prefer-rest-params
    * prefer-template
    * rest-spread-spacing
    * !! sort-imports
    * template-curly-spacing
    * yield-star-spacing
    * !! id-blacklist
    * ++ id-denylist
    * indent
    * !! padding-line-between-statements
    * !! padding-line-between-statements
    * !! padding-line-between-statements
    * !! no-restricted-modules
    * func-call-spacing
    * strict
    * no-constant-condition
    * comma-dangle
    * strict
    * no-extra-parens
    * space-before-function-paren
    * keyword-spacing
    * ++ space-before-function-parentheses
    * space-before-function-paren
    * keyword-spacing
    * object-curly-spacing
    * array-bracket-spacing
    * keyword-spacing
    * spaced-comment

  * Updated from .eslintrc from real modules
    * indent
    * no-tabs
    * no-process-env
    * comma-dangle
    * operator-linebreak
    * object-curly-newline
    * function-paren-newline
    * prefer-destructuring
    * no-sync
    * dot-notation
    * template-curly-spacing
    * object-curly-spacing
    * prefer-destructuring
    * no-sync
    * no-warning-comments
    * array-bracket-newline
    * require-atomic-updates
    * sort-imports
    * lines-between-class-members
    * no-new-wrappers
    * generator-star-spacing
    * object-property-newline
    * @typescript-eslint/ban-ts-comment
    * @typescript-eslint/no-var-requires
    * @typescript-eslint/no-this-alias
    * @typescript-eslint/explicit-module-boundary-types
    * arrow-body-style
    * object-shorthand

  * Reviewed inline rules from modules
    * 182 - no-process-env
    * 169 - prefer-template
    * 166 - no-shadow
    * 157 - no-sync
    * 153 - object-property-newline
    * 118 - global-require
    * 110 - no-undef
    * 100 - no-var
    * 97 - no-new-func
    * 70 - no-unused-vars
    * 55 - prefer-destructuring
    * 50 - no-process-exit
    * 50 - quote-props
    * 45 - prefer-rest-params
    * 37 - vars-on-top
    * 26 - no-useless-concat
    * 25 - no-undefined
    * 24 - no-duplicate-imports
    * 24 - func-style
    * 21 - semi
    * 21 - no-global-assign
    * 19 - no-extra-parens
    * 17 - object-curly-newline
    * 16 - array-bracket-newline
    * 16 - prefer-spread
    * 15 - function-paren-newline
    * 12 - no-control-regex
    * 12 - callback-return
    * 12 - no-extend-native
    * 12 - no-implicit-coercion
    * 10 - default-case
    * 8 - prefer-const
    * 8 - indent
    * 7 - no-template-curly-in-string
    * 6 - eslint-env browser
    * 6 - max-len
    * 6 - no-await-in-loop
    * 5 - no-proto
    * 5 - no-unused-expressions
    * 4 - no-useless-escape
    * 4 - no-alert
    * 4 - no-nested-ternary
    * 4 - arrow-body-style
    * 4 - guard-for-in
    * 4 - no-bitwise
    * 4 - no-use-before-define
    * 3 - no-prototype-builtins
    * 3 - class-methods-use-this
    * 3 - new-cap
    * 2 - node/no-deprecated-api
    * 2 - import/no-unresolved
    * 2 - no-self-compare
    * 2 - complexity
    * 2 - no-array-constructor
    * 2 - no-invalid-this
    * 2 - no-new
    * 2 - no-empty
    * 2 - computed-property-spacing
    * 2 -  no-restricted-syntax
    * 1 - object-shorthand
    * 1 - strict
    * 1 - semi-style
    * 1 - no-empty-function
    * 1 - one-var
    * 1 - eqeqeq
    * 1 - no-loop-func

1.0.1 - 1.0.2 / 2020-05-21
===================

  * Small rule changes
  
1.0.0 / 2020-05-21
===================

  * Updated eslint v7.0.0 and eslint-plugin-node v11.1.0
  
0.0.5 / 2019-09-03
===================

  * Fix peerDependencies
  
0.0.4 / 2019-01-26
===================

  * change rule: "dot-notation": ["error", { "allowKeywords": true }]
  
0.0.3 / 2019-01-26
===================

  * semi-style -> first
  
0.0.2 / 2019-01-26
===================

  * Few fixes in rules
  
0.0.1 / 2019-01-21
===================

  * First version
