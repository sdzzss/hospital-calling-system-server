var express = require('express');
const UserController = require("../../controllers/web/UserController")
const multer  = require('multer')

var UserRouter = express.Router();



UserRouter.get("/webApi/user/list/:id",UserController.getList)

module.exports = UserRouter;