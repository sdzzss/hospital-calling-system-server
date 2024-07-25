const UserModel = require("../../models/UserModel");

const UserService = {
    
    getList: async ({_id})=>{
        return UserModel.find({_id},["username","role","introduction","gender","avatar","title"])
    }
}
module.exports = UserService;