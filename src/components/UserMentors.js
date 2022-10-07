import React,{useContext,useState,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
import AllMentors from './AllMentors';
import UserMentorsItem from './UserMentorsItem';

function UserMentors() {

    let rand=0;
    const context=useContext(noteContext);
    const {userProfile,getUserProfile,updateUser}=context;
    useEffect(() => {
        // if(localStorage.getItem('who')==="u")
        getUserProfile();
        // setArr([]);
       }, [userProfile])
  return (
    <div>
        <div className=" card bg-image text-white" style={{backgroundImage:"url(https://www.w3schools.com/css/paris.jpg)",backgroundSize:'100% 100%',filter:'brightness(85%)', boxShadow: 'inset 0 0 32rem black',height: '65vh', maxWidth:'100%',backgroundRepeat: 'no-repeat',textAlign:"center",zIndex:-2}}>
        <div class="card-img-overlay">
    <h1 class="card-title ms-auto me-auto" style={{"marginTop":"6.3rem",fontSize:"3rem"}}>Following</h1>
    
  </div>
</div>

        <div className="cont px-3 align-items-center justify-content-center " style={{"marginTop":"-9rem","zIndex":1}}>

<div className="row my-2">

{userProfile.followedMentors.map((element) => {
  return <div className="col-md-4 ms-auto me-auto" key={rand++}>
     <UserMentorsItem {...element} />
  </div>
})}
</div>
</div>
    </div>
  )
}

export default UserMentors

