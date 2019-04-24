var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:3000/dist'
  },
};