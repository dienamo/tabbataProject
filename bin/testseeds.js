Product.findById(req.params.id)
.then(product => {
  Store.findById(product.store)
  .then(stores => {
    res.render('order/choose-store' , {product , stores});
  }).catch(err => next(err));
}).catch(err => next(err));