import React from 'react'
import { useEffect ,useContext} from 'react';
import noteContext from '../context/notes/noteContext'
import ArticlesItem from './ArticlesItem';


function UserArticles() {
  let rand=0
    const context=useContext(noteContext);

    const {userProfile,getUserProfile}=context;
    
        useEffect(()=>{
    //     if(!localStorage.getItem('token'))
    //     {
    
    // navigate('/login');
  
    //     }
getUserProfile();    // console.log(allArticles);
},[userProfile])
  return (

    
  <div>  
<div className=" card bg-image text-white" style={{backgroundImage:"url(https://www.w3schools.com/css/paris.jpg)",backgroundSize:'100% 100%',filter:'brightness(85%)', boxShadow: 'inset 0 0 32rem black',height: '65vh', maxWidth:'100%',backgroundRepeat: 'no-repeat',textAlign:"center",zIndex:-2}}>
<div class="card-img-overlay">
    <h1 class="card-title ms-auto me-auto" style={{"marginTop":"6.3rem",fontSize:"3rem"}}>Saved Articles</h1>
    <h4 class="card-text">
      Save your articles to read them later..
    </h4>
    <h4 class="card-text">
    You can also UnSave the articles down below
    </h4>
  </div>
</div>


<div className="cont px-3 align-items-center justify-content-center " style={{"marginTop":"-9rem","zIndex":1}}>


<div>
{userProfile.savedForLater.map((element) => {
    return <div className="d-flex justify-content-center " key={rand++} style={{zIndex:1}}>
       <ArticlesItem {...element}/>
    </div>
})}
</div>
</div>
</div>

   
  )
}

export default UserArticles


