const DepartmentModel = require("../../models/DepartmentModel");

const DepartmentService = {
   
    getList: async ({name})=>{
        return DepartmentModel.find({name},["code","name","introduction"])
    }
}
module.exports = DepartmentService;
