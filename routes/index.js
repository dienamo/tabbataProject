const express = require('express');
const router  = express.Router();
const Brand = require('../models/brand');
const Product = require('../models/product')


/* GET home page */
router.get('/', (req, res, next) => {
  Brand.find()
  .then(brands => {
    res.render('index' , {brands});
  })
});

module.exports = router;
