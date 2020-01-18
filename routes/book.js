const mongoose = require('mongoose')
const express = require('express');
const router  = express.Router();
const Brand = require('../models/brand');
const Product = require('../models/product')
const Store = require('../models/store')
const User = require('../models/user');
const Order = require('../models/order')

router.get('/product-details/:id/choose-store/:name/book' , (req, res, next) => {
    const product = req.params.id;
    const store = req.params.name;
    console.log('le store est..............' ,store)
    Order.create({
      product : product,
      store : store,
    })
    .then(order => {
      Order.find()
      .then(orders => {
        res.render('order/book' , {orders})
      })
    })
    .catch(err => next(err))
  })


  module.exports = router
