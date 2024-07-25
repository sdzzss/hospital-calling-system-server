var express = require('express');
const TitleController = require("../../controllers/admin/TitleController")

var TitleRouter = express.Router();


TitleRouter.post("/adminApi/title/add",TitleController.add)
TitleRouter.get("/adminApi/title/list",TitleController.getList)
TitleRouter.get("/adminApi/title/list/:id",TitleController.getList)
TitleRouter.put("/adminApi/title/list/:id",TitleController.putList)
TitleRouter.delete("/adminApi/title/list/:id",TitleController.delList)

module.exports = TitleRouter;