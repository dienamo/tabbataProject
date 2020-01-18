const mongoose = require('mongoose');
const express = require('express');
const router  = express.Router();
const Brand = require('../models/brand');
const Product = require('../models/product');
const Store = require('../models/store');
const User = require('../models/user');
const Order = require('../models/order');

router.get('/review' , (req, res, next) => {
  Order.find()
  .populate('user')
  .populate('product')
  .then(orders => {
    const userOrders = []
    orders.forEach(order => {
      if(order.user.id === req.user.id) {
        userOrders.push(order)
      }
    })
    console.log(userOrders)
    res.render('order/review', {userOrders})
  })
  .catch(err => next(err));
});

module.exports = router;
