const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TitleType = {
    name:String
}

const TitleModel = mongoose.model("title",new Schema(TitleType));
module.exports = TitleModel;