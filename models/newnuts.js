var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// registering our nuts schema with mongoose
/*
newnutsSchema1 = new Schema({
	 "_id": Schema.ObjectId,
	"walnutID": String,
    "visibility": Boolean,
    "SirName": String,
    "Names": String,
    "FormalNames": String,
    "Children": String,
    "Address" :
      [
     	{"_id":String, "Line" : String},
     	{"_id":String, "Line" : String},
     	{"_id":String, "Line" : String},
     	{"_id":String, "Line" : String}
   	  ],
	Email  : 
	 [  {"_id":String, "Email"	: String},
	    {"_id":String, "Email"	: String},
	 	{"_id":String, "Email"	: String},
	 ],
	Phone  :
	  [ 
 		{"_id":String, "Phone": String},
 	    {"_id":String, "Phone": String}
 	  ],
    "Notes": String,
    "Created": Date,
    "Updated": Date		
});

 newnutsSchema2 = new Schema({*/
    
newnutsSchema = new Schema({    
     "_id": Schema.ObjectId,
    "walnutID": String,
    "visibility": Boolean,
    "SirName": String,
    "Names": String,
    "FormalNames": String,
    "Children": String,
    "Address" : 
      [ {"_id": Schema.ObjectId},      
        {"street_address": String,         
         "city"          : String,
         "state"         : String,
         "country"       : String,
         "zip"           : String
       }
      ],       
    "Email" :
      [ {"_id": Schema.ObjectId},      
        {"Email" : String }              
      ],
    "Phone"  :
      [ {"_id": Schema.ObjectId},
        {"Phone" : String}            
      ],
    "Notes": String,
    "Created": Date,
    "Updated": Date     
});
Newnuts = mongoose.model('newnuts', newnutsSchema);
/* Newnuts2 = mongoose.model('newnuts2', newnutsSchema2); */
