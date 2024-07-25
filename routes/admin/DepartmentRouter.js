var express = require('express');
const DepartmentController = require("../../controllers/admin/DepartmentController")

var DepartmentRouter = express.Router();


DepartmentRouter.post("/adminApi/department/add",DepartmentController.add)
DepartmentRouter.get("/adminApi/department/list",DepartmentController.getList)
DepartmentRouter.get("/adminApi/department/list/:id",DepartmentController.getList)
DepartmentRouter.put("/adminApi/department/list/:id",DepartmentController.putList)
DepartmentRouter.delete("/adminApi/department/list/:id",DepartmentController.delList)

module.exports = DepartmentRouter;