var express = require('express');
var router = express.Router();
const User = require('../../models/user');
const Article = require('../../models/article');
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
/////////////////////////Edit Profile/////////////////
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
// //////////////////////////Edit Profile/////////////////
// router.post('/editprofile', (req, res) => {
//     User.update({ _id: req.user._id },
//         {
//             $set:
//             {
//                 username: req.body.username,
//                 firstname: req.body.firstname,
//                 lastname: req.body.lastname,
//                 password: req.body.password,
//                 phonenumber: req.body.phonenumber,
//                 role: "user",
//                 sex: req.body.sex,
//             }
//         },
//         function (err, user) {
//             if (err) {
//                 console.log(err.message)
//                 return res.json({
//                     success: false,
//                     msg: "something wrong in user sign up\n" + err.message
//                 })
//             }
//             res.json({
//                 success,
//                 user
//             })
//             console.log("UPLOAD" + user)
//         })
// })
module.exports = router;