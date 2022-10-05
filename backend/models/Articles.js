const mongoose = require("mongoose");

const articlesSchema = new mongoose.Schema({
 title:{
    type:String,
    required:true
 },
 image:{
    type:String,
    default:" https://temp.compsci88.com/cover/Dandadan.jpg"
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
 likes:{
   type:Number,
   default:0,
 },
 tags:{
    type:Array,
    default:["No tags"]
 },



});
const articles = mongoose.model("articles", articlesSchema);
articles.createIndexes();
module.exports = articles;
