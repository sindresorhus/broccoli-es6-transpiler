# [broccoli](https://github.com/joliss/broccoli)-es6-transpiler [![Build Status](https://travis-ci.org/sindresorhus/broccoli-es6-transpiler.svg?branch=master)](https://travis-ci.org/sindresorhus/broccoli-es6-transpiler)

> Transpile ES6 to ES5 with [es6-transpiler](https://github.com/termi/es6-transpiler)

*Issues with the output should be reported on the es6-transpiler [issue tracker](https://github.com/termi/es6-transpiler/issues).*


## Install

```bash
$ npm install --save broccoli-es6-transpiler
```


## Example

```js
var es6transpiler = require('broccoli-es6-transpiler');
tree = es6transpiler(tree, options);
```


## API

### es6transpiler(tree, options)

Use the es6-transpiler [options](https://github.com/termi/es6-transpiler#options), except for `filename`, `src`, `outputToConsole`, `outputFilename`.


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
