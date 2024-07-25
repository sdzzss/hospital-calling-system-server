var express = require('express');
const RegistrationController = require("../../controllers/admin/RegistrationController")


var RegistrationRouter = express.Router();


RegistrationRouter.post("/adminApi/registration/add",RegistrationController.add)
RegistrationRouter.get("/adminApi/registration/getlist/:id",RegistrationController.getlist)
RegistrationRouter.get("/adminApi/registration/addGetlist/:id/:time/:department",RegistrationController.addGetlist)


module.exports = RegistrationRouter;