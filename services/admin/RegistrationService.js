const RegistrationModel = require("../../models/RegistrationModel");

const RegistrationService = {
    add: async ({idCard,name,sex,age,department,state,dateTime})=>{
        return RegistrationModel.create({
            idCard,
            name,
            sex,
            age,
            department,
            state,
            dateTime
        })
    },
    getlist: async ({department})=>{
        return RegistrationModel.find({department},["_id","idCard","name","sex","age","state","dateTime"])
    },
    addGetlist: async ({idCard,dateTime,department})=>{
        console.log(dateTime.slice(0,10));
        return RegistrationModel.find({idCard,department,dateTime:{ $regex: dateTime.slice(0,10) }},["_id","idCard","name","sex","age","state","dateTime","department"])
    }
}
module.exports = RegistrationService;
