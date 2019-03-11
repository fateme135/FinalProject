var express = require('express');
var router = express.Router();
const User = require('../../models/user');
const Article = require('../../models/article');

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
// ////////////////////////////////////////////////
// router.post('/whoAmI', (req, res) => {
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
//             console.log(user)
//         })
// })

// //////////////////////////////////////////////////
// router.post('/editeprofile', (req, res) => {
//     const REQ_BODY3 = req.body;
//     User.update({ _id: req.user._id },
//         {
//             $set:
//             {
//                 username: REQ_BODY3.userName,
//                 firstname: REQ_BODY3.firstName,
//                 lastname: REQ_BODY3.lastName,
//                 password: REQ_BODY3.password,
//                 phonenumber: REQ_BODY3.phoneNumber,
//                 role: "user",
//                 sex: REQ_BODY3.sexxx,
//             }
//         },
//         function (err, user) {
//             if (err) {
//                  console.log(err.message )
//                 return res.json({
//                     success: false,
//                     msg: "something wrong in user sign up\n" + err.message
//                 })
//             }
//             res.json({
//                 success,
//                 user
//             })
//             console.log("UPLOAD"+user )
//         })
// })
/////////////////////////////////////////
module.exports = router;