const mongoose = require('mongoose');
const member = mongoose.model('Member');


const membersList = function(req, res) {
	console.log('in membersList');
member
	.find() 
	.exec((err, mem) => { 
		res 
			.status(200) 
			.json(mem); 
	});
};

 
/*
const eventsRead = function (req, res) {
  if (req.params && req.params.eventid) {  
    event
      .findById(req.params.eventid)
      .exec((err, ev) => {
        if (!ev) {
          res	
            .status(404) 
            .json({	
              "message": "eventID not found"
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
          .json(ev);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No eventid in request"
      });		
  }
};

const eventCreate = function(req, res) {
event.create({ 
name: req.body.name,
hour: req.body.hour,
day: req.body.day,
town: req.body.town
},
(err, ev) => { 
if (err) {
res
.status(400)
.json(err);
} else {
res
.status(201)
.json(ev);
}
});
};
*/


module.exports = {
membersList
};