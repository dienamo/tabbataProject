const mongoose = require('mongoose');
const express = require('express');
const router  = express.Router();
const Brand = require('../models/brand');
const Product = require('../models/product');
const Store = require('../models/store');
const User = require('../models/user');
const Order = require('../models/order');

router.get('/review' , (req, res, next) => {
  if (!req.user) {
    res.redirect('/signup'); // not logged-in
    return;
  }
  Order.find()
  .then(orders => {
    res.render('order/review', {orders});
  })
  .catch(err => next(err));
});

module.exports = router;
