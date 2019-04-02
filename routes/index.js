let express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost:27017/TestFinalProject', { useNewUrlParser: true }, function (err, res) {
  if (err) { console.log('Failed to connect to ' + db); }
  else { console.log('Connected to ' + db); }
});
const path = require('path')
const Article = require('../models/article');
const User = require('../models/user');
const auth = require('../tools/authentication.js');
const passport = require('passport');
const ac = require('../tools/ac.js');
const admin = require('./api/admin');
const user = require('./api/user');
const multer = require('multer');
//////////////////////Upload image-Avater//////////////////////
const storage = multer.diskStorage({
  destination: "./public/images/image-Avaters",
  filename: function (req, file, cb) { cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname)); }
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
})
/////////////////////////////////Edite image-Avatar////////////////////////////////////////////////////
const storageEditAvatar = multer.diskStorage({
  destination: "./public/images/image-Avatars",
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  }
});
const uploadEditAvatar = multer({
  storage: storageEditAvatar,
  limits: { fileSize: 1000000 },
}).single("avatar");
///////////////////////////////Show all Article in ejs//////////////////////////////////////
/* GET home page. */
router.get('/', function (req, res) {
  Article.find({}, function (err, articles) {
    if (err) {
      res.render('index.ejs', {
        msg: err
      });
    }
    console.log(articles)
    res.render('index.ejs', {
      articles
    })
  })
});
/////////////////////////////////////////////////////////////////////
router.get('/panel*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../panel/build/') });
});
/////////////////////////////////////////////////////////////////////
// router.get('/createAdmin', (req, res)=>{
//   res.render('createAdmin')
// })
// router.post('/createAdmin', function (req, res) {
//   if (!req.body) return res.sendStatus(400);
//   upload(req, res, function (err) {
//     if (err) {
//         res.render("createAdmin", {
//             msg: err
//         })
//     } else {
//         if (req.file == undefined) {
//             res.render("createAdmin", {
//                 msg: "Error: No File Selected!"
//             })
//         } else {
//             const ADMIN = req.body;
//             const NEW_ADMIN = new User({
//               firstname: ADMIN.firstname,
//               lastname: ADMIN.lastname,
//               username: ADMIN.username,
//               password: ADMIN.password,
//               phone: ADMIN.phone,
//               sex: ADMIN.optradio,
//               role: 'admin',
//               pic: req.file.filename
//             })
//             NEW_ADMIN.save(function (err, user) {
//                 if (err)
//                     return console.log(err)
//                 res.render("createAdmin", {
//                     msg: "Admin Create!"
//                 })
//             })
//         }
//     }
// })
// })
//////////////////////////////////sign Up///////////////////////////////////
router.post('/signup', upload.single('avatar'), (req, res) => {
  const REQ_BODY1 = req.body;
  if (!REQ_BODY1.firstName || !REQ_BODY1.lastName || !REQ_BODY1.userName || !REQ_BODY1.password) {
    return res.json({ success: false, msg: "empty filed" })
  }
  else {
    let user = new User({
      avatar: req.file.filename,
      username: REQ_BODY1.userName,
      firstname: REQ_BODY1.firstName,
      lastname: REQ_BODY1.lastName,
      password: REQ_BODY1.password,
      phonenumber: REQ_BODY1.phoneNumber,
      sex: REQ_BODY1.sexxx,
      role: "user",
    })
    user.save((err, user) => {
      if (err) {
        console.log(err.message)
        return res.json({
          success: false,
          msg: "something wrong in user sign up\n" + err.message
        })
      }
      res.json({
        success: true,
        user
      })
    })
    console.log("shooooood" + user)
  }
})
///////////////////////////////////create Article//////////////////////////////////
// router.post('/createArticle', upload.single('picture'), (req, res) => {
//   const REQ_BODY2 = req.body;
//   if (!REQ_BODY2.title || !REQ_BODY2.text || !REQ_BODY2.date) {
//     return res.json({ success: false, msg: "empty filed " })
//   }
//   else {
//     let article = new Article({
//       title: REQ_BODY2.title,
//       text: REQ_BODY2.text,
//       date: REQ_BODY2.date,
//       // picture:REQ_BODY2.picture,
//       // picture: "../../../images/image-Articles/" + req.file.filename,
//       picture: req.file.filename,
//       author: req.user._id,
//     })
//     article.save((err, article) => {
//       if (err) {
//         console.log("error of articles" + err.message);
//         return res.json({
//           success: false,
//           msg: "something wrong in add article \n" + err.message
//         })
//       }
//       else {
//         res.json({
//           success: true,
//           article
//         })
//       }
//     })
//   }
// })
///////////////////////////////////show All Article////////////////////////////////
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
/////////////////////////////////////Log in//////////////////////////////////
router.post('/login', passport.authenticate('local-login'), (req, res) => {
  // console.log(req.body);
  res.json({
    success: true,
    msg: "you are logged in",
    user
  });
  console.log(user)
});
///////////////////////////////////Log Out/////////////////////////////////////////////
router.get('/logout', (req, res) => {
  req.logOut();
  res.json({
    msg: "you are logged out"
  });
});
/////////////////////////////Show Information Me////////////////////////////////////////
router.post('/whoAmI', (req, res) => {
  //router.get('/whoAmI', (req, res) => {
  User.find({ _id: req.user._id },
    (err, user) => {
      if (err) {
        return res.json({
          success: false,
          msg: "something wrong in get user info\n" + err.message
        })
      }
      res.json({
        success: true,
        user
      })
      console.log(user + "in  whoAmI server")
    })
})
///////////////////////show My Article////////////////////////
router.post('/showMyArticle', (req, res) => {
  Article.find({ author: req.user._id },
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
      console.log("my Article is" + contents);
    })
})
///////////////////////////////EditeProfile/////////////////////////////////
router.post('/editprofile', (req, res) => {
  User.update({ _id: req.user._id },
    {
      $set:
      {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        phonenumber: req.body.phonenumber,
        role: "user",
        sex: req.body.sex,
        avatar: req.body.avatar
      }
    },
    function (err, user) {
      if (err) {
        console.log(err.message)
        return res.json({
          success: false,
          msg: "something wrong in Edit\n" + err.message
        })
      }
      res.json({
        success: true,
        user
      })
      console.log("UPLOAD" + user)
    })
})
///////////////////////////////////Edit Avatar//////////////////////////////////////////
router.post('/editAvatar', (req, res) => {
  uploadEditAvatar(req, res, (err) => {
    if (err) {
      console.log(err.message);
      return res.json({
        success: false,
        msg: "something wrong in edit avatar."
      })
    }
    else {
      if (req.file == undefined) {
        return res.json({
          success: false,
          msg: "Please choose avatar."
        })
      }
      else {
        const PIC = req.file.filename;
        User.updateOne({ _id: req.user._id }, { avatar: PIC }, (err, user) => {
          if (err) {
            console.log(err.message);
            return res.json({
              success: false,
              msg: "Something wrong in save avatar."
            })
          }
          const img = req.body.avatar;
          const path = 'public/images/image-Avaters/' + img;
          console.log(path);
          fs.unlink(path, (err) => {
            if (err) {
              console.log(err)
              return
            }

            //file removed
          })
          res.json({
            success: true,
            msg: "Avatar successfully edited.",
            PIC
          })
        })
      }
    }
  })
})
///////////////////////////////Edite Article/////////////////////////////////
// router.post('/editArticle', (req, res) => {
//   Article.update({ _id: req.article._id },
//     {
//       $set:
//       {
//         tit: req.body.title,
//         text: req.body.text,
//         date: req.body.date,
//         picture: req.body.picture,
//       }
//     },
//     function (err, article) {
//       if (err) {
//         console.log(err.message)
//         return res.json({
//           success: false,
//           msg: "something wrong in Edit article \n" + err.message
//         })
//       }
//       res.json({
//         success: true,
//         article
//       })
//       console.log("UPLOAD" + article)
//     })
// })
///////////////////////////Delete Article/////////////////////////
router.post('/deleteArticle', (req, res) => {
  Article.deleteOne({ _id: req.body.id },
    function (err, content) {
      if (err) {
        console.log(err.message + "id ferestade nashod")
        return res.json({
          success: false,
          msg: "The article isnot deleted\n" + err.message
        })
      }
      res.json({
        success: true,
        msg: "The article is deleted\n",
        //   content
      })
      //console.log("Delete" + content)
    })
})
// ///////////////////////////Delete Article/////////////////////////
// router.post('/deleteArticle', function (req, res, next) {
//   Article.deleteOne({ _id: req.body.id }, function (err, content) {
//       if (err) {
//         console.log(err.message + "id ferestade nashod")
//         return res.json({
//           success: false,
//           msg: "The article isnot deleted\n" + err.message
//         })
//       }
//       res.json({
//         success: true,
//         msg: "The article is deleted\n",
//         content
//       })
//       //console.log("Delete" + content)
//     })
// })
////////////////////////////////////////////////
router.use('/api/admin', auth.isLogedIn, ac.roleBaseAccess(['admin']), admin);
router.use('/api/user', auth.isLogedIn, ac.roleBaseAccess(['admin', 'user']), user);
module.exports = router;
