module.exports = (function () {
     "use strict";

    var http = require('http'), 
        fs = require('fs'),
        url = require("url"), 
        open = require('open');

    var index;
    fs.readFile('./index.html', function(err, html) {
    	if (err) {
    		throw err;
    	}
    	index = html;
    });
    http.createServer(function(request, response) {
    	response.writeHeader(200, {
    		"Content-Type" : "text/html"
    	});
    	var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress || request.socket.remoteAddress || request.connection.socket.remoteAddress;
    	var args = url.parse(request.url, true).query;
    	console.log(JSON.stringify(args));
    	if (args.action && args.action === "download") {

    	}

    	console.log(ip);
    	// console.log(request);
    	response.write(index);
    	response.end();
    }).listen(1337);

    var full_url = config.full_url + "?server"

    open(full_url, function (err) {
      if (err) throw err;
        console.log('Server running at '+full_url);
    });

})();
