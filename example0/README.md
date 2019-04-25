# 학습목표

: webpack의 기본기능 구현

1. create a package json file
   npm init -y

2. Install webpack && Install lodash

```text
webpack4 의 경우 webpack-cli 를 같이 설치해야한다.
   npm i --save-dev webpack webpack-cli
   npm i --save lodash
```

3. create index.js & index.html

```html
<!-- index.html old-->
<html>
  <head>
    <title>webpack 2 demo</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
    <script src="app/index.js"></script>
  </body>
</html>
```

```js
//  index.js
import _ from "lodash";

function component() {
  var element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

document.body.appendChild(component());
```

```html
<!-- html modify -->
<!-- delete -->
<script src="https://unpkg.com/lodash@4.16.6"></script>
<script src="app/index.js"></script>
<!-- insert -->

<script src="dist/bundle.js"></script>
```

6. run this command below and start the index.html.

```text
webpack app/index.js dist/bundle.js
```

7. Let's add webpack.config.js

```js
//  webpack.config.js
var path = require("path");

module.exports = {
  entry: "./app/index.js",
  output: { filename: "bundle.js", path: path.resolve(__dirname, "dist") }
};
```

```text
 위는 장기효 강사님의 인프런 강의 복습한 소스 정리임을 알리는 바입니다.
```
