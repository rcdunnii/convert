var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// registering our nuts schema with mongoose

newnutsSchema = new Schema({
	 "_id": Schema.ObjectId,
	"walnutID": String,
    "visibility": Boolean,
    "SirName": String,
    "Names": String,
    "FormalNames": String,
    "Children": String,
    "Address" :
      [
     	{"_id":Schema.ObjectId, "Line" : String},
     	{"_id":Schema.ObjectId, "Line" : String},
     	{"_id":Schema.ObjectId, "Line" : String},
     	{"_id":Schema.ObjectId, "Line" : String}
   	  ],
	Email  : 
	 [  {"_id":Schema.ObjectId, "Email"	: String},
	    {"_id":Schema.ObjectId, "Email"	: String},
	 	{"_id":Schema.ObjectId, "Email"	: String},
	 ],
	Phone  :
	  [ 
 		{"_id":Schema.ObjectId, "Phone": String},
 	    {"_id":Schema.ObjectId, "Phone": String}
 	  ],
    "Notes": String,
    "Created": Date,
    "Updated": Date		
});

 Newnuts = mongoose.model('Newnuts', newnutsSchema);
