var config = require('config');
var async = require('async');

var network = require('./services/network');

console.log("hooq-relay, starting...");
console.log("Trying to get config from ", config.host)

async.waterfall([
	function(callback) {
		network.get('relay/config', function(err, data) {
			config.config = data;
			callback();
		});
	}, function(callback){
		network.get('webhooks', function(err, data) {
			config.webhooks = data;
			callback();
		});
	}],
	function(err, callback) {
		console.log(config.webhooks);
	}
);