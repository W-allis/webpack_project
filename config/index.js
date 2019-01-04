module.exports = {
	dev: {
		assetsPath: '/',
		
		port: 9533,
		host: 'localhost',
		
		
		proxy: {
			'/api': {
				target: 'http://localhost:8001',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	},
	build: {
		assetsPath: {
			dev: '/',
			prod: '/'
		}
	}
}
