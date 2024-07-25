const DepartmentService = require("../../services/admin/DepartmentService");


const DepartmentController = {
    add: async (req,res)=>{
        const {name,introduction} = req.body
        await DepartmentService.add({name,introduction})
        res.send({
            ActionType:"ok"
        })
    },
    getList: async (req,res)=>{
        const result = await DepartmentService.getList({_id:req.params.id});
        res.send({
            ActionType:"ok",
            data:result
        })
    },
    putList: async (req,res)=>{
        const result = await DepartmentService.putList(req.body)
        res.send({
            ActionType:"ok"
        })
    },
    delList: async (req,res)=>{
        await DepartmentService.delList({_id:req.params.id})
        res.send({
            ActionType:"ok"
        })
    }
}
module.exports = DepartmentController;