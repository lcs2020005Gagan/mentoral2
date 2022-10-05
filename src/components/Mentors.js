import React from 'react'
import { useEffect ,useContext} from 'react';
import noteContext from '../context/notes/noteContext'
import RecMentors from './RecMentors';
import AllMentors from './AllMentors';


function Mentors() {
    let rand=0
    var top=true;
    const context=useContext(noteContext);
    const {recMentors,allMentors,getAllMentors,getRecMentors}=context;
        useEffect(()=>{
    //     if(!localStorage.getItem('token'))
    //     {
    
    // navigate('/login');
  
    //     }
    getRecMentors();
    getAllMentors();
    // console.log(recMentors);
},[allMentors])
  return (
    <div style={{"marginTop":"7rem"}} >

       <div className="cont px-3 align-items-center justify-content-center ">

<h1 >Top Mentors</h1>
<div className="row my-2">

     {recMentors.map((element) => {
         return <div className="col-md-4" key={rand++}>
            <RecMentors {...element} />
         </div>
     })}
 </div>
</div>
<div>
    
</div>
<div className="cont px-3 align-items-center justify-content-center ">

<h1 >All Mentors</h1>
<div className="row my-2">

     {allMentors.map((element) => {
         return <div className="col-md-4" key={rand++}>
            <AllMentors {...element} />
         </div>
     })}
 </div>
</div>

    </div>
  )
}

export default Mentors