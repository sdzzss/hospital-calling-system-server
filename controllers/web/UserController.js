const UserService = require("../../services/web/UserService");



const UserController = {
    getList: async (req,res)=>{
        const result = await UserService.getList({_id:req.params.id});
        res.send({
            ActionType:"ok",
            data:result
        })
    }
}
module.exports = UserController;