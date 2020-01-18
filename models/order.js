const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema ([{
  user : {type : Schema.Types.ObjectId, ref: 'User'},
  store : {type : String},
  product : {type : Schema.Types.ObjectId, ref: 'Product'},
  date : {type : String},
  time : {type : String}
}])

const Order = mongoose.model('Order' , orderSchema);

module.exports = Order;