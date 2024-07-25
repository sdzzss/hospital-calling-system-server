const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkStateType = {
    id:String,
    department:String
}

const WorkStateModel = mongoose.model("workState",new Schema(WorkStateType));
module.exports = WorkStateModel;