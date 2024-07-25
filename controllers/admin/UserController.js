const UserService = require("../../services/admin/UserService");
const JWT = require("../../util/JWT");


const UserController = {
    login:async (req,res)=>{
        var result = await UserService.login(req.body);
        if(result.length === 0){
            res.send({
                code:"-1",
                msg:"用户名或密码错误"
            })
        }else{
            //生成token
            const token = JWT.generate({
                _id:result[0]._id,
                username:result[0].username
            },"6000s");

            res.header("Authorization",token);

            res.send({
                ActionType:'ok',
                data:{
                    username:result[0].username,
                    gender:result[0].gender,  //性别  0，1
                    introduction:result[0].introduction,    //简介
                    avatar:result[0].avatar,  //头像图片链接
                    role:result[0].role,     //权限
                    department:result[0].department,
                    _id:result[0]._id
                }
            })
        }
    },
    upload: async (req,res)=>{
        const {username,introduction,gender} = req.body

        const token = req.headers["authorization"].split(" ")[1];
        const avatar = req.file? `/avatarUploads/${req.file.filename}`:""

        let payload = JWT.verify(token)
        // console.log(payload._id);
        await UserService.upload({_id:payload._id,username,introduction,gender:Number(gender),avatar})
        if (avatar) {
            res.send({
                ActionType:'ok',
                data:{
                    username,introduction,gender:Number(gender),avatar
                }
            })
        }else{
            res.send({
                ActionType:'ok',
                data:{
                    username,introduction,gender:Number(gender)
                }
            })
        }
        
    },
    add: async (req,res)=>{
        const {username,introduction,gender,role,password,department,title} = req.body
        const avatar = req.file? `/avatarUploads/${req.file.filename}`:""

    
        await UserService.add({username,introduction,gender:Number(gender),avatar,role:Number(role),password,department,title})
        res.send({
            ActionType:"ok"
        })
    },
    getList: async (req,res)=>{
        const result = await UserService.getList({_id:req.params.id});
        res.send({
            ActionType:"ok",
            data:result
        })
    },
    listSelect: async (req,res)=>{
        const result = await UserService.listSelect({username:req.params.id});
        res.send({
            ActionType:"ok",
            data:result
        })
    },
    delList: async (req,res)=>{
        const result = await UserService.delList({_id:req.params.id});
        res.send({
            ActionType:"ok"
        })
    },
    putList: async (req,res)=>{
        const result = await UserService.putList(req.body);
        res.send({
            ActionType:"ok"
        })
    }
}
module.exports = UserController;