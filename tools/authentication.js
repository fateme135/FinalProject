const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
passport.use('local-login', new LocalStrategy(function (username, password, done) {
    console.log('it is pass')
    User.findOne({username : username}, function (err, user) {
        if (err){
            console.log('username is false');
            return done(err);
        }
    
        if (!user) {
            console.log('user is false');
            return done(null, false, {})
        }
    
        if (user.password !== password) {
            console.log('password is false');
            return done(null, false, {})
        }
        console.log('user passed....');
        return done(null, user)
    })
}))
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    console.log('it is deserializeUser')
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
// function isLogedIn(req, res, next) {
//     if(req.isAuthenticated()){
//         return next();
//     } else {
//         return next();
//         // return res.send(404);
//     }
// }
module.exports = {
    isLogedIn: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        } else {
            // return next();
            return res.sendStatus(403);
        }
    }
}



