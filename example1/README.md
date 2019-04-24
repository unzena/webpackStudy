# 학습목표

: webpack의 css bundling 의 이해

#### Example 1 - CSS Code Splitting

1. Create a new `package.json`

```
npm init -y
```

2.

- As for CSS files, use `css-loader`for default setting. The extra option `ExtractTextWebpackPlugin` is available for better performance

```text
npm i css-loader style-loader --save-dev
npm i --save-dev extract-text-webpack-plugin@next
```

3. Add index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>CSS & Libraries Code Splitting</title>
  </head>
  <body>
    <header>
      <h3>CSS Code Splitting</h3>
    </header>
    <div>
      <p>
        This text should be colored with blue after injecting CSS bundle
      </p>
    </div>
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

4. Add `base.css`

```css
p {
  color: blue;
}
```

5. Add `app/index.js`

```js
import "../base.css";
```

6. Add `webpack.config.js`

```js
var path = require("path");

module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
```

7. Add ExtractPlugin to exract the bundled css filename

```js
// webpack.config.js

// ...
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// ...
{
  // ...
  module: {
    rules: [{
      test: /\.css$/,
      // Comment this out to load ExtractTextPlugin
      // use: ['style-loader', 'css-loader']
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
```

8. Add stylesheet link element to index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>CSS & Libraries Code Splitting</title>
    <link rel="stylesheet" href="dist/styles.css" />
  </head>
  <body>
    <header>
      <h3>CSS Code Splitting</h3>
    </header>
    <div>
      <p>
        This text should be colored with blue after injecting CSS bundle
      </p>
    </div>
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

```text
 위는 장기효 강사님의 인프런 강의 복습한 소스 정리임을 알리는 바입니다.
```
