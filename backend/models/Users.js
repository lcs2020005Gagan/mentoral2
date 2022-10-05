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
profileImg:{
    type:String
},
followedMentors:[{type: mongoose.Schema.Types.ObjectId,
    ref: 'mentors'}],
profileImg:{
    type:String,
    default:"https://steamuserimages-a.akamaihd.net/ugc/966474717666916891/34E980F96B3C0A55D79AEF99725A148E9E4417E8/"
},
enrolledPrograms:[{type: mongoose.Schema.Types.ObjectId,
    ref: 'programs'}],
savedForLater:[{type: mongoose.Schema.Types.ObjectId,
    ref: 'articles'}], 
});
const users=mongoose.model("users",usersSchema);
users.createIndexes();
module.exports=users