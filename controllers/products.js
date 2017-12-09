var Product = require('./../models/product');

function index(req, res) {
  console.log('In index action')
  Product.find({}, function(err, data) {
    console.log('yeehaw')
    res.json(data)
  })
}

function addItem(req, res) {

}

function deleteItem(req, res) {

}
// add

// remove


// search by new


module.exports = {
  index
}