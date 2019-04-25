
5. Run `npm start` to launch the Webpack Dev Server

> Please keep in mind that the **webpack devserver compiles in memory** not emits bundled file in output.path

#### Example 5 - Webpack Dev Middleware
- Have a full control over already installed Node.js by installing the commands below

```
npm i --save-dev webpack webpack-cli
npm install express webpack-dev-middleware --save-dev
```

1. Create a new `package.json` and type the commands above
2. Add `index.html`

```html
<html>
  <head>
    <title>Webpack Dev Middleware</title>
  </head>
  <body>
    <div class="container">
      hello
    </div>
    <script src="/dist/bundle.js"></script>
  </body>
</html>
```

3. Create a new `server.js` file and add Express & EJS in it

```js
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));

// view engine setup
// __dirname : root folder
app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.send('index');
});

app.listen(3000);
console.log("Server running on port 3000");
```

4. Run `server.js` and make sure it doens't cause any errors
5. Add `app/index.js`

```js
var ele = document.getElementsByClassName('container')[0];
ele.innerText = "Webpack loaded!!";
```

6. Add `webpack.config.js`

```js
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:3000/dist'
  },
};
```

7. Add the codes below to `server.js`

```js
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var compiler = webpack(webpackConfig);
```

```js
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {colors: true}
}));
```