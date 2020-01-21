const mongoose = require('mongoose');
const express = require('express');
const router  = express.Router();
const Brand = require('../models/brand');
const Product = require('../models/product');

router.get('/search/brand-details' ,(req , res , next) => {
  Brand.findOne({name : req.query.name})
  .then(brandDetails => {
    res.render('brand/brand-details' , {brandDetails});
  });
});

module.exports = router;