const mongoose = require('mongoose');

const dvdSchema = new mongoose.Schema({
DVDID: {
type:String,
required: true
},
Title: {
type: String,
required: true
},
Genre: {
type: String,
required: true
}, 
Duration: {
type: String,
require: true
},
Rating: {
type: String,
require: true
},
Cost: {
String,
require: true
},
Status: {
type: String,
require: true
}
});

mongoose.model('Dvd', dvdSchema);