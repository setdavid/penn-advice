var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true },
  ()=>console.log('connectedtoDB'))

let numb1 = 0;
let numb2 = 0;

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use("/testAPI", testAPIRouter);

app.post("/postSEX", (req, res) => {
  console.log(req.body.num1);
  numb1 = req.body.num1;
  numb2 = req.body.num2;
  res.redirect("/");
});

app.get("/multiply", (req, res) => {
  res.send(numb1 * numb2);
  console.log(numb1 * numb2);
  res.redirect("/");
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

  

  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
