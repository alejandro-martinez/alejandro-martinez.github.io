// Loader para exportar los css generados por sass-loader a archivos aparte

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
		          fallback: 'style-loader',
		          //resolve-url-loader may be chained before sass-loader if necessary
		          use: ['css-loader', 'sass-loader']
		        })
            }
        ]
    },
	plugins: [
		new ExtractTextPlugin('style.css')
		//if you want to pass in options, you can do so:
		//new ExtractTextPlugin({
		//  filename: 'style.css'
		//})
	]
};