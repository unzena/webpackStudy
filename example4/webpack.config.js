var path = require('path');

module.exports = {
  entry: './app/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist' //아래 devserver  에도 동일한 경로를 지정
  },
  devtool: "cheap-eval-source-map",
  devServer: {
    publicPath: "/dist/", // 웹팩의 특징 앞뒤로 / 해야함
    compress: true,
    port: 9000
  }
}