// const ROOT_ALIAS = 'root'; // TODO: move to constants somehow

module.exports = {
  "env": {
		"browser": true,
		"es2021": true,
		"node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {},
    "boundaries/elements": [
      {
        "type": "app",
        "pattern": "@app/*"
      },
      {
        "type": "sections",
        "pattern": "@sections/*"
      },
      {
        "type": "shared",
        "pattern": "@shared/*"
      },
    ]
  },
  "ignorePatterns": [
    "**/*.css",
    "**/*.scss",
    "**/*.svg",
    "**/*.md",
    "**/*.json",
    "**/*.ttf",
    "**/*.txt",
    "**/*.dist",
    "**/*.jpg",
    "**/*.png"
  ],
  "extends": [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "react-app",
    "next/core-web-vitals"
  ],
  "parser": "@typescript-eslint/parser",
  // "parserOptions": {
  //   "ecmaFeatures": { "jsx": true, "tsx": true },
  //   "project": "./tsconfig.json",
  //   "ecmaVersion": "latest",
  //   "sourceType": "module"
  // },
  "plugins": [
    "react",
    "prettier",
    "@typescript-eslint",
    "import",
    "@typescript-eslint/eslint-plugin"
  ],
  "rules": {
    'prettier/prettier': [1],
		// 'no-restricted-imports': [
		// 	2,
		// 	{
		// 		patterns: [`${ROOT_ALIAS}/*/*`, '../*'],
		// 	},
		// ],
		'no-param-reassign': [
			2,
			{
				props: true,
				ignorePropertyModificationsForRegex: ['.*(Element|Node)$'],
			},
		],
		'no-implicit-coercion': [
			2,
			{
				boolean: true,
				number: true,
				string: true,
				disallowTemplateShorthand: true,
				allow: [],
			},
		],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				pathGroups: [
					{
						pattern: `${ROOT_ALIAS}/**/*`,
						group: 'parent',
					},
					{
						pattern: './*',
						group: 'sibling',
					},
				],
			},
		],
		'import/no-unresolved': [2, { ignore: ['\\.?inline$'] }],
		'import/prefer-default-export': 0,
		'unicorn/no-for-loop': 0,
		'unicorn/no-array-for-each': 0,
		'unicorn/explicit-length-check': 0,
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-console": "error",
    "react/display-name": "off",
    "semi": [
      "error",
      "always"
    ],
    "import/no-anonymous-default-export": "off",
    "import/order": [
      error,
      {
        pathGroups: [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@emotion/*",
            "group": "external",
            "position": "after"
          },
          {
            "pattern": "@mantine/*",
            "group": "external",
            "position": "after"
          },
          {
            "pattern": "@app",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@processes/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@pages/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@widgets/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@features/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@entities/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@shared/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@test-utils",
            "group": "internal",
            "position": "after"
          }
        ],
        "newlines-between": "always",
        "pathGroupsExcludedImportTypes": ["builtin"],
        "alphabetize": { "order": "asc", "caseInsensitive": true },
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"]
      }
    ],
    "comma-dangle": [
      "error",
      "always-multiline",
      {
        "imports": "only-multiline",
        "arrays": "only-multiline",
        "objects": "only-multiline",
        "functions": "only-multiline"
      }
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "varsIgnorePattern": "React",
        "argsIgnorePattern": "^_$" // ignore "_"
      }
    ],
    "max-len": [
      "error",
      {
        "code": 140,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreComments": true,
        "ignorePattern": "d=\"([\\s\\S]*?)\""
        // svg d=...
      }
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "error",
    // https://eslint.org/docs/latest/rules/padding-line-between-statements
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      }
    ]
//    "@typescript-eslint/no-unsafe-assignment": "error" // ?
  }
}