var merge = require('webpack-merge')
var baseWebpack = require('./webpack_base.config.js')
var htmlWebpackPlugin = require('html-webpack-plugin')
var config = require('../config')

module.exports = merge(baseWebpack, {
	devServer: {
		host: process.env.host || config.dev.host,
		port: process.env.port || config.dev.port,
		hot: true,
		open: true
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html',
			inject: 'body',
			favicon: './favicon.jpg',
			title: 'wallis',
			proxy: config.dev.proxy
		})
	]
})
