![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js][] plugin

# @seneca/logstash-logger

| ![Voxgig](https://www.voxgig.com/res/img/vgt01r.png) | This open source module is sponsored and supported by [Voxgig](https://www.voxgig.com). |
|---|---|

## Install

| ![Voxgig](https://www.voxgig.com/res/img/vgt01r.png) | This open source module is sponsored and supported by [Voxgig](https://www.voxgig.com). |
|---|---|

## Quick Example

```js
require('seneca')({
  legacy: { logging: false }
})
.use(require('seneca-logstash-logger'), {
  logstash: { host: 'localhost', port: 5000 }
})
```

## More Examples

See [test/](test/) for usage examples.

## Motivation

A Logstash logger for Seneca microservices. Sends structured log entries to Logstash.

## Support

If you're using this module and need help, you can:

- Post a [github issue][]
- Tweet to [@senecajs][]

## API

### Configuration

In order to configure the logger there is a number of configuration parameters that
can be passed into Seneca in the key 'logstash-logger'.

Those parameters are defined by [Node Logstash Client](https://github.com/purposeindustries/node-logstash-client)
which is the library used by this module to communicate to logstash.

## Contributing

The [Senecajs org][] encourages open participation. If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please get in touch.

### Running tests

```sh
npm run test
```

## Background

Compatible with Logstash via UDP. Originally developed by [nearForm](http://nearform.com).

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Dependency Status][david-badge]][david-url]
[![Coveralls][BadgeCoveralls]][Coveralls]
[![Gitter][gitter-badge]][gitter-url]
[npm-url]: https://npmjs.com/package/seneca-logstash-logger
[npm-badge]: https://img.shields.io/npm/v/seneca-logstash-logger.svg
[travis-badge]: https://travis-ci.org/senecajs/seneca-logstash-logger.svg
[travis-url]: https://travis-ci.org/senecajs/seneca-logstash-logger
[david-badge]: https://david-dm.org/senecajs/seneca-logstash-logger.svg
[david-url]: https://david-dm.org/senecajs/seneca-logstash-logger
[Coveralls]: https://coveralls.io/github/senecajs/seneca-logstash-logger?branch=master
[BadgeCoveralls]: https://coveralls.io/repos/github/senecajs/seneca-logstash-logger/badge.svg?branch=master
[gitter-url]: https://gitter.im/senecajs/seneca-logstash-logger
[gitter-badge]: https://badges.gitter.im/Join%20Chat.svg
