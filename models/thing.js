const mongoose = require('mongoose');

const thingShema = mongoose.Schema({
  title: {type: 'string', required : true},
  description: {type: 'string', required : true},
  imageUrl: {type: 'string', required : true},
  price: {type: 'string', required : true},
  userId: {type: 'string', required : true},
});

module.exports = mongoose.model('Thing', thingShema)