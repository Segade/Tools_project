const mongoose = require('mongoose');
const mem = mongoose.model('Member');

 
const membersReadOne = function (req, res) {
    if (req.params && req.params.MemberID) {
        members 
 
        .findById(req.params.MemberID)
        .exec((err, Members) => {
          if (!Members) {
            res	
              .status(404) 
              .json({	
                "message": "MemberID not found"
              });	 
            return;
          } else if (err) {
            res	
              .status(404) 
              .json(err); 
            return; 	
          }
          res		
            .status(200)
            .json(Members);
        });
    } 
  };
 

const membersLogin = function(req,res){
    if (req.params && req.params.Email) {
        mem
        .find({Email: req.params.Email})
        .exec((err, Email) => {
          if (!Email) {
            res	
              .status(404) 
              .json({	
                "message": "Email not found"
              });	 
            return;
          } else if (err) {
            res	
              .status(404) 
              .json(err); 
            return; 	
          }
          res		
            .status(200)
            .json(Email);
        });
 
}
}


const membersList = function(req, res) {
	console.log('in memberList');
members
	.find() 
	.exec((err, mem) => { 
		res 
			.status(200) 
			.json(mem); 
	});
};



 
const memberCreate = function(req, res) {
member.create({ 
Forename: req.body.forename,
Lastname: req.body.lastname,
Password: req.body.password,
Eircode: req.body.eircode,
Phone: req.body.phone,
Email: req.body.email,
DOB: req.body.dob,
CardDetails: req.body.carddetails,
ExpireDate: req.body.expiredate,
CVV: req.body.cvv,

}, (err, member) => { 
if (err) {
res
.status(400)
.json(err);
} else {
res
.status(201)
.json(member);
}
});
};
 
 



  
 

  
module.exports = {
//    membersReadOne,
 
memberCreate,
 membersList,
 membersReadOne,
 
    membersLogin
  };