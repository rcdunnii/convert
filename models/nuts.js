var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// registering our nuts schema with mongoose

nutsSchema = new Schema({
	 "_id": Schema.ObjectId,
	"walnutID": String,
    "visibility": Boolean,
    "SirName": String,
    "Names": String,
    "FormalNames": String,
    "Children": String,
    "Addr1": String,
    "Addr2": String,
    "Addr3": String,
    "Addr4": String,
    "Email1": String,
    "Email2": String,
    "Email3": String,
    "Phone1": String,
    "Phone2": String,
    "Notes": String,
    "Created": Date,
    "Updated": Date
});

Nuts = mongoose.model('nuts', nutsSchema);
