const express = require('express');
const router = express.Router();
const axios = require('axios');
const Offer = require('../models/offer.model.js');
const _ = require('lodash');
const signature = process.env.SIGNATURE || require('../secrets.js').SIGNATURE;
// const expressJWT = require('express-jwt');
// const auth = expressJWT({
//   secret: signature,
//   userProperty: 'payload'
// });

router.get('/offers', function(req, res){
  Offer.find({}, function(err, offers){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        offers: offers
      });
    }
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

router.get('/offers/:id',  function(req, res){
  Offer.find({_id: req.params.id}, function(err, offers){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        offers: offers
      });
    }
  });
});


module.exports = router;
