'use strict';
var chalk = require('chalk');
var Filter = require('broccoli-filter');
var es6transpiler = require('es6-transpiler');

function Es6TranspilerFilter(inputTree, options) {
	if (!(this instanceof Es6TranspilerFilter)) {
		return new Es6TranspilerFilter(inputTree, options);
	}

	Filter.call(this, inputTree);

	this.inputTree = inputTree;
	this.options = options || {};

	delete this.options.filename;
	delete this.options.outputToConsole;
	delete this.options.outputFilename;
}

Es6TranspilerFilter.prototype = Object.create(Filter.prototype);
Es6TranspilerFilter.prototype.constructor = Es6TranspilerFilter;

Es6TranspilerFilter.prototype.extensions = ['js'];
Es6TranspilerFilter.prototype.targetExtension = 'js';

Es6TranspilerFilter.prototype.processString = function (str, relativePath) {
	this.options.src = str;

	var result = es6transpiler.run(this.options);

	if (result.errors.length > 0) {
		return console.error(chalk.magenta('broccoli-es6-transpiler') + ' error in ' + chalk.blue(relativePath) + '\n' + result.errors.join('\n'));
	}

	return result.src;
};

module.exports = Es6TranspilerFilter;
