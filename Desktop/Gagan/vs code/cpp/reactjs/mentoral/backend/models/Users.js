const mongoose=require("mongoose")
mongoose.set('debug', true);

const usersSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
followedMentors:[{type: mongoose.Schema.Types.ObjectId,
    ref: 'mentors'}],
profileImg:{
    type:String
},
enrolledPrograms:[{type: mongoose.Schema.Types.ObjectId,
    ref: 'programs'}],
savedForLater:[{type: mongoose.Schema.Types.ObjectId,
    ref: 'articles'}],


//to do
//joinedCommunity:{ type: }

});
const users=mongoose.model("users",usersSchema);
users.createIndexes();
module.exports=users