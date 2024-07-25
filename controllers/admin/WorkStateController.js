const WorkStateService = require("../../services/admin/WorkStateService");

const WorkStateController = {
    add: async (req,res)=>{
        console.log(req.body.department._value);
        console.log(req.body.id);

        await WorkStateService.add({id:req.body.id,department:req.body.department._value})
        res.send({
            ActionType:"ok"
        })
    },
    del:async (req,res)=>{
        await WorkStateService.del({id:req.params.id})
        res.send({
            ActionType:"ok"
        })
    },
    deleteAll:async (req,res)=>{
        await WorkStateService.deleteAll({id:req.params.id})
        res.send({
            ActionType:"ok"
        })
    },
    getId:async (req,res)=>{
        // const result = await WorkStateService.getId({department:req.params.id})
        console.log('111');
        // res.send({
        //     ActionType:"ok",
        //     data:result
        // })
    },
    getlist:async (req,res)=>{
        const result = await WorkStateService.getlist({id:req.params.id})
        console.log(req);
        res.send({
            ActionType:"ok",
            data:result
        })
    }
}
module.exports = WorkStateController;