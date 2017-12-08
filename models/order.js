var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var product = require('./product')

var orderSchema = new Schema({
  product: [{type: Schema.Types.Objectid, Ref: "Product"}]
});

module.exports = mongoose.model('Order', orderSchema);