const UserModel = require("../../models/UserModel");

const UserService = {
    login: async ({username,password})=>{
        return UserModel.find({
            username,
            password
        })
    },
    upload: async ({_id,username,introduction,gender,avatar})=>{
        if(avatar){
            return UserModel.updateOne({
                _id
            },{
                username,introduction,gender,avatar
            })
        }else{
            return UserModel.updateOne({
                _id
            },{
                username,introduction,gender
            })
        }
        
    },
    add: async ({username,introduction,gender,avatar,password,role,department,title})=>{
        return UserModel.create({
            username,
            introduction,
            gender,
            avatar,
            password,
            role,
            department,
            title
        })
    },
    getList: async ({_id})=>{
        return _id?UserModel.find({_id},["username","password","role","introduction","gender","department","title"]):UserModel.find({},["username","role","avatar","introduction","gender","department","title"])
    },
    listSelect: async ({username})=>{
        const name =  new RegExp(username, 'i');
        return UserModel.find({username:name},["username","role","avatar","introduction","gender","department","title"])
    },
    delList: async ({_id})=>{
        return UserModel.deleteOne({_id})
    },
    putList: async (body)=>{
        return UserModel.updateOne({_id:body._id},body)
    }
}
module.exports = UserService;