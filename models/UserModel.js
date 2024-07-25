const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserType = {
    username:String,
    password:String,
    gender:Number,  //性别  0，1
    introduction:String,    //简介
    avatar:String,  //头像图片链接
    role:Number,     //权限
    department:Array,   //科室
    title:String        //职称
}

const UserModel = mongoose.model("user",new Schema(UserType));
module.exports = UserModel;