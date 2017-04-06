var mongoose = require('mongoose');

var offerSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  requestAmount: {
    type: String,
    default: 0
  },
  person: {
    type: String,
    required: true
  }
});

// postSchema.pre('findOneAndUpdate', function(){
//   this.update({}, { $set: { updated: Date.now() }});
// });

var Offer = mongoose.model('Offer', offerSchema);
module.exports = Offer;
