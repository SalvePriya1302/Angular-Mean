const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
  product: {type: String},
  instock: {type: String},
  warehouse: {type: String}

});

 module.exports = mongoose.model('Product', productSchema);
