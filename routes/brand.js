const mongoose = require('mongoose')
const express = require('express');
const router  = express.Router();
const Brand = require('../models/brand');
const Product = require('../models/product')

router.get('/brand/:id' , (req , res , next) => {
  Product.find({
    'brand' : { $in : [
      mongoose.Types.ObjectId(req.params.id)
    ]
    }
  })
  .then(items => {
    res.render('brand/index' , {items})
  })
})

router.get('/brand/:id/product-details' , (req, res, next) => {
  Product.findById(req.params.id)
  .then(product => {
    res.render('brand/product-details' , {product})
  })
})

module.exports = router