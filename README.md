# goify

[![npm version][npmsemver-image]][npmsemver-url]
[![Build Status][ci-image]][ci-url]
[![Code Climate][cq-image]][cq-url]
[![Known Vulnerabilities][vuln-image]][vuln-url]
[![Dependencies][deps-image]][deps-url]
[![Dev Dependencies][dev-deps-image]][dev-deps-url]
[![License][license-image]][license-url]

> `goify` transforms JavaScript Promises into go-like Promises.

## Table of Contents

* [Introduction](#introduction)
* [Installing](#installing)
* [Usage](#usage)
* [Contributing and help](#contributing)
    * [Criticism](#criticism)
    * [Developing](#developing)
    * [Bug reports, feature requests and discussion](#contributing)
* [License](#license)
* [Frequently Asked Questions](#faq)


## <a name="introduction"></a> Introduction

TODO.

## <a name="installing"></a> Installing

```
npm install --save goify
```

## <a name="usage"></a> Usage

Here you have a illustrative example on how to use it:

```js
const goify = require('goify').all;


goify(Promise.resolve('foobar'));
//> [ 'foobar', null ]

goify(Promise.reject('foobar'));
//> [ undefined, 'foobar' ]


function someJob() {
    // Returns a promise which resolves a value or rejects an error
}
const [ result, someJobErr ] = await someJob();
if (someJobError) {
    console.error('someJob failed for job #x. Details:', someJobError);
    return;
}
```

Both source code and tests are small and can give you a good idea about how to use goify.

## <a name="contributing"></a> Contributing and help

### <a name="criticism"></a> Criticism
If you think something could be done better or simply sucks, bring up a issue on the [tracker](https://github.com/fcanela/goify/issues). Don't be shy. I really love feedback and technical discussions.

### <a name="developing"></a> Developing
Pull requests are welcome (and will make me cry in joy). Also, did I already say that I **love** technical discussions? Feel free to open a issue on the [tracker](https://github.com/fcanela/goify/issues) if you have any doubt.

### <a name="bugs"></a> Bug reports, feature requests and discussion

Use the [GitHub issue tracker](https://github.com/fcanela/goify/issues) to report any bugs or file feature requests. In case you found a bug and have no GitHub account, feel free to email me: fcanela.dev at gmail dot com.

## <a name="license"></a> License

Copyright (c) 2017 Francisco Canela. Licensed under the MIT license.

## <a name="faq"></a> Frequently Asked Questions

### Should I use it in my project?

Probably not. At least, not yet. I usually follow __semver__ for modules versioning and while it is at 0.x.x you can expect breaking changes.

### This project documentation sucks

Yes, I know. Unfortunately I have limited time resources. Feel free to open a issue or sumbit a pull request if you can help me improving this.


[npmsemver-image]: https://img.shields.io/badge/version-0.0.1-orange.svg
[npmsemver-url]: https://github.com/fcanela/goify
[ci-image]: https://circleci.com/gh/fcanela/goify.svg?style=svg
[ci-url]: https://circleci.com/gh/fcanela/goify
[cq-image]: https://api.codeclimate.com/v1/badges/55d9745945d252235af5/maintainability
[cq-url]: https://codeclimate.com/github/fcanela/goify/maintainability
[vuln-image]: https://snyk.io/test/github/fcanela/goify/badge.svg
[vuln-url]: https://snyk.io/test/github/fcanela/goify
[deps-image]: https://david-dm.org/fcanela/goify.svg
[deps-url]: https://david-dm.org/fcanela/goify
[dev-deps-image]: https://david-dm.org/fcanela/goify/dev-status.svg
[dev-deps-url]: https://david-dm.org/fcanela/goify#info=devDependencies
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
