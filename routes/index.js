const path = require('path');
let express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost/FinalProjectTest1', { useNewUrlParser: true }, function (err, res) {
  if (err) { console.log('Failed to connect to ' + db); }
  else { console.log('Connected to ' + db); }
});
const Article = require('../models/article');
const User = require('../models/user');
const auth = require('../tools/authentication.js');
const passport = require('passport');
// const ac = require('../tools/ac.js');
//const uuid = require('node-uuid');
// const bodyParser = require('body-parser');
// const tools = require('../tools/general');
// const dashboard = require('./dashboard/dashboard');
// const admin = require('./api/admin');
// const user = require('./api/user');

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/panel*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../panel/build/') });
});

router.post('/createAdmin', function (req, res) {
  const user = new User({
    username: "admin",
    password: "admin",
    role: "admin"
  })
  user.save((err, user) => {
    if (err) {
      return res.json({
        success: false,
        msg: "something wrong in admin creation\n" + err.message
      })
    }
    res.json({
      success: true,
      user
    })
  })
})
router.post('/signup', (req, res) => {
  // console.log(req.body)
  if (!req.body.firstName || !req.body.lastName || !req.body.userName || !req.body.password) {
    return res.json({ success: false, msg: "empty filed" })
  }
  else {
    let user = new User({
      username: req.body.userName,
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      password: req.body.password,
      phonenumber: req.body.phoneNumber,
      role: "user",
      sex: req.body.sexxx,
    })
    user.save((err, user) => {
      if (err) {
        // console.log(err.message )
        return res.json({
          success: false,
          msg: "something wrong in user sign up\n" + err.message
        })
      }
      console.log("shooooood")
      res.json({
        success: true,
        user
      })
    })
  }
})
router.post('/profile', (req, res) => {
  // console.log(req.body)
  if (!req.body.title || !req.body.text || !req.body.date || !req.body.picture) {
    return res.json({ success: false, msg: "empty filed" })
  }
  else {
    let article = new Article({
      title: req.body.title,
      text: req.body.text,
      date: req.body.date,
      picture: req.body.picture,
    })
    article.save((err, article) => {
      if (err) {
        // console.log(err.message )
        return res.json({
          success: false,
          msg: "something wrong in add article \n" + err.message
        })
      }
      else {
        res.json({
          success: true,
          article
        })
        console.log("shooooood")
      }
    })
  }
})
router.post('/login', passport.authenticate('local-login'), (req, res) => {
  console.log(req.body);
  res.json({
    success: true,
    msg: "you are logged in"
  });
});
router.get('/logout', (req, res) => {
  req.logOut();
  res.json({
    msg: "you are logged out"
  });
});
// router.use('/api/admin', auth.isLogedIn, ac.roleBaseAccess(['admin']),admin);
// router.use('/api/user', auth.isLogedIn, ac.roleBaseAccess(['admin', 'user']), user);
module.exports = router;
