const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  firstname : {type : String },
  lastname : {type : String },
  password : {type : String },
  username : {type : String },
  imgPath : {type : String , default : 'http://clipart-library.com/images/ki85rq5kT.gif'},
  phonenumber : {type: String},
  orders : [{type : Schema.Types.ObjectId, ref: 'Order'}],
  address : {
    street : String,
    zipcode : String,
    city : String,
    country : String
  },
  googleID: {type :String}
} , 
{timestamps : true});

const User = mongoose.model('User' , userSchema);

module.exports = User;