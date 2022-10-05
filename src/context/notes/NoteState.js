import react,{useState,useEffect} from "react"

import NoteContext from "./noteContext"
const NoteState =(props)=>{
    const date = new Date();
    const host="http://localhost:5000"
      
     const strdate=date.toString()
        const initialAllArticles=[]
        const initialAllPrograms=[]
        const recMentorsInitial=[]
        const allMentorsInitial=[]
        

        const initialobj=""
        // const initialProfileMentor=[]
  const [allArticles, setAllArticles] = useState(initialAllArticles)
  const [allMentors, setAllMentors] = useState(allMentorsInitial)
  const [recMentors, setRecMentors] = useState(recMentorsInitial)

//   const [profileMentor, setProfileMentor] = useState({
//     name: "",
//       email: "",    
   
//       publishedPrograms: [],
//       publishedArticles: [],
//       twitter:"",
//       github:"",
//       instagram:"",
//       facebook:"",
//       about: "",
//       skills: [],
//       profileImg: "",
//       followers:[],
    
//       ratingsSum:0,
//       totalVoted:0,
//       ratings:0,
//   })
  const [obj,setobj]=useState(initialobj)
  const [idi,setidi]=useState("hello");
  const [allPrograms, setAllPrograms] = useState(initialAllPrograms)

  
  
//get all articles
const getAllArticles=async ()=>{
 
    const response=await fetch(`${host}/api/upload/getallarticles`,{
        method: 'GET',
      });


      const json=await response.json();
// console.log(json);
setAllArticles(json);

}

//get all programs
const getAllPrograms=async ()=>{
 
    const response=await fetch(`${host}/api/upload/getallprograms`,{
        method: 'GET',
      });


      const json=await response.json();
// console.log(json);
setAllPrograms(json);

}



//get recommended mentors
const getRecMentors=async ()=>{
     const response=await fetch(`${host}/api/auth/recmentors`,{
        method: 'GET',
      });


      const json=await response.json();
    //   console.log(typeof(json));
setRecMentors(json);

}



//get all mentors
const getAllMentors=async ()=>{
    const response=await fetch(`${host}/api/auth/allmentors`,{
       method: 'GET',
     });


     const json=await response.json();
   //   console.log(typeof(json));
setAllMentors(json);

}

//mentor profile
const MentorProfile=async (id)=>
{
   
    // console.log("inside editnote");
    const response=await fetch(`${host}/api/upload/profile/mentor/${id}`,{
        method: 'GET',       
      });
    const json=await response.json();
    
// const jsonstr=JSON.stringify(json);
// setobj(jsonstr);
// console.log(obj);
// useEffect(() => { setidi("hellothere") }, [])
// console.log(idi);
return json;
}



    return(
        <NoteContext.Provider value={{allArticles,allPrograms,getAllArticles,getAllPrograms,MentorProfile,obj,allMentors,getAllMentors,getRecMentors,recMentors}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;