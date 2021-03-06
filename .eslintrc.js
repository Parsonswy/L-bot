module.exports = {
	'env': {
			'browser': false,
			'es6': true
	},
	'extends': 'eslint:recommended',
	'globals': {
			'Atomics': 'readonly',
			'SharedArrayBuffer': 'readonly'
	},
	'parser': 'babel-eslint',
	'parserOptions': {
			'ecmaVersion': 2018,
			'sourceType': 'module',
			'allowImportExportEverywhere': true
	},
	'rules': {
			'indent': [
					'error',
					'tab'
			],
			'linebreak-style': [
					'error',
					'unix'
			],
			'quotes': [
					'error',
					'single'
			],
			'semi': [
					'error',
					'always'
			]
	}
};