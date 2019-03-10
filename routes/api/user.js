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

router.post('/whoAmI', (req, res) => {
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
            })
})
module.exports = router;
