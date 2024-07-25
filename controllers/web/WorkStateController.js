const WorkStateService = require("../../services/web/WorkStateService");

const WorkStateController = {
    getId:async (req,res)=>{
        const result = await WorkStateService.getId({department:req.params.id})
        res.send({
            ActionType:"ok",
            data:result
        })
    }
}
module.exports = WorkStateController;