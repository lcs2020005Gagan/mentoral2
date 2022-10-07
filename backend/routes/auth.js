const express=require("express")
const bodyParser = require("body-parser");
const User=require("../models/Users")
const Mentor=require("../models/Mentors")
let fetchuser=require("../middleware/fetchuser")
const router=express.Router()
const app =express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const secretKey="helloworld"
var jwt=require("jsonwebtoken");
const fetchmentor = require("../middleware/fetchmentor");
let success=false




//create user
router.post('/createuser',
[body('name','Enter a valid name').isLength({min:1}),
  body('email','Enter a valid email').isEmail(),
  body('password','password must be atleast 5 characters').isLength({ min: 5 }),
 
],
 async (req, res) => {
      success=false;
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    try{
        let user= await User.findOne({email:req.body.email});
        console.log(user);
        if(user)
        {
            return res.status(400).json({ success,errors: "Email is alerady registered with cloudNote" });

        }
        else{
            var salt =await bcrypt.genSaltSync(10);
var secpassword =  await bcrypt.hashSync(req.body.password, salt);
console.log(secpassword);
       user=await  User.create({
            name:req.body.name,
          email: req.body.email,
          password: secpassword,
         })
        console.log("user ",user)
        // console.log(user);
        var authtoken=await jwt.sign({id:user.id},secretKey)
        console.log(authtoken);
        // console.log(authtoken)
        success=true
        res.json({success,authtoken});
        success=false;
    }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Some error occured");
    }
res.send("hello");
  }
);


//getuser
router.post('/getuser',fetchuser,
  async (req, res) => {
    await User.find({_id:req.id})
  .select("-password")
  .populate(
    {
      path:'enrolledPrograms',
      populate:{
        path:'author'
        }
    } 
  )
  .populate({
    path:'followedMentors'
  })
  .populate({
    path:'savedForLater',
    populate:{
      path:'author'
      }
  })
  .exec()
  .then(p=>{
      res.status(200).json(p)
  })
  .catch(error=>console.log(error));
  });

  


  //getuser
router.post('/getuserskel',fetchuser,
async (req, res) => {
 await User.find({_id:req.id})
.select("-password")
.exec()
.then(p=>{
    res.status(200).json(p)
})
.catch(error=>console.log(error));
});


//login user
router.post('/loginuser',
[ body('email','Enter a valid email').isEmail(),
  body('password','password must be atleast 5 characters').isLength({ min: 5 }),
],
  async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    try{
        let user= await User.findOne({email:req.body.email});
        if(!user)
        {
            return res.status(400).json({ success,errors: "wrong email" });
        }
        else{
           var passwordcompare=await bcrypt.compare(req.body.password,user.password)
           if(!passwordcompare)
           {
            return res.status(400).json({success, errors: "wrong passwrod" });
           }

        var authtoken=await jwt.sign({id:user.id},secretKey)
        // console.log(authtoken)
        // setsuccess(true);
        success=true;
        res.json({success,authtoken});
        success=false;  
    }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Some error occured");
    }
   
 
  }
  
)



//create mentor
router.post('/creatementor',
[body('name','Enter a valid name').isLength({min:1}),
  body('email','Enter a valid email').isEmail(),
  body('password','password must be atleast 5 characters').isLength({ min: 5 }),
  body('about'),
  body('skills'),
  body('profileImg'),
  body('followers'),
  body('publishedPrograms'),
  body('publishedArticles'),
  body('twitter'),
  body('github'),
  body('instagram'),
  body('facebook'),
],
 async (req, res) => {
      success=false;
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    try{
        let mentor= await Mentor.findOne({email:req.body.email});
        if(mentor)
        {
            return res.status(400).json({ success,errors: "Email is alerady registered with cloudNote" });

        }
        else{
            var salt =await bcrypt.genSaltSync(10);
var secpassword =  await bcrypt.hashSync(req.body.password, salt);
console.log(secpassword);
       mentor=await  Mentor.create({
            name:req.body.name,
          email: req.body.email,
          password: secpassword,
          age:req.body.age,
          profileImg:req.body.profileImg,
          skills:req.body.skills,
          about:req.body.about
        })
        console.log("mentor ",mentor.skills[0])
        var authtoken=await jwt.sign({id:mentor.id},secretKey)
        // console.log(authtoken)
        success=true
        res.json({success,authtoken});
        success=false;
    }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Some error occured");
    }
  }
);


