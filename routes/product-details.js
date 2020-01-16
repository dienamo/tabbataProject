const mongoose = require('mongoose')
const express = require('express');
const router  = express.Router();
const Brand = require('../models/brand');
const Product = require('../models/product')


router.get('/product-details/:id/choose-store', (req, res, next) => {
    Product.findById(req.params.id)
    .then(product => {
      console.log(product)
      res.render('order/choose-store' , {product});
    })
});

module.exports = router