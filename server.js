#!/bin/env node
//Get the environment variables we need.
var ipaddr  = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_NODEJS_PORT || 9000;

var express = require('express')
var app = express();

var morgan = require('morgan');
app.use(morgan('combined'));

var compression = require('compression');
app.use(compression({
    threshold: 512
}));

app.use(express.static(__dirname));
app.all('/*', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.listen(port, ipaddr);
console.log("Server running at http://" + ipaddr + ":" + port + "/");
