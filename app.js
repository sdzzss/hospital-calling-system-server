var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const UserRouter = require('./routes/admin/UserRouter');
const webUserRouter = require('./routes/web/UserRouter');
const DepartmentRouter = require('./routes/admin/DepartmentRouter')
const TitleRouter = require('./routes/admin/TitleRouter')
const webDepartmentRouter = require('./routes/web/DepartmentRouter')
const WorkStateRouter = require('./routes/admin/WorkStateRouter')
const webWorkStateRouter = require('./routes/web/WorkStateRouter')
const RegistrationRouter = require('./routes/admin/RegistrationRouter')
const JWT = require('./util/JWT');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use(webWorkStateRouter);
app.use(webUserRouter);
app.use(webDepartmentRouter);
/*
  adminApi - 后台系统
  webApi - 前台页面
*/
app.use((req,res,next)=>{
  //如果token有效，next()
  if(req.url==="/adminApi/user/login"){
    next();
    return;
  }

  const token = req.headers["authorization"].split(" ")[1];
  if(token){
    var payload = JWT.verify(token);
    console.log(payload);
    if(payload){
      const newToken = JWT.generate({
        _id:payload._id,
        username:payload.username
      },"6000s");
      res.header("Authorization",newToken)
      next();
    }else{
      res.status(401).send({
        errCode:"-1",
        errorInfo:"token过期"
      })
    }
  }
})
app.use(UserRouter);
app.use(DepartmentRouter);
app.use(TitleRouter);
app.use(WorkStateRouter);
app.use(RegistrationRouter);
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

module.exports = app;
