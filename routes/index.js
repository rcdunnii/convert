// getting-started.js

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectID = require('mongodb').ObjectID;

var db =  require('../db');
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function () {
 /* var db = mongoose.connection;*/
 var newcollection1 = db.collection("newnuts1");
 var newcollection2 = db.collection("newnuts2");

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
					
					var thisDocArr1  = [];
					var thisDocArr2  = [];

					for (var i = 0; i < docs.length; i++) {

			 			// var thisDoc = ("thisDoc_" + i);					 			

			 			thisDoc1 = new Newnuts1;
			 			thisDoc2 = new Newnuts2;
						
			 			thisDoc1 =  {
		             	// Newnuts.update({},  {			 
							"walnutID": docs[i].walnutID,							
		    				"visibility": docs[i].visibility,
		    				"SirName":  docs[i].SirName,
		    				"Names": docs[i].Names,
		    				"FormalNames": docs[i].FormalNames,
		    				"Children": docs[i].Children,
		    				"Address" :
		      				[
		     					{"_id" : "1", "Line"	: docs[i].Addr1},
		     					{"_id" : "2", "Line" 	: docs[i].Addr2},
		     					{"_id" : "3", "Line"	: docs[i].Addr3},
		     					{"_id" : "4", "Line"	: docs[i].Addr4}
		   	  				],
					 		"Email"  :
			 	 			[  {"_id" : "1", "Email"	: docs[i].Email1},
			 	 			   {"_id" : "2", "Email"	: docs[i].Email2},
			 	 			   {"_id" : "3", "Email"	: docs[i].Email3},
			 	 			],
					 		"Phone"  :
					 		 [ 
		 		 			   {"_id" :"1",	"Phone"  : docs[i].Phone1},
		 	   				   {"_id" :"2",	"Phone"  : docs[i].Phone2}
		 	 				],
		    				"Notes": docs[i].Notes,
		    				"Created": docs[i].Created,
		    				"Updated": docs[i].Updated
				 		}; /* thisDoc */


				 		thisDoc2 =  {
		             	// Newnuts.update({},  {			 
							"walnutID": docs[i].walnutID,							
		    				"visibility": docs[i].visibility,
		    				"SirName":  docs[i].SirName,
		    				"Names": docs[i].Names,
		    				"FormalNames": docs[i].FormalNames,
		    				"Children": docs[i].Children,
		    				"Address" : {
		    					"_id": ObjectId(),
		      				[
		      					
		     					{"Line"	: docs[i].Addr1},
		     					{"Line" : docs[i].Addr2},
		     					{"Line"	: docs[i].Addr3},
		     					{"Line"	: docs[i].Addr4}
		   	  				]
		   	  							},
					 		"Email"  :
			 	 			[ 
			 	 			   
			 	 			   {"Email"	: docs[i].Email1},
			 	 			   {"Email"	: docs[i].Email2},
			 	 			   {"Email"	: docs[i].Email3},
			 	 			],
					 		"Phone"  :
					 		 [ 
					 		   
		 		 			   {"Phone"  : docs[i].Phone1},
		 	   				   {"Phone"  : docs[i].Phone2}
		 	 				],
		    				"Notes": docs[i].Notes,
		    				"Created": docs[i].Created,
		    				"Updated": docs[i].Updated
				 		}; /* thisDoc */
			 		
			 			thisDocArr1.push(thisDoc1);  // put new doc into array
			 			thisDocArr2.push(thisDoc2);

		 			}; /* for */
		 			    /* mongoose update fails - had to use node driver which adds whole array of docs! */
						newcollection1.insert(thisDocArr1, function(err, records) {
							 if (err) {
							 	return handleError(err);
							  } else {
							   	// res.send("Inserted " + thisDocArr1.length + " documents into newnuts collection of chestnuts database")
							   	// res.end();
							   	// db.close();
							  }
						});

						newcollection2.insert(thisDocArr2, function(err, records) {
							 if (err) {
							 	return handleError(err);
							  } else {
							   	res.send("Inserted " + records.length + " documents into newnuts collection of chestnuts database")
							   	res.end();
							   	// db.close();
							  }
						});
						
				}; /* sendnewnuts */
					
							
		});   /* get '/'  */

});   /* db open */

module.exports = router;
		
	