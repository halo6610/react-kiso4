const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const nodeExternals = require('webpack-node-externals');


const index={
		target: 'node',
    entry: path.resolve(__dirname, "server/index.js"),  //エントリポイントであるファイルのパスを指定
    output: {
        path: path.resolve(__dirname, 'distb','bundle'),  //バンドルしたファイルの出力先のパスを指定
        filename: 'bundle.cjs', //出力時のファイル名の指定
				//publicPath:"/",
    },
		module: {
			rules: [
				{
					test: /\.js[x]?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',   //loader名
						options: {                //Babelの設定
							presets: [
								'@babel/preset-env',
								'@babel/preset-react' //ReactのPresetを追加
							],
							plugins: ['@babel/plugin-syntax-jsx'] //JSXパース用
						}
					}
				},
				{
					test: /\.ts[x]?$/,
					use: "ts-loader",
				},
				{ test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},//'style-loader',

			]
		},
		externals: [nodeExternals()],
		plugins: [new CleanWebpackPlugin()],
		resolve: {
			//aliasFields: ['browser', 'browser.esm'],
			fallback:{ "http": require.resolve("stream-http"),"buffer": require.resolve("buffer/"),"url": require.resolve("url/"),"stream": require.resolve("stream-browserify"),"util": require.resolve("util/"),"path": require.resolve("path-browserify"),"querystring": require.resolve("querystring-es3"),"crypto": require.resolve("crypto-browserify"),"zlib": require.resolve("browserify-zlib") },
			extensions: ['.ts','.tsx','.js', '.jsx', '.json','.css']
		},
		//target: ["web", "es5"],
}
const hydrate={
	entry: path.resolve(__dirname, "server/hydrate.tsx"),  //エントリポイントであるファイルのパスを指定
	output: {
			path: path.resolve(__dirname, 'distb','hydrate'),  //バンドルしたファイルの出力先のパスを指定
			filename: 'bundlehydrate.js', //出力時のファイル名の指定
			//publicPath:"/",
	},
	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',   //loader名
					options: {                //Babelの設定
						presets: [
							'@babel/preset-env',
							'@babel/preset-react' //ReactのPresetを追加
						],
						plugins: ['@babel/plugin-syntax-jsx'] //JSXパース用
					}
				}
			},
			{
				test: /\.ts[x]?$/,
				use: "ts-loader",
			},
			{ test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},//'style-loader',

		]
	},
	//externals: [nodeExternals()],
	plugins: [new CleanWebpackPlugin()],
	resolve: {
		//aliasFields: ['browser', 'browser.esm'],
		fallback:{ "http": require.resolve("stream-http"),"buffer": require.resolve("buffer/"),"url": require.resolve("url/"),"stream": require.resolve("stream-browserify"),"util": require.resolve("util/"),"path": require.resolve("path-browserify"),"querystring": require.resolve("querystring-es3"),"crypto": require.resolve("crypto-browserify"),"zlib": require.resolve("browserify-zlib") },
		extensions: ['.ts','.tsx','.js', '.jsx', '.json','.css']
	},
	target: ["web", "es5"],
}

module.exports=[index,hydrate]