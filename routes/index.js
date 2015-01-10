// getting-started.js

var express = require('express');
var router = express.Router();
var db =  require('../db');
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function () {
 /* var db = mongoose.connection;*/
 var newcollection = db.collection("newnuts");
 console.log("opened connection to mongolab chestnuts");
  


		router.get('/', function(req, res) {
		 	res.send('ok');
		 });
		
		router.get('/nuts', function(req, res) {
				// mongoose.model('nuts') schema "Nuts" ->find(function(err,nuts)							 
			 	Nuts.find().exec(function(err, docs) { /* use mongoose schema model Nuts to pull from nuts collection all records */
			 		if (err) { console.log(err)	} else {
			 			sendToNewNuts(docs);
			 		}
				});  /* find */
				

				function sendToNewNuts(docs) { /* conveert found docs to new schema Newnuts, put them into array and send to newnuts collection */
					
					var thisDocArr = [];

					for (var i = 0; i < docs.length; i++) {

			 			var thisDoc = ("thisDoc_" + i);					 			

			 			thisDoc = new Newnuts;
						
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
		     					{"_id" : 2, "Line"  : docs[i].Addr2},
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
			 		
			 			thisDocArr.push(thisDoc);  // put new doc into array

		 			}; /* for */
		 			    /* mongoose update fails - had to use node driver which adds whole array of docs! */
						newcollection.insert(thisDocArr, function(err, records) {
							 if (err) {
							 	return handleError(err);
							  } else {
							   	res.send("Inserted " + thisDocArr.length + " documents into newnuts collection of chestnuts database")
							   	res.end();
							   	// db.close();
							  }
						});
						
				}; /* sendnewnuts */
					
							
		});   /* get '/'  */

});   /* db open */

module.exports = router;
		
	