var config = require('config');
var http = config.https ? require('https') : require('http');
var url = require('url');

exports.get = function(endpoint, callback) {
	var options = {
		host: config.host,
		path: url.resolve('/api/relay/', endpoint),
		headers: {
			'X-APIKey': config.apikey
		}
	};

	http.request(options, function(response) {
		var str = '';

		//another chunk of data has been recieved, so append it to `str`
		response.on('data', function(chunk) {
			str += chunk;
		});

		//the whole response has been recieved, so we just print it out here
		response.on('end', function() {
			console.log(str);
		});
	}).end();
};