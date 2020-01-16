require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session    = require("express-session");
const MongoStore = require('connect-mongo')(session);

const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");
const User = require('./models/user.js')
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

mongoose
  .connect('mongodb://localhost/tabbataproject', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(flash());


// default value for title local
app.locals.title = 'Tabbata - Venez Essayez..';

app.use(session({
  secret: "our-passport-local-strategy-app",
  store: new MongoStore( { mongooseConnection: mongoose.connection }),
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});
passport.deserializeUser((id, cb) => {
  User.findById(id)
    .then(user => cb(null, user))
    .catch(err => cb(err))
  ;
});

passport.use(new LocalStrategy(
  {passReqToCallback: true},
  (...args) => {
    const [req,,, done] = args;

    const {username, password} = req.body;

    User.findOne({username})
      .then(user => {
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
          
        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false, { message: "Incorrect password" });
        }
    
        done(null, user);
      })
      .catch(err => done(err))
    ;
  }
));

//SE CONNECTER AVEC GOOGLE

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.googleclientID,
      clientSecret: process.env.googleclientSecret, 
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // to see the structure of the data in received response:
      console.log("Google account details:", profile);

      User.findOne({ googleID: profile.id })
        .then(user => {
          if (user) {
            done(null, user);
            return;
          }

          User.create({ googleID: profile.id })
            .then(newUser => {
              done(null, newUser);
            })
            .catch(err => done(err))
          ;
        })
        .catch(err => done(err))
      ;
    }
  )
);

//SE CONNECTER AVEC FACEBOOK

passport.use(new FacebookStrategy({
  clientID: process.env.fbclientID,
  clientSecret: process.env.fbclientSecret,
  callbackURL: "/auth/facebook/callback"
},
(accessToken, refreshToken, profile, done) => {
  // to see the structure of the data in received response:
  console.log("Google account details:", profile);

  User.findOne({ facebookID: profile.id })
    .then(user => {
      if (user) {
        done(null, user);
        return;
      }

      User.create({ facebookID: profile.id })
        .then(newUser => {
          done(null, newUser);
        })
        .catch(err => done(err))
      ;
    })
    .catch(err => done(err))
  ;
})
);


const index = require('./routes/index');
app.use('/', index);

const router = require("./routes/auth");
app.use('/', router);

const brandRouter = require("./routes/brand");
app.use('/', brandRouter);

const searchRouter = require("./routes/search");
app.use('/', searchRouter);

const orderRouter = require("./routes/product-details");
app.use('/', orderRouter);


module.exports = app;
