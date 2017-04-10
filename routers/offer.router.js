const express = require('express');
const router = express.Router();
const Offer = require('../models/offer.model.js');
const _ = require('lodash');
const signature = process.env.SIGNATURE || require('../secrets.js').SIGNATURE;
const expressJWT = require('express-jwt');
const auth = expressJWT({
  secret: signature,
  userProperty: 'payload'
});

// server.get("/weather/:lat,:lon", function(request, response) {
//   var url = `https://api.darksky.net/forecast/${darkskyAPIKey}/${request.params.lat},${request.params.lon}`;
//   axios.get(url)
//       .then(function(res){ // success
//         return res.data;
//       })
//       .then(function(data){
//         response.send(data);
//       })
//       .catch(function(error){ // failure
//         console.log(error);
//       });
// });

router.get("/offers", function(req, res){
  axios.get("/offers")
      .then(function(response){
        return response.data;
      })
      .then(function(data){
        response.send(data);
      })
      .catch(function(error){
        console.log(error);
      });
});

router.post('/offers', function(req, res){
  var offer = new Offer(req.body);
  offer.save(function(err, offer){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else{
      res.status(201).json({
        msg: 'Success'
      });
    }
  });
});



module.exports = router;
