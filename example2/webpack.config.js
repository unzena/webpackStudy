var webpack = require('webpack');
var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    main: './app/index.js',
    vendor: [
      'moment',
      'lodash'
    ],
  },
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: { // webpack 4 이상이면 중복 파일 제거는 옵션으로 선택이 가능
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial', // 동적으로 생성되는 것에 좋음
          name: 'vendor',
          enforce: true,
        },
      },
    }
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'manifest.json',
      basePath: './dist/'
    })
  ]
}