// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://walnut:wRYTYBWs06VKYNuHP0UP@ds027751.mongolab.com:27751/chestnuts');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (index) {
  console.log("opened connection to mongolab chestnuts");
});


