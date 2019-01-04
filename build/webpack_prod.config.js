var merge = require('webpack-merge')
var baseWebpack = require('./webpack_base.config.js')
var htmlWebpackPlugin = require('html-webpack-plugin')
var config = require('../config')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var path = require('path')

var env = require('../config/' + (process.env.BASE_ENV === 'prod' ? 'prod' : 'dev') + '.env')

module.exports = merge(baseWebpack, {
	plugins: [
		// 区分环境
		new webpack.DefinePlugin({
			'process.env': env
		}),
		// 打包首页
		new htmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html',
			inject: 'body',
			favicon: './favicon.jpg',
			title: 'wallis',
			minify: {
		        removeComments: true,          // 删除注释
		        collapseWhitespace: true,      // 删除空格
		        removeAttributeQuotes: true    // 删除双引号
		        // more options:
		        // https://github.com/kangax/html-minifier#options-quick-reference
		    }
		}),
		// 打包前删除dist文件夹
		new CleanWebpackPlugin(['dist/*'], {
   			root: path.resolve(__dirname, '../'),
   			verbose: true,
   			dry: false
   		})
		// 分包处理
	]
})
