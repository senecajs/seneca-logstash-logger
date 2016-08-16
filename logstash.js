'use strict'

var Logstash = require('logstash-client')

function Logger () {}

Logger.preload = function () {
  var options = this.options()

  var client = new Logstash(options['logstash-logger'])
  function adapter (context, payload) {
    client.send(payload)
  }

  return {
    extend: {
      logger: adapter
    }
  }
}

var Seneca = require('seneca')

var logstash = {
		host: 'localhost',
		port: 7132,
		type: 'udp'
}

var seneca = Seneca({legacy: {logging: false}, 'logstash-logger': logstash})
seneca.use(require('seneca-logstash-logger'))

module.exports = Logger
