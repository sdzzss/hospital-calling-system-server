var express = require('express');
const DepartmentController = require("../../controllers/web/DepartmentController")

var DepartmentRouter = express.Router();


DepartmentRouter.get("/webApi/department/list/:id",DepartmentController.getList)


module.exports = DepartmentRouter;