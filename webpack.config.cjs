const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, "server/index.tsx"),  //エントリポイントであるファイルのパスを指定
    output: {
        path: path.resolve(__dirname, 'dist'),  //バンドルしたファイルの出力先のパスを指定
        filename: 'bundle.js' //出力時のファイル名の指定
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
				},

			]
		},
		resolve: {
			extensions: ['.ts','.tsx','.js', '.jsx', '.json']  // .jsxも省略可能対象にする
		},
		target: ["web", "es5"],
}