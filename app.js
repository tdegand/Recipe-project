
const express = require('express');
const Sequelize = require("sequelize");
const logger = require('morgan');
const bodyParser = require('body-parser')
const router = require('./routes/index');

const app = express();

//log requests to console
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));


//api routes 
app.use(router);

// parse application/json
app.use(bodyParser.json())


//DB connection
const sequelize = new Sequelize('degandt', 'degandt', 'CdHBpSUCPwWwKpwa', {
  host: "52.86.154.61",
  dialect: 'mysql'
})

//if connection is good log message to console else log error
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
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
