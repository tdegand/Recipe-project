const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const Sequelize = require("sequelize")
const logger = require('morgan');
const mysql = require('mysql2');

const router = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(router);

//DB connection
const sequelize = mysql.createConnection({
    host: "52.86.154.61",
    user: "degandt",
    password: "CdHBpSUCPwWwKpwa"
});

sequelize.connect((err) => {
    if(err){
        console.log('error, cannot connect to DB', err);
        return;
    } else {
        console.log("YAY connection established!")
    }
})

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

// set our port
app.set('port', process.env.PORT || 5000);

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});

module.exports = app;
