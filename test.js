var Logstash = require('logstash-client');
 
var logstash = new Logstash({
  type: 'tcp', // udp, tcp, memory 
  host: '192.168.99.100',
  port: 7132
});
logstash.send({bananas: "test"});
