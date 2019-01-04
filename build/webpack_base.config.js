var config = require('../config')
var path = require('path')
var webpack = require('webpack')

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
				test: /\.css$/,
				exclude: /node_modules/,
            	use: [
        			"style-loader",
		        	"css-loader"
		        ]
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
   	}
}

