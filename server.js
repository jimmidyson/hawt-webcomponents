#!/bin/env node
//Get the environment variables we need.
var ipaddr  = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_NODEJS_PORT || 9000;

var express = require('express')
var app = express();

app.use(express.logger());
app.use(express.compress());

app.use(express.static(__dirname));
app.all('/*', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.listen(port, ipaddr);
console.log("Server running at http://" + ipaddr + ":" + port + "/");