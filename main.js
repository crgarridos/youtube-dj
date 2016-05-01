(function () {
    "use strict";

    // var Server = require('./server.class.js');

    // var server = new Server();
    require("./config.js");
    require("./server.js");

    var config = new Config();

    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', function(line){
        console.log("keyboard order: "+line);
        if(!isNaN(parseInt(line))){
            //server.playSong(Object.keys(server.clients)[0],line);
        }
    })
})();