const WorkStateModel = require("../../models/WorkStateModel");


const WorkStateService = {
    getId:async ({department})=>{
        return WorkStateModel.find({department},["id","department"])
    }
}
module.exports = WorkStateService;