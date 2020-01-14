const express = require('express');
const router  = express.Router();


router.get('/product-details/choose-store', (req, res, next) => {

  res.render('order/choose-store');
});

module.exports = router