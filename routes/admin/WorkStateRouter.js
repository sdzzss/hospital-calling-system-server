var express = require('express');
const WorkStateController = require("../../controllers/admin/WorkStateController")

var WorkStateRouter = express.Router();

WorkStateRouter.post("/adminApi/workState/add",WorkStateController.add)
WorkStateRouter.delete("/adminApi/workState/del/:id",WorkStateController.del)
WorkStateRouter.delete("/adminApi/workState/delete/:id",WorkStateController.deleteAll)
WorkStateRouter.get("/adminApi/workState/getid/:id",WorkStateController.getId)
WorkStateRouter.get("/adminApi/workState/list/:id",WorkStateController.getlist)

module.exports = WorkStateRouter;