const path = require('path');
let express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost:27017/FinalProjectTest1', { useNewUrlParser: true }, function (err, res) {
  if (err) { console.log('Failed to connect to ' + db); }
  else { console.log('Connected to ' + db); }
});
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/FinalProjectTest1"; // mydatabase is the name of db 
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
// console.log("Database created!");
//   db.close();
// });
const Article = require('../models/article');
const User = require('../models/user');
const auth = require('../tools/authentication.js');
const passport = require('passport');
const ac = require('../tools/ac.js');
//const uuid = require('node-uuid');
// const bodyParser = require('body-parser');
// const tools = require('../tools/general');
// const dashboard = require('./dashboard/dashboard');
const admin = require('./api/admin');
const user = require('./api/user');
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
  const REQ_BODY1 = req.body;
  if (!REQ_BODY1.firstName || !REQ_BODY1.lastName || !REQ_BODY1.userName || !REQ_BODY1.password) {
    return res.json({ success: false, msg: "empty filed" })
  }
  else {
    let user = new User({
      username: REQ_BODY1.userName,
      firstname: REQ_BODY1.firstName,
      lastname: REQ_BODY1.lastName,
      password: REQ_BODY1.password,
      phonenumber: REQ_BODY1.phoneNumber,
      role: "user",
      sex: REQ_BODY1.sexxx,
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
router.post('/createArticle', (req, res) => {
  // console.log(req.body)
  const REQ_BODY2 = req.body;
  if (!REQ_BODY2.title || !REQ_BODY2.text || !REQ_BODY2.date || !REQ_BODY2.picture) {
    return res.json({ success: false, msg: "empty filed" })
  }
  else {
    let article = new Article({
      title: REQ_BODY2.title,
      text: REQ_BODY2.text,
      date: REQ_BODY2.date,
      picture: REQ_BODY2.picture,
      author: req.user._id,
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
router.post('/showMyArticle', (req, res) => {
  Article.find({author: req.user._id},
      (err, contents) => {
          if (err) {
              return res.json({
                  success: false,
                  msg: "something wrong in get user info\n" + err.message
              })
          }
          res.json({
              success: true,
              contents
             
          })
          console.log(contents);
      })
})

router.post('/showAllArticle', (req, res) => {
  Article.find({},
      (err, content) => {
          if (err) {
              return res.json({
                  success: false,
                  msg: "something wrong in get user info\n" + err.message
              })
          }
          res.json({
              success: true,
              content
          })
      })
})
router.post('/login', passport.authenticate('local-login'), (req, res) => {
  // console.log(req.body);
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
router.use('/api/admin', auth.isLogedIn, ac.roleBaseAccess(['admin']),admin);
router.use('/api/user', auth.isLogedIn, ac.roleBaseAccess(['admin', 'user']), user);
module.exports = router;
