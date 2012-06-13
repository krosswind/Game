/*
 * Module dependencies.
 */

var express = require('express');
var nowjs = require('now');
var async = require('async');
var util = require('util');


var app = require('express').createServer();


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.set('view options', { pretty: true });
});





// Routes
var routes = require('./routes');
app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/manage/:id', routes.manageid);


//start services
async.series([
  //connect to db

  // fire up web server
  function(callback) {
    app.listen(3000,callback);
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
  },

],
//callback error handler
function(err) {
  if (err) { console.error("Problem with starting background services; "+err); }
});

// initialize now.js
var everyone = nowjs.initialize(app);
console.log("now.js added to server app.");

// now functions

everyone.now.distributeMessage = function(message){
  everyone.now.receiveMessage(this.now.name, message);
};

















