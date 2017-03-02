// Loader para exportar los css generados por sass-loader a archivos aparte
var path = require("path");
var webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: './modules/index.js',
        vendors: './vendors/index.js'
    },
    resolve: {
        modules: ["node_modules","bower_components"],
        descriptionFiles: ['package.json', 'bower.json'],
        mainFields: ['main', 'browser'],
        mainFiles: ['index'],
        extensions: [
          '.js',
          '.html',
          '.css', '.sass',
          '.json'
        ],
        enforceExtension: false,
        moduleExtensions: ['-loader'],
        enforceModuleExtension: false,
        alias: {
            jquery: "jquery/src/jquery"
        }
      },
    output: {
        path: __dirname + "/dist/",
        filename: '[name].js'
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
            },
            {
              test: /\.js$/,
              loaders: ['babel-loader']      // note that specifying 'babel' or 'babel-loader' is equivalent for Webpack
            },
            {
              test: /\.(eot|svg|ttf|woff|woff2)$/,
              loader: 'file?name=public/fonts/[name].[ext]'
            }
        ]
    },
	plugins: [
		new ExtractTextPlugin('style.css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
		//if you want to pass in options, you can do so:
		//new ExtractTextPlugin({
		//  filename: 'style.css'
		//})
	]
};