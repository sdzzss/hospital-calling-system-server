const RegistrationService = require("../../services/admin/RegistrationService");


const RegistrationController = {
    add: async (req,res)=>{
        const {idCard,name,sex,age,department,state,dateTime} = req.body
        await RegistrationService.add({idCard,name,sex,age,department,state,dateTime})
        res.send({
            ActionType:"ok"
        })
    },
    getlist: async (req,res)=>{
        let result = await RegistrationService.getlist({department:req.params.id})
        res.send({
            ActionType:"ok",
            data:result
        })
    },
    addGetlist: async (req,res)=>{
        let result = await RegistrationService.addGetlist({idCard:req.params.id,dateTime:req.params.time,department:req.params.department})
        res.send({
            ActionType:"ok",
            data:result
        })
    }
}
module.exports = RegistrationController;