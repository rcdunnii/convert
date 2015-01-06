var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// /* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });
mongoose.connect('mongodb://walnut:wRYTYBWs06VKYNuHP0UP@ds027751.mongolab.com:27751/chestnuts');
 
 router.get('/', function(req, res) {
 	res.send('ok');
 });

router.get('/nuts', function(req, res) {
	mongoose.model('nuts').find(function(err,nuts){
		 res.send(nuts);
	});	
});

module.exports = router;
