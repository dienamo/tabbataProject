const mongoose = require('mongoose')
const express = require('express');
const router  = express.Router();
const Brand = require('../models/brand');
const Product = require('../models/product')
const Store = require('../models/store')
const User = require('../models/user');
const Order = require('../models/order')

router.get('/book/:orders' , (req, res, next) => {
  const product = req.params.id;
  const store = req.params.name;
  res.render('order/recap')
})

module.exports = router
