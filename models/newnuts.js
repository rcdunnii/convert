var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// registering our nuts schema with mongoose

var newnutsSchema = new Schema({
	 "_id": {
        "$oid": Schema.ObjectId
    },
	"walnutID": String,
    "visibility": Boolean,
    "SirName": String,
    "Names": String,
    "FormalNames": String,
    "Children": String,
    "Address" =
      [
     	{Line1  : String},
     	{Line2  : String},
     	{Line3	: String},
     	{Line4	: String}
   	  ],
	Email  = 
	 [  {Email1	: String},
	    {Email2	: String},
	 	{Email3	: String},
	 ],
	Phone  =
	  [ 
 		{Phone1: String},
 	    {Phone2: String}
 	  ],
    "Notes": String,
    "Created": Date,
    "Updated": Date		
});

mongoose.model('newnuts', newnutsSchema);