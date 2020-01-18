const mongoose = require('mongoose')
const express = require('express');
const router  = express.Router();
const Brand = require('../models/brand');
const Product = require('../models/product')
const Store = require('../models/store')
const User = require('../models/user');
const Order = require('../models/order')

router.post('/book/orders' , (req , res , next) => {
  const date = req.body.date;
  const time = req.body.time;
  Order.find()
  .then(orders => {
    console.log(orders)
    const updatedOrders = orders.map(order => {
      const updatedOrder = order
      updatedOrder.date = new Date(date);
      updatedOrder.time = time;
      return updatedOrder
    })
    res.render('order/recap' , {
      updatedOrders,
      t0: updatedOrders[0].time,
      d0: updatedOrders[0].date
    })
  })
})


module.exports = router
