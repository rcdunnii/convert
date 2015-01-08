// getting-started.js

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://walnut:wRYTYBWs06VKYNuHP0UP@ds027751.mongolab.com:27751/chestnuts');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("opened connection to mongolab chestnuts");


		router.get('/', function(req, res) {
		 	res.send('ok');
		 });
		
		router.get('/nuts', function(req, res) {
			// mongoose.model('nuts').find(function(err,nuts){
			 Nuts.find({}, {}, function(err, docs){
			 		if (err) { console.log(err)
			 			return false;
			 		};
			 		// console.log(typeof docs);
			 		for (var i = 0; i < docs.length; i++) {
			 			// console.log(docs[0]);
			 			// return;
			 			var thisDoc = new Newnuts;
		
			 			thisDoc =  {
		             	// Newnuts.update({},  {			 
							"walnutID": docs[i].walnutID,
		    				"visibility": docs[i].visibility,
		    				"SirName":  docs[i].SirName,
		    				"Names": docs[i].Names,
		    				"FormalNames": docs[i].FormalNames,
		    				"Children": docs[i].Children,
		    				"Address" :
		      				[
		     					{"_id" : 1, "Line"	: docs[i].Addr1},
		     					{"_id" : 2, "Line"   : docs[i].Addr2},
		     					{"_id" : 3, "Line"	: docs[i].Addr3},
		     					{"_id" : 4, "Line"	: docs[i].Addr4}
		   	  				],
					 		"Email"  :
			 	 			[  {"_id" : 1, "Email"	: docs[i].Email1},
			 	 			   {"_id" : 2, "Email"	: docs[i].Email2},
			 	 			   {"_id" : 3, "Email"	: docs[i].Email3},
			 	 			],
					 		"Phone"  :
					 		 [ 
		 		 			   {"_id" : 1,	"Phone"  : docs[i].Phone1},
		 	   				   {"_id" : 2,	"Phone"  : docs[i].Phone2}
		 	 				],
		    				"Notes": docs[i].Notes,
		    				"Created": docs[i].Created,
		    				"Updated": docs[i].Updated
				 		}; /* thisDoc */
				 		// console.log(thisDoc);
				 		// return;
				 		thisDoc.save(function(err) {
			 				console.log(err);
			 			});
			 		};  /* for */
		 		});  /* find */
		
				res.send("ok, Finished creating newnuts collection"); 		     						       
				console.log("Finished creating newnuts collection");
		
				});   /* router get */ 
		
		module.exports = router;
});		


			//  		{upsert: true}, {multi: true},{w:0}, function(error, numUpdated, status) {
			//  	   		    if (!error) {
			//  	   		    	console.log("succesfully saved a newnut: " + numUpdated + " walnutID: " + doc.walnutID);
			//  	   		    	// return false;
			//  	   		      } else {
   // 					    	 console.log(error);  
	 	// 	}
   // // 					    	 return true; 						     			   		    
			//  	   		   	 }					
			//  		}); /* update */
			// 	}
			// // -----
			// // for (var i = 0; i < nuts.length; i++) {
			// // 	callback(nuts[i], function() {
			// // 	console.log(err);
			// // 		if (err){
			// // 			return console.log("Error at line 25 routes/index.js: " + err)	;
			// // 		} else {
			// // 			console.log("Added doc num: ", i)	
			// // 		}
			// // 	});
			// // }; /* for */ 
		

							

	// function callback(doc) {
		
	// 			    ;	/* Newnuts update */

	// }
	



	