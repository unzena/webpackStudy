# 학습목표

: webpack의 기본기능 구현

1. create a package json file
   npm init -y

2. Install webpack && Install lodash
   npm i --save-dev webpack webpack-cli
   npm i --save lodash

3. create index.js & index.html

# html

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

# index.js

import _ from 'lodash';

function component() {
var element = document.createElement("div");

element.innerHTML = _.join(["Hello", "webpack"], " ");

return element;
}

document.body.appendChild(component());

# html modify

-- delete

<script src="https://unpkg.com/lodash@4.16.6"></script>
<script src="app/index.js"></script>

-- insert
<script src="dist/bundle.js"></script>

6. run this command below and start the index.html.

webpack app/index.js dist/bundle.js

7. Let's add config file for more complex configuration

// webpack.config.js
// `webpack` command will pick up this config setup by default

var path = require("path");

module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};

## License & Copyright

**Copyright © 2017 Captain Pangyo**
<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br>
This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs 4.0 Unported License</a>.
## 장기효님 infrun lecture
```
