# 학습목표

: webpack의Resolve 와 plugin의 이해


#### Example 3 - Webpack Resolve & Plugins
- Besides loader, plugins offer a wide variety of different features that Loaders don't provide

1. Create a new `package.json` and install plugins below

```
npm init -y
npm i --save-dev webpack webpack-cli
npm i jquery --save-dev
```

2. Add `index.html`

```html
<html>
  <head>
    <title>Webpack Plugins</title>
  </head>
  <body>
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

3. Add `app/index.js`

```js
var $ = require('jquery');
console.log("loaded jQuery version is " + $.fn.jquery);
```

4. Add `webpack.config.js`

```js
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

5. run `webpack`
6. uncomments `#2` and `#3` to see how Resolve alias & Provide Plugin works

```js
// #2 - Using alias
// index.js
import $ from 'Vendor/jquery-2.2.4.min.js';
console.log("loaded jQuery version is " + $.fn.jquery);

// webpack.config.js
resolve: {
  alias: {
    Vendor: path.resolve(__dirname, './app/vendor/')
  }
}
```

```js
// #3 - Using Provide Plugin
// index.js
console.log("loaded jQuery version is " + $.fn.jquery);

// webpack.config.js
plugins: [
  new webpack.ProvidePlugin({
    $: 'jquery'
  })
]
```
```text
 위는 장기효 강사님의 인프런 강의 복습한 소스 정리임을 알리는 바입니다.
 다만 webpack4 반영 하여 변경 하였습니다.
```