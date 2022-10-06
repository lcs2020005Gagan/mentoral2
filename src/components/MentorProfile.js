import React, { useEffect,useContext, useState } from 'react'
import { useParams } from 'react-router-dom';

import noteContext from '../context/notes/noteContext'

function MentorProfile(props) {
    let rand=0
    const {id}=useParams();
    const context=useContext(noteContext);
    const {profileMentor,getMentorProfile}=context;


//   const {name,email,profileImg,followers,publishedPrograms,publishedArticles}=profileMentor
  
  useEffect(() => {
    
   getMentorProfile((id));
//    console.log(profileMentor)
// console.log(typeof(id)," ",id);
// fetch("http://localhost:5000/api/auth/profile/mentor/"+{id}).then(res=>res.json).then((result)=>{
//     console.log(result)
// })
console.log(profileMentor)
  }, [profileMentor])
    
    
  return (
    <div>
        
        
    </div>
  )
}

export default MentorProfile