const DepartmentService = require("../../services/web/DepartmentService");


const DepartmentController = {
    
    getList: async (req,res)=>{
        const result = await DepartmentService.getList({name:req.params.id});
        res.send({
            ActionType:"ok",
            data:result
        })
    }
}
module.exports = DepartmentController;