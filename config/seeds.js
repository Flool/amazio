var mongoose=require('mongoose');
require('./database')
var product=require('../models/product');
var productdata=require('./productdata');

product.remove({}).then( () => {
  return product.create(productdata)
})
.then((product) => {
  console.log(products)
  mongoose.connection.close()
  process.exit()
})