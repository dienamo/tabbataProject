const express = require('express');
const router  = express.Router();
const passport = require("passport");
const nodemailer = require('nodemailer');
const User = require("../models/user");


const bcrypt = require("bcrypt");
const bcryptSalt = 10;


/* GET home page */

router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});

router.post('/signup' , (req , res , next) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname; 
  const password = req.body.password;
  const username = req.body.username;
  const phonenumber = req.body.phonenumber;
  const street = req.body.street;
  const zipcode = req.body.zipcode;
  const city = req.body.city;
  const country = req.body.country;

  if (firstname === "" || lastname === "" || username === "") {
    res.render('auth/signup' , {errorMessage: "Veuillez entrer un nom, prénom, adresse mail"});
    return;
  }

  User.findOne({username})
  .then(user => {
    if (user) {
      res.render('auth/signup' , {errorMessage: "Un utilisateur est déjà enregistré avec cette email"});
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    
    User.create({
      firstname : firstname,
      lastname : lastname,
      password : hashPass,
      username : username,
      phonenumber : phonenumber,
      street : street,
      zipcode : zipcode,
      city : city,
      country : country,
    }) 
    .then(user => {
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'nicolas.zysermann@gmail.com',
    pass: process.env.pass
    }
    });
    const mailOptions = {
      from: 'nicolas.zysermann@gmail.com',
      to: user.username,
      subject: 'Votre compte client Tabbata.com a été créé.',
      text: `Bienvenue ${user.firstname},

      Nous vous confirmons la création de votre compte client sur Tabbata.com.
      Voici l’identifiant vous permettant d’accéder à votre espace personnel :
      
      Votre identifiant : ${user.username}
    
      Vous bénéficiez désormais d’un espace personnel sur notre site qui vous permettra de suivre vos commandes
      
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
      res.redirect('/login');
    })
    .catch(err => next(err));
    
  });
});

router.get("/login", (req, res, next) => {
  res.render("auth/login" , { "errorMessage": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash : true
}));

//ROUTE POUR GOOGLE

router.get("/auth/google", passport.authenticate("google", {
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email"
  ]
}));
router.get("/auth/google/callback", passport.authenticate("google", {
  successRedirect: "/",
  failureRedirect: "/login"
}));

//ROUTE POUR FACEBOOK

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback', passport.authenticate('facebook', { 
    successRedirect: '/',
    failureRedirect: '/login' }));

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});


module.exports = router;