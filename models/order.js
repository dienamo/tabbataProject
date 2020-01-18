const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema ([{
  store : {type : String},
  product : {type : String},
  date : {type : String},
  time : {type : String}
}])

const Order = mongoose.model('Order' , orderSchema);

module.exports = Order