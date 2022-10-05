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
  publishedPrograms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'programs',
  }],
  publishedArticles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'articles',
  }],
  twitter:{
    type:String,
    default:"--"
  },
  github:{
    type:String,
    default:"--"

  },
  instagram:{
    type:String,
    default:"--"

  },
  facebook:{
    type:String,
    default:"--"
  },
  about: {
    type: String,
  },
  skills: {
    type: Array,  
    default:[]
  },
  profileImg: {
    type: String,
    default:"https://thumbs.dreamstime.com/z/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg"
  },
  followers:[ { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", 
  }],

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
 

});
const mentors = mongoose.model("mentors", mentorsSchema);
mentors.createIndexes();
module.exports = mentors;
