const mongoose = require("mongoose");

const articlesSchema = new mongoose.Schema({
 title:{
    type:String,
    required:true
 },
 image:{
    type:String
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
const articles = mongoose.model("articles", articlesSchema);
articles.createIndexes();
module.exports = articles;
