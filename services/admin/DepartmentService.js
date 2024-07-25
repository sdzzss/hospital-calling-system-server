const DepartmentModel = require("../../models/DepartmentModel");

const DepartmentService = {
    add: async ({name,introduction})=>{
        return DepartmentModel.create({
            name,
            introduction
        })
    },
    getList: async ({_id})=>{
        return _id?DepartmentModel.find({_id},["_id","name","introduction"]):DepartmentModel.find({},["_id","name","introduction"])
    },
    putList: async (body)=>{
        return DepartmentModel.updateOne({_id:body._id},body)
    },
    delList: async ({_id})=>{
        return DepartmentModel.deleteOne({_id})
    }
}
module.exports = DepartmentService;
