'use strict'

var Mock = require('mock-require')
var Seneca = require('seneca')
var Lab = require('lab')
var lab = exports.lab = Lab.script()
var Code = require('code')
var expect = Code.expect


var logstash = {
  host: 'localhost',
  port: 7132,
  type: 'udp'
}

var senecaConfig = {legacy: {logging: false}, 'logstash-logger': logstash}

lab.test('configuration is passed to logstash-client', function (done) {
  var mockedLogstashClient = function (config) {
    this.called = false
    expect(config).to.equal(logstash)
  }

  mockedLogstashClient.prototype.send = function (payload) {
    if (!this.called) {
      done()
      this.called = true
    }
  }

  Mock('logstash-client', mockedLogstashClient)
  Mock.reRequire('../logstash')

  Seneca(senecaConfig).use(require('../logstash'))
})
