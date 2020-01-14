module.exports = {
	env: {
	  browser: false,
	  commonjs: true,
	  es6: true,
	  node: true
	},
	extends: [
	  '@quartz/eslint-config-base'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
	  ecmaVersion: 2018
	},
	plugins: [
	  '@typescript-eslint'
	],
	settings: {
		"import/resolver": {
		  node: {
			extensions: [".js", ".jsx", ".ts", ".tsx"]
		  }
	  },
	},
	overrides: [{
	  files: [ "*.ts" ],
	  rules: {
		  "no-unused-vars": 0,
		  "jest/valid-expect": 0,
	  }
	}]
};