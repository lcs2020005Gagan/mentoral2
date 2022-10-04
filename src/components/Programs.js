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
      <div className="cont">
        <ArticleCarousel/>
      </div>
    

            <div className="cont px-3 align-items-center justify-content-center ">


                <div className="row">

                     {allPrograms.map((element) => {
                         return <div className="col-md-4" key={rand++}>
                            <ProgramsItem {...element}/>
                         </div>
                     })}
                 </div>
            </div>


  </div>
  )
}

export default Programs