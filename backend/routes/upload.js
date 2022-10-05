const express=require("express")
const bodyParser = require("body-parser");
const Articles=require("../models/Articles")
const Programs=require("../models/Programs")
const Mentor=require("../models/Mentors")
const router=express.Router()
let fetchuser=require("../middleware/fetchuser")
let fetchmentor=require("../middleware/fetchmentor.js")
const app =express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt=require("jsonwebtoken")

//my artices- for a mentor
//fetch mentor's all articles when logged in
//give edit options and delete options
router.get('/getmentorsarticles', fetchuser,async(req, res) => {
    const articles=await Articles.find({author:req.id});
   res.json(articles);
  });


  //my programs- for a mentor
//fetch mentor's all programs when logged in
  //give edit options and delete options
router.get('/getmentorsprograms', fetchuser,async(req, res) => {
    const programs=await Programs.find({author:req.id});
   res.json(programs);
  });

  //get all articles of a mentor for general viewing
  router.get('/getmentorspecificarticles',async(req, res) => {
    const articles=await Articles.find({author:req.body.id});
   res.json(articles);
  });


 




  //get all programs of a mentor for general viewing
  router.get('/getmentorspecificprograms',async(req, res) => {
    const programs=await Programs.find({author:req.body.id});
   res.json(programs);
  });


  //get mentor
   router.get('/profile/mentor/:id', async (req, res) => {
        try {

            
            let mentor=await Mentor.findById(req.params.id).select("-password");
            if(!mentor)
            {
                res.status(498).send("Mentor doesn't exist");
            }
            // console.log("backend",mentor)
           res.json(mentor);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })



  //getallarticles for feed
  router.get('/getallarticles',async (req,res)=>{
   const articles= Articles.find()
    .populate("author")
    .exec()
    .then(p=>{
        res.status(200).json(p)
    })
    .catch(error=>console.log(error));
  })

  //getallprograms for feed
  router.get('/getallprograms',async (req,res)=>{
    const articles= Programs.find()
     .populate("author")
     .exec()
     .then(p=>{
         res.status(200).json(p)
     })
     .catch(error=>console.log(error));
   })
 
 

  


  //addarticle
  router.post('/addarticle', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 1}),
    body('image'),
    body('description').isLength({min:1}),
    body('tags')
   ], async (req, res) => {
        try {
            const { title, description, image,tags } = req.body;

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const article = new Articles({
                title, image,description, tags, author: req.id,
                })
                // console.log("article is",article);
            const savedNote = await article.save()
            await Mentor.findOneAndUpdate({
                _id:req.id
              },{
                $push:{
                    publishedArticles:article
                }
              })
            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })



     //addprogram
  router.post('/addprogram', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 1}),
    body('image'),
    body('description').isLength({min:1}),
    body('tags')
   ], async (req, res) => {
        try {
            const { title, description, image,tags } = req.body;

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const article = new Programs({
                title, image,description, tags, author: req.id,
                })
                await Mentor.findOneAndUpdate({
                    _id:req.id
                  },{
                    $push:{
                        publishedPrograms:article
                    }
                  })
            const savedNote = await article.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


    


module.exports=router
