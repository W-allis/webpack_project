var config = require('../config')
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: {
		app: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name]_[hash:5].js',
		publicPath: process.env.BASE_ENV ? config.build.assetsPath[process.env.BASE_ENV] : config.dev.assetsPath
	},
	module: {
		rules: [
			{
				test: /\.(css|less)$/,
				exclude: /node_modules/,
            	use: [
        			'style-loader',
		        	'css-loader',
		        	'less-loader'
		        ]
			},
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
            	loader: 'babel-loader'
			},
			{
				test: /\.tpl$/,
				loader: 'ejs-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: path.resolve(__dirname, '../dist/[name].[ext]')
				}
			}
		]
	},
	optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
   	},
   	plugins: [
   		new ExtractTextPlugin({
   			filename: 'common.css',
   			allChunks: true 
   		})
   	]
}

