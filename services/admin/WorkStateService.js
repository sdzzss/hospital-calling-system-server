const WorkStateModel = require("../../models/WorkStateModel");


const WorkStateService = {
    add: async ({id,department})=>{
        return WorkStateModel.create({
            id,
            department
        })
    },
    del:async ({id})=>{
        return WorkStateModel.deleteOne({id})
    },
    deleteAll:async ({id})=>{
        return WorkStateModel.deleteMany({id})
    },
    getId:async ({department})=>{
        return WorkStateModel.find({department},["id","department"])
    },
    getlist:async ({id})=>{
        return WorkStateModel.find({id},["id","department"])
    },
}
module.exports = WorkStateService;