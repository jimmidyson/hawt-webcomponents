#!/bin/env node
//Get the environment variables we need.
var ipaddr  = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_NODEJS_PORT || 9000;

var express = require('express')
var app = express();

app.use(express.static(__dirname + '/dist'));
app.use('/*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, ipaddr);
console.log("Server running at http://" + ipaddr + ":" + port + "/");
