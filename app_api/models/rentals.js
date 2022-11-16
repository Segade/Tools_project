const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
MemberID: {
type:String,
required: true
},
DVDID: {
type: String,
required: true
},
RentalDueDate: {
type: String,
required: true
}, 
Status: {
type: String,
'default': 'A'
}

});

mongoose.model('Rental', rentalSchema);