//login mentor
router.post('/loginmentor',
[ body('email','Enter a valid email').isEmail(),
  body('password','password must be atleast 5 characters').isLength({ min: 5 }),
],
  async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    try{
        let user= await Mentor.findOne({email:req.body.email});
        if(!user)
        {
            return res.status(400).json({ success,errors: "wrong email" });
        }
        else{
           var passwordcompare=await bcrypt.compare(req.body.password,user.password)
           if(!passwordcompare)
           {
            return res.status(400).json({success, errors: "wrong passwrod" });
           }

        var authtoken=await jwt.sign({id:user.id},secretKey)
        // console.log(authtoken)
        // setsuccess(true);
        success=true;
        res.json({success,authtoken});
        success=false;  
    }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Some error occured");
    }
   
 
  }
  
)

//get name and profile image for user
router.post('/getunapi',fetchuser,
  async (req, res) => {
    await User.find({_id:req.id})
  .select({name:1,profileImg:1})
  .catch(error=>console.log(error));
  });



//getmentor
router.post('/profile/mentor/:id',
  async (req, res) => {
    await Mentor.findById(req.params.id)
  .select("-password")
  .populate(
    {
      path:'publishedPrograms',
    }
  )
    .populate({
      path:'publishedArticles'
    })
 .exec()
  .then(p=>{
      res.status(200).json(p)
  })
  .catch(error=>console.log(error));
    
  });
 
 

 //saved for later articles
 router.get('/savedforlater',fetchuser,async (req,res)=>{
 await User.find({_id:req.id})
  .select("-password")
  .populate(
    {
      path:'savedForLater',
      populate:{
      path:'author'
      }
    }
  )
  .exec()
  .then(p=>{
      res.status(200).json(p)
  })
  .catch(error=>console.log(error));
})



//get enrolled programs
router.get('/enrolledprograms',fetchuser,async (req,res)=>{
  await User.find({_id:req.id})
  .select("-password")
  .populate(
    {
      path:'enrolledPrograms',
      populate:{
      path:'author'
      }
    }
  )
  .exec()
  .then(p=>{
      res.status(200).json(p)
  })
  .catch(error=>console.log(error));
})



   //update saved for later
   router.post('/updateuser', fetchuser, [
    body('user'),
   ], async (req, res) => {

        try {
          console.log("hello")
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
           
            const newuser = await User.findByIdAndUpdate(req.id,{$set:req.body},{new:true});
            res.json(newuser);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


   

//enroll for a program
 
 router.post('/enrollforaprogram', fetchuser, [
  body('program_id'),
 ], async (req, res) => {
      try {
          const program_id = req.body.program_id;
         await User.findOneAndUpdate({
            _id:req.id
          },{
            $push:{
              enrolledPrograms:program_id
            }
          })
          const user=await User.find({_id:req.id});
          res.json(user);
      } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error");
      }
  })

  

  //followmentor
  router.post('/followmentor', fetchuser, [
    body('mentor_id'),
   ], async (req, res) => {
        try {
            const mentor_id = req.body.mentor_id;
           await User.findOneAndUpdate({
              _id:req.id
            },{
              $push:{
                followedMentors:mentor_id
              }
            })
            await Mentor.findOneAndUpdate({
              _id:mentor_id
            },{
              $push:{
                followers:req.id
              }
            })
            const user=await User.find({_id:req.id});
            res.json(user);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })
  
    
    //get recommended mentors
    router.get('/recmentors',async (req,res)=>{
      const articles= Mentor.find().sort({ratings:-1}).limit(10)
       .exec()
       .then(p=>{
           res.status(200).json(p)
       })
       .catch(error=>console.log(error));
     })


     //get all mentors
     router.get('/allmentors',async (req,res)=>{
      const articles= Mentor.find()
       .exec()
       .then(p=>{
           res.status(200).json(p)
       })
       .catch(error=>console.log(error));
     })
      
      
  

  





  
module.exports=router




