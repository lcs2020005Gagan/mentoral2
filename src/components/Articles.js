import React from 'react'
import { useEffect ,useContext} from 'react';
import noteContext from '../context/notes/noteContext'
import ArticleCarousel from './ArticleCarousel';
import ArticlesItem from './ArticlesItem';


function Articles() {
  let rand=0
    const context=useContext(noteContext);
    const {allArticles,getAllArticles}=context;
        useEffect(()=>{
    //     if(!localStorage.getItem('token'))
    //     {
    
    // navigate('/login');
  
    //     }
    getAllArticles();
    // console.log(allArticles);
},[allArticles])
  return (
    
<div style={{"marginTop":"5rem"}}>
<div className="cont px-3 align-items-center justify-content-center ">


<div>

{allArticles.map((element) => {
    return <div className="d-flex justify-content-center" key={rand++} >
       <ArticlesItem {...element}/>
    </div>
})}
</div>
</div>
</div>

   
  )
}

export default Articles



// <div  >
// <div className="cont">
//   <ArticleCarousel/>
// </div>


//       <div className="cont px-3 align-items-center justify-content-center ">

//           <div className="d-flex-col justify-content-center align-items-center">

//                {allArticles.map((element) => {
//                    return <div className="justify-content-center align-items-center" key={rand++} style={{"minWidth":"75vw"}}>
//                        <ArticlesItem {...element}/>
//                    </div>
//                })}
//            </div>
//       </div>


// </div>