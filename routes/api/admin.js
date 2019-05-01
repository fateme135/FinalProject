var express = require('express');
var router = express.Router();
const User = require('../../models/user');
const Article = require('../../models/article');
const multer = require('multer');
const path = require('path')
//////////////////////Upload image-Avater//////////////////////
// const storage = multer.diskStorage({
//   destination: "./public/images/image-Avaters",
//   filename: function (req, file, cb) { cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname)); }
// });
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 },
// })

//////////////////////////////////////////////////////////////////////////////
router.post('/getAllUsers', (req, res)=>{
    User.find({}, (err, users)=>{
        if(err){
            return res.json({
                success: false,
                msg: "something wrong in user creation\n" + err.message
            })
        }
        res.json({
            success: true,
            users
        })
        console.log(users)
    })
})
///////////////////////////////////show All Article////////////////////////////////
router.post('/showAllArticles', (req, res) => {
  Article.find({},
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
      console.log("articles#########"+contents)
    })
    .populate('author');
})
///////////////////////////Delete user/////////////////////////
router.post('/deleteuser', (req, res) => {
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
      })

    })
})
////////////////////////////////////////////////////////////////
// router.post('/createUser', upload.single('avatar'), (req, res) => {
//   const REQ_BODY1 = req.body;
//   if (!REQ_BODY1.firstName || !REQ_BODY1.lastName || !REQ_BODY1.userName || !REQ_BODY1.password) {
//     return res.json({ success: false, msg: "empty filed" })
//   }
//   else {
//     let user = new User({
//       avatar: req.file.filename,
//       username: REQ_BODY1.userName,
//       firstname: REQ_BODY1.firstName,
//       lastname: REQ_BODY1.lastName,
//       password: REQ_BODY1.password,
//       phonenumber: REQ_BODY1.phoneNumber,
//       sex: REQ_BODY1.sexxx,
//       role: "user",
//     })
//     user.save((err, user) => {
//       if (err) {
//         console.log(err.message)
//         return res.json({
//           success: false,
//           msg: "something wrong in user sign up\n" + err.message
//         })
//       }
//       res.json({
//         success: true,
//         user
//       })
//     })
//     console.log("shooooood" + user)
//   }
// })
///////////////////////////////EditeProfile/////////////////////////////////
// router.post('/editprofile', (req, res) => {
//   User.update({ _id: req.user._id },
//     {
//       $set:
//       {
//         username: req.body.username,
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         password: req.body.password,
//         phonenumber: req.body.phonenumber,
//         role: "user",
//         sex: req.body.sex,
//         avatar: req.body.avatar
//       }
//     },
//     function (err, user) {
//       if (err) {
//         console.log(err.message)
//         return res.json({
//           success: false,
//           msg: "something wrong in Edit\n" + err.message
//         })
//       }
//       res.json({
//         success: true,
//         user
//       })
//       console.log("UPLOAD" + user)
//     })
// })

///////////////////////////Delete Article/////////////////////////
// router.post('/deleteArticle', (req, res) => {
//   Article.deleteOne({ _id: req.body.id },
//     function (err, content) {
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
//         //   content
//       })
//       //console.log("Delete" + content)
//     })
// })
///////////////////////////////////////////////////////////
// router.post('/test', (req, res)=>{
//     res.json({
//         success: true
//     })
// })

module.exports = router;
