const mongoose = require('mongoose')
const express = require('express');
const router  = express.Router();
const Brand = require('../models/brand');
const Product = require('../models/product')
const Store = require('../models/store')
const User = require('../models/user');
const Order = require('../models/order')

router.post('/:id/delete' , (req, res, next) => {
  Order.findByIdAndDelete(req.params.id)
  .then(order => {
    res.redirect('/review')
  })
  .catch(err => next(err))
})

module.exports = router