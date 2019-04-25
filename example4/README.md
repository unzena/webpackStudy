

#### Example 4 - Webpack Dev Server Setting
- Initial development setting to make the build process easier

```
npm i --save-dev webpack webpack-cli
npm install webpack webpack-dev-server --save-dev
webpack-dev-server --open
```

- or add this option to `package.json` to launch the dev server

```json
"scripts": { "start": "webpack-dev-server" }
```

1. Create a new `package.json` and type the commands above
2. Add `index.html`

```html
<html>
  <head>
    <title>Webpack Dev Server</title>
  </head>
  <body>
    <div class="container">
      hello
    </div>
    <script src="/dist/bundle.js"></script>
  </body>
</html>
```

3. Add `app/index.js`

```js
var ele = document.getElementsByClassName('container')[0];
ele.innerText = "Webpack loaded!!";
```

4. Add `webpack.config.js`

```js
var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  devtool: "cheap-eval-source-map",
  devServer: {
    publicPath: "/dist/",
    port: 9000
  },
};
```