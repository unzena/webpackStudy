# 학습목표

: webpack의 Manifest, chunk의 이해

#### Example 2 - Libraries Code Splitting

1. Create a new `package.json`

```
npm init -y
```

2.

- When using a couple of libraries, should you import them at the very beginning of bundling all files to avoid repetitively use them in every build.

```text
npm install webpack --save-dev
npm install moment lodash --save
npm i webpack-manifest-plugin --save-dev
```

3. Add `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Libraries Code Splitting</title>
  </head>
  <body>
    <header>
      <h3>Libraries Code Splitting</h3>
    </header>
    <div>
      <label for="p1"><strong>Moment JS : </strong></label>
      <p class="p1">
        not yet loaded
      </p>
      <label for="p2"><strong>Lodash JS : </strong></label>
      <p class="p2">
        not yet loaded
      </p>
    </div>
    <script src="dist/vendor.js"></script>
    <script src="dist/main.js"></script>
  </body>
</html>
```

4. Add `app/index.js`

```js
var moment = require("moment");
var _ = require("lodash");
var ele = document.querySelectorAll("p");

document.addEventListener("DOMContentLoaded", function(event) {
  ele[0].innerText = moment().format();
  ele[1].innerText = _.drop([1, 2, 3], 0);
});
```

5. Add `webpack.config.js`

```js
var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    main: "./app/index.js",
    vendor: ["moment", "lodash"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  }
};
```

optional

```js
// 1
,
  optimization: { // webpack 4 이상이면 중복 파일 제거는 옵션으로 선택이 가능
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial', // cuunk option 동적으로 생성되는 것에 좋음
          name: 'vendor',
          enforce: true,
        },
      },
    }
  },

// 2
,
  plugins: [
    new ManifestPlugin({
      fileName: 'manifest.json',
      basePath: './dist/'
    })
  ]
```

```text
 위는 장기효 강사님의 인프런 강의 복습한 소스 정리임을 알리는 바입니다.
 다만 webpack4 반영 하여 변경 하였습니다.
```
