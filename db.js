var mongoose = require('mongoose');
mongoose.connect('mongodb://walnut:wRYTYBWs06VKYNuHP0UP@ds027751.mongolab.com:27751/chestnuts');
module.exports =  mongoose.connection;