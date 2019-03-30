var express = require('express');
var router = express.Router();
const User = require('../../models/user');

router.post('/test', (req, res)=>{
    res.json({
        success: true
    })
})
router.post('/createUser', (req, res) => {
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
        // console.log("shooooood")
        res.json({
          success: true,
          user
        })
      })
    }
  })

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
    })
})

module.exports = router;
