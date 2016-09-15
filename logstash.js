'use strict'

var Logstash = require('logstash-client')
var LogFilter = require('seneca-log-filter')

function Logger () {}

Logger.preload = function () {
  var options = this.options()

  var logFilter = LogFilter(options['log'])
  var client = new Logstash(options['logstash-logger'])
  function adapter (context, payload) {
    let filtered = logFilter(payload)
    if(filtered) {
      client.send(payload)
    }
  }

  return {
    extend: {
      logger: adapter
    }
  }
}

module.exports = Logger
