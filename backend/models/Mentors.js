const mongoose = require("mongoose");
mongoose.set('debug', true);

const mentorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
 
  about: {
    type: String,
  },
  skills: {
    type: Array,  
  },
  profileImg: {
    type: String,
  },
  followers: { type: mongoose.Schema.Types.ObjectId,
    ref: "users", },
  ratingsSum: {
    type: Number,
    default:0,
  },
  totalVoted: {
    type: Number,
    default:0,
  },
  ratings: {
    type: Number,
    default:0,
  },
  publishedPrograms: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "publishedPrograms",
  },
  publishedArticles: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "publishedArticles",
  },
  twitter:{
    type:String
  },
  github:{
    type:String
  },
  instagram:{
    type:String
  },
  facebook:{
    type:String
  },

});
const mentors = mongoose.model("mentors", mentorsSchema);
mentors.createIndexes();
module.exports = mentors;
