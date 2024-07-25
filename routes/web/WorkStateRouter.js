var express = require('express');
const WorkStateController = require("../../controllers/web/WorkStateController")

var WorkStateRouter = express.Router();

WorkStateRouter.get("/webApi/workState/getid/:id",WorkStateController.getId)

module.exports = WorkStateRouter;