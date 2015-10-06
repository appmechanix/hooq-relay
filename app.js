var config = require('config');
var network = require('./services/network');

console.log("hooq-relay, starting...");

console.log("Trying to get config from ", config.host)

network.get('config', function(err, data){
	
});
