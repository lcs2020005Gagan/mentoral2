import React from 'react'
import { useEffect ,useContext} from 'react';
import noteContext from '../context/notes/noteContext'
import ArticleCarousel from './ArticleCarousel';
import ProgramsItem from './ProgramsItem';


function Programs() {
  let rand=0
    const context=useContext(noteContext);
    const {allPrograms,getAllPrograms}=context;
        useEffect(()=>{
    //     if(!localStorage.getItem('token'))
    //     {
    
    // navigate('/login');
  
    //     }
    getAllPrograms();
    // console.log(allArticles);
},[allPrograms])
  return (
    <div  >
      <div className="cont ms-auto me-auto">
        <ArticleCarousel/>
      </div>
    

            <div className="cont px-3 align-items-center justify-content-center ">


<div>

{allPrograms.map((element) => {
    return <div className="d-flex md-col-4 justify-content-center" key={rand++} >
       <ProgramsItem {...element}/>
    </div>
})}
</div>
</div>


  </div>
  )
}

export default Programs