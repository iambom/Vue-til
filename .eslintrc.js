module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["plugin:vue/essential", "@vue/prettier"],
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: false,
				tagWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
	
	parserOptions: {
		parser: "babel-eslint"
	  },
	  overrides: [
		{
		  files: [
			"**/__tests__/*.{j,t}s?(x)",
			"**/tests/unit/**/*.spec.{j,t}s?(x)"
		  ],
		  env: {
			jest: true
		  }
		}
	  ]
};