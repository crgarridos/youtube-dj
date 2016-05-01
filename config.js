function Config(){
    this.host = "127.0.0.1";
    this.port = 2702;
}

Config.prototype.getFullUrl = function(https){
    "http" + (https?"s":"") + "://" + this.host + ":" + this.port + "/";
}