const path = require('path');

const clientConfig = {
	target: 'web',
	mode: 'production',
	entry: {
		mynum: './source/index.ts'
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts']
	},
	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'dist/web'),
		library: 'myNum',
		libraryTarget: 'window'
	}
};

module.exports = clientConfig;
