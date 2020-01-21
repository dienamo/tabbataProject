const mongoose = require('mongoose')
const express = require('express');
const router  = express.Router();
const Brand = require('../models/brand');
const Product = require('../models/product')
const Store = require('../models/store')
const User = require('../models/user');
const Order = require('../models/order')
const nodemailer = require('nodemailer');

router.post('/book/orders' , (req , res , next) => {
  if (!req.user) {
    res.redirect('/signup'); // not logged-in
    return;
  }
  const date = req.body.date;
  const time = req.body.time;
  Order.find()
  .populate('product')
  .then(orders => {
    const updatedOrders = orders.map(order => {
      const updatedOrder = order
      updatedOrder.date = date;
      updatedOrder.time = time;
      return updatedOrder
    })
    console.log(orders)
    const place = orders[0].store
    const listeEmail = []
    orders.forEach(order => {
      order = order.product.name
      listeEmail.push(order)
    })
    /*NODEMAILER START*/
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
      user: 'moustaphadiena@gmail.com',
      pass: process.env.pass
      }
      });
      const mailOptions = {
        from: 'moustaphadiena@gmail.com',
        to: req.user.username,
        subject: 'Votre essayage a bien été programmé.',
        html: `<h1>Bonjour ${req.user.firstname}</h1>,
  
        Nous vous confirmons la programmation de votre essayage
        
        Votre commande : 

        Le ${date} à ${time} au ${place}
        
        Nous vous conseillons de conserver cet email.
        A bientôt sur Tabbata.com
        L'équipe Tabbata`
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      /*NODEMAILER END*/
    res.render('order/recap' , {
      updatedOrders,
      username : req.user.firstname,
      t0: updatedOrders[0].time,
      d0: updatedOrders[0].date,
      place
    })
  })
})


module.exports = router
