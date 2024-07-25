const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DepartmentType = {
    name:String,
    introduction:String,
}

const DepartmentModel = mongoose.model("department",new Schema(DepartmentType));
module.exports = DepartmentModel;