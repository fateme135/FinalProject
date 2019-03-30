var express = require('express');
var router = express.Router();
const User = require('../../models/user');
const Article = require('../../models/article');
const path = require('path')
const multer = require('multer');
//////////////////////Upload image-Articles//////////////////////
const storage = multer.diskStorage({
     destination: "./public/images/image-Articles",
     filename: function (req, file, cb) {
       cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
     }
   });
   const upload = multer({
     storage: storage,
     limits: { fileSize: 1000000 },
   })
   ///////////////////////////////////create Article//////////////////////////////////
router.post('/createArticle', upload.single('picture'), (req, res) => {
  const REQ_BODY2 = req.body;
  if (!REQ_BODY2.title || !REQ_BODY2.text || !REQ_BODY2.date) {
    return res.json({ success: false, msg: "empty filed " })
  }
  else {
    let article = new Article({
      title: REQ_BODY2.title,
      text: REQ_BODY2.text,
      date: REQ_BODY2.date,
      // picture:REQ_BODY2.picture,
      // picture: "../../../images/image-Articles/" + req.file.filename,
      picture: req.file.filename,
      author: req.user._id,
    })
    article.save((err, article) => {
      if (err) {
        console.log("error of articles" + err.message);
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
      }
    })
  }
})
// ///////////////////////show My Article////////////////////////
// router.post('/showMyArticle', (req, res) => {
//     Article.find({ author: req.user._id },
//         (err, contents) => {
//             if (err) {
//                 return res.json({
//                     success: false,
//                     msg: "something wrong in get user info\n" + err.message
//                 })
//             }
//             res.json({
//                 success: true,
//                 contents
//             })
//             console.log("my Article is" + contents);
//         })
// })
/////////////////////////Edit Profile///////////////////////////
// router.post('/whoAmI', (req, res) => {
//     //router.get('/whoAmI', (req, res) => {
//     User.find({ _id: req.user._id },
//         (err, user) => {
//             if (err) {
//                 return res.json({
//                     success: false,
//                     msg: "something wrong in get user info\n" + err.message
//                 })
//             }
//             res.json({
//                 success: true,
//                 user
//             })
//             console.log(user + "in  whoAmI server")
//         })
// })
// //////////////////////////Edit Profile////////////////////////
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
//       }
//     },
//     function (err, user) {
//       if (err) {
//         console.log(err.message)
//         return res.json({
//           success: false,
//           msg: "something wrong in user sign up\n" + err.message
//         })
//       }
//       res.json({

//         user
//       })
//       console.log("UPLOAD" + user)
//     })
// })
////////////////////////////delete Article///////////////////////////////
module.exports = router;