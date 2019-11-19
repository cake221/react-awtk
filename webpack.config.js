const path = require("path");

module.exports = {
	entry:{
		window:"./demo/window.js"
	},
	output:{
		filename:"[name].js",
		path:path.resolve(__dirname, "./dist"),
	},
	module: {
	    rules: [
			{
				test: /\.js$/,
				use: ['babel-loader'],
				// 排除 node_modules 目录下的文件，node_modules 目录下的文件都是采用的 ES5 语法，没必要再通过 Babel 去转换
				exclude: path.resolve(__dirname, 'node_modules'),
			},
		]
	},
	devtool: 'source-map', // 输出 source-map 方便直接调试 ES6 源码,
	mode: 'development',
	// externals: ['os']
}
