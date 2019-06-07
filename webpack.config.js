const webpack = require('webpack');
const path = require('path');
const util = require('gulp-util');
const config = require('./gulp/config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BowerResolvePlugin = require("bower-resolve-webpack-plugin");

function createConfig(env) {
	let isProduction,
		webpackConfig;

	if (env === undefined) {
		env = process.env.NODE_ENV;
	}

	isProduction = env === 'production';

	webpackConfig = {
		context: path.join(__dirname, config.source.js),
		entry: {
			// vendor: ['jquery'],
			app: './main.js',
		},
		output: {
			path: path.join(__dirname, config.dist.js),
			filename: '[name].js',
			publicPath: 'js/',
		},
		externals: {
		 Wow: 'WOW'
		 },
		devtool: isProduction ?
			'#source-map' :
			'#cheap-module-eval-source-map',
		plugins: [
			// new webpack.optimize.CommonsChunkPlugin({
			//     name: 'vendor',
			//     filename: '[name].js',
			//     minChunks: Infinity
			// }),
			new webpack.LoaderOptionsPlugin({
				options: {
					eslint: {
						formatter: require('eslint-formatter-pretty')
					}
				}
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
				'Popper': 'popper.js'
			}),
			new webpack.NoEmitOnErrorsPlugin(),

			new BundleAnalyzerPlugin({
				analyzerMode: 'static',
				analyzerPort: 4000,
				openAnalyzer: false,
			}),
		],
		resolve: {
			extensions: ['.js'],
			alias: {
				waypoints: path.resolve('app/libs/waypoints/lib/jquery.waypoints.js'),
				TweenLite: path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
				TweenMax: path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
				TimelineLite: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
				TimelineMax: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
				ScrollMagic: path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
				'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
				'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
			},

			plugins: [new BowerResolvePlugin()],
			modules: ['app/libs', 'node_modules'],
			descriptionFiles: ['bower.json', 'package.json'],
			mainFields: ['browser', 'main']
		},
		module: {
			loaders: [{
					test: /\.jsx?$/,
					exclude: /(node_modules)/,
					loader: 'babel'
			}],
			rules: [
				{
					enforce: 'pre',
					test: /\.js$/,
					exclude: [
						path.resolve(__dirname, 'node_modules'),
						path.resolve(__dirname, 'app/libs'),
						path.resolve(__dirname, 'app/js/src'),
					],
					loader: 'eslint-loader',
					options: {
						fix: true,
						cache: true,
						// ignorePattern: __dirname + '/app/js/src/'
						// ignorePattern: __dirname + '/app/libs/'
					}
				}, {
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: [
						path.resolve(__dirname, 'node_modules'),
						path.resolve(__dirname, 'app/libs'),
					],
				}],
		},
	};

	if (isProduction) {
		webpackConfig.plugins.push(
			new webpack.LoaderOptionsPlugin({
				minimize: true,
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
				},
			})
		);
	}

	return webpackConfig;
}

module.exports = createConfig();
module.exports.createConfig = createConfig;
