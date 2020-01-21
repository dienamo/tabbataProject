const mongoose = require('mongoose');
const express = require('express');
const router  = express.Router();
const Brand = require('../models/brand');
const Product = require('../models/product');
const Store = require('../models/store');


router.get('/product-details/:id/choose-store', (req, res, next) => {
  if (!req.user) {
    res.redirect('/signup'); // not logged-in
    return;
  }
    Product.findById(req.params.id)
    .populate('store')
    .then(product => {
      const stores = product.store[0];
      res.render('order/choose-store' , {product , stores});
    }).catch(err => next(err));
});

module.exports = router;