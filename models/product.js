const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
  name : {type : String , required : true},
  type : {type : String , required : true},
  description : {type : String},
  reference : {type : String},
  size : {type : String, enum: ['small', 'medium', 'large', '1', '2', '3'] },
  sex : {type : String , enum : ['H' , 'F']},
  imgPath : {type : String , default : 'http://clipart-library.com/images/ki85rq5kT.gif'},
  brand : {type : Schema.Types.ObjectId, ref: 'Brand'},
  color : {type: String},
  washing : {type: String, enum: ['delicate', 'normal', 'whool'] },
  price : {type : Number , required : true},
  store : [{type : Schema.Types.ObjectId, ref: 'Store'}]
  //store : {type:  Schema.Types.ObjectId, ref: 'Store'}
})

const Product = mongoose.model('Product' , productSchema);

module.exports = Product;