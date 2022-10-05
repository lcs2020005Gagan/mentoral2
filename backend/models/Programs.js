const mongoose = require("mongoose");

const programsSchema = new mongoose.Schema({
 title:{
    type:String,
    required:true
 },
 image:{
    type:String,
    default:"https://temp.compsci88.com/cover/Shingeki-No-Kyojin.jpg"
 },
 description:{
type:String
 },
 author:{
    type: mongoose.Schema.Types.ObjectId, ref:'mentors'
 },
 date:{
    type:Date,
    default:new Date(),
 } ,
 tags:{
    type:Array,
 },
});
const programs = mongoose.model("programs", programsSchema);
programs.createIndexes();
module.exports = programs;
