const TitleModel = require("../../models/TitleModel");

const TitleService = {
    add: async ({name})=>{
        return TitleModel.create({
            name
        })
    },
    getList: async ({_id})=>{
        return _id?TitleModel.find({_id},["name"]):TitleModel.find({})
    },
    putList: async (body)=>{
        return TitleModel.updateOne({_id:body._id},body)
    },
    delList: async ({_id})=>{
        return TitleModel.deleteOne({_id})
    }
}
module.exports = TitleService;
