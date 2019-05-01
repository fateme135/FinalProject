let createError = require('http-errors');
let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
let app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
console.log(__dirname, 'views');
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'panel/build'),{maxAge:'7d', index:false}));
console.log(__dirname, 'panel/build')
//////////////////////////
app.use(bodyParser.urlencoded({
  'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
//////////////////////////
app.use(session({
  secret: 'fatemeh$135',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 6000000 }
}));
//*************************
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//*************************

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
///////////////////////
app.use('/', indexRouter);
app.use('/users', usersRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
module.exports = app;
////////////////////////////////////////////////////////////////////////////
