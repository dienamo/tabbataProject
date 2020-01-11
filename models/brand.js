const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema ({
  name : {type : String , required : true},
  imgPath : {type : String , default : 'http://clipart-library.com/images/ki85rq5kT.gif'},
})

const Brand = mongoose.model('Brand' , brandSchema);

module.exports = Brand