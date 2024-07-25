const TitleService = require("../../services/admin/TitleService");


const TitleController = {
    add: async (req,res)=>{
        const {name} = req.body
        await TitleService.add({name})
        res.send({
            ActionType:"ok"
        })
    },
    getList: async (req,res)=>{
        const result = await TitleService.getList({_id:req.params.id});
        res.send({
            ActionType:"ok",
            data:result
        })
    },
    putList: async (req,res)=>{
        const result = await TitleService.putList(req.body)
        res.send({
            ActionType:"ok"
        })
    },
    delList: async (req,res)=>{
        await TitleService.delList({_id:req.params.id})
        res.send({
            ActionType:"ok"
        })
    }
}
module.exports = TitleController;