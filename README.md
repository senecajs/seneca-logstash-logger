![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js](https://www.npmjs.com/package/seneca) logger for Logstash

# seneca-logstash-logger

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Dependency Status][david-badge]][david-url]
[![Coveralls][BadgeCoveralls]][Coveralls]
[![Gitter][gitter-badge]][gitter-url]


- __Lead Maintainer__: [David Gonzalez](https://github.com/dgonzalez)
- __Sponsor__: [nearForm](http://www.nearform.com)
- __node__: 4.x, 6.x

This module is a plugin that enables your Seneca-based microservice to send logs
to Logstash via TCP or UDP.

### Seneca compatibility

Supports Seneca versions **2** - **3.x**

## Getting Started

Here is an example on how to use the logger:
```
var Seneca = require('seneca')

var logstash = {
		host: 'localhost',
		port: 7132,
		type: 'udp'
}

var seneca = Seneca({legacy: {logging: false}, 'logstash-logger': logstash})
seneca.use(require('seneca-logstash-logger'))
```

And that's all! From now on, all the Seneca log output will be sent to the Logstash
instance specified by the `host` property of the configuration.

## Configuration

In order to configure the logger there is a number of configuration parameters that
can be passed into Seneca in the key 'logstash-logger'.

Those parameters are defined by [Node Logstash Client](https://github.com/purposeindustries/node-logstash-client)
which is the library used by this module to communicate to logstash.

## Running Logstash using Docker
If you need to spin up a new instance of logstash for testing purposes, the following
command matches the configuration from the example above:

```
docker run -it --rm -p 7132:7132 logstash logstash -e 'input { udp { port => 7132} } output { stdout { } }'
```
Please note that if you are using docker-machine or any other virtualization
technology to run Docker you will need to replace `localhost` by the IP of the `docker-machine` (just run `docker-machine ip` in the console).

## Compatibility

seneca-logstash-logger is only compatible with Seneca 3.0+ and Node 4.x+

## Contributing

The [Senecajs org](https://www.npmjs.com/package/seneca) encourage open participation. If you feel you can help in any way, be it with
documentation, examples, extra testing, or new features please get in touch.

## License

Copyright (c) 2016, David Gonzalez and other contributors.
Licensed under [MIT](LICENSE).

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
