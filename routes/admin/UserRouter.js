var express = require('express');
const UserController = require("../../controllers/admin/UserController")
const multer  = require('multer')

var UserRouter = express.Router();

//图片上传

const upload = multer({ dest: 'public/avatarUploads/' })

UserRouter.post("/adminApi/user/login",UserController.login)
UserRouter.post("/adminApi/user/upload",upload.single('file'),UserController.upload)
UserRouter.post("/adminApi/user/add",upload.single('file'),UserController.add)
UserRouter.get("/adminApi/user/list",UserController.getList)
UserRouter.get("/adminApi/user/list/:id",UserController.getList)
UserRouter.get("/adminApi/user/listSelect/:id",UserController.listSelect)
UserRouter.delete("/adminApi/user/list/:id",UserController.delList)
UserRouter.put("/adminApi/user/list/:id",UserController.putList)


module.exports = UserRouter;