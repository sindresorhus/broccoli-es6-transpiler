# Deprecated

The `es6-transpiler` project is no longer maintained.

---

# [broccoli](https://github.com/joliss/broccoli)-es6-transpiler [![Build Status](https://travis-ci.org/sindresorhus/broccoli-es6-transpiler.svg?branch=master)](https://travis-ci.org/sindresorhus/broccoli-es6-transpiler)

> Transpile ES2015 to ES5 with [es6-transpiler](https://github.com/termi/es6-transpiler)

*Issues with the output should be reported on the es6-transpiler [issue tracker](https://github.com/termi/es6-transpiler/issues).*


## Install

```
$ npm install --save-dev broccoli-es6-transpiler
```


## Usage

```js
var es6transpiler = require('broccoli-es6-transpiler');
tree = es6transpiler(tree, options);
```


## API

### es6transpiler(tree, [options])

Use the es6-transpiler [options](https://github.com/termi/es6-transpiler#options), except for `filename`, `src`, `outputToConsole`, `outputFilename`.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
