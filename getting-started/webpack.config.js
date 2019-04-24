// `webpack` command will pick up this config setup by default
var path = require('path');

module.exports = {
  entry: './app/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',    
    path: path.resolve(__dirname, 'dist')
    //path.join(나열된 것들을 모두 합침)
    // path.join(r, n, d);  => return r/n/d
  }
};