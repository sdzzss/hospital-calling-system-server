const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegistrationType = {
    idCard:String,
    name:String,
    sex:String,
    age:String,
    department:String,
    state:Number,
    dateTime:String
}

const RegistrationModel = mongoose.model("Registration",new Schema(RegistrationType));
module.exports = RegistrationModel;