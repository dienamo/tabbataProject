const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema ([{
  name : {type : String },
  address : {type : String },
  latlng : {type : Array, required : true },
}])

const Store = mongoose.model('Store' , storeSchema);

module.exports = Store