'use strict'

var Logstash = require('logstash-client')

function Logger() {}

Logger.preload = function() {
  var options = this.options()

  var client = new Logstash(options['logstash-logger'])
  function adapter(context, payload) {
    client.send(payload)
  }

  return {
    extend: {
      logger: adapter
    }
  }
}

module.exports = Logger
