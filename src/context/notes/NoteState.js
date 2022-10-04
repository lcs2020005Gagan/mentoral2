import react,{useState} from "react"

import NoteContext from "./noteContext"
const NoteState =(props)=>{
    const date = new Date();
    const host="http://localhost:5000"
      
     const strdate=date.toString()
        const initialAllArticles=[]
        const initialAllPrograms=[]
  const [allArticles, setAllArticles] = useState(initialAllArticles)
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

//getMentor
// const editNote=async (id)=>
// {
   
//     // console.log("inside editnote");
//     const response=await fetch(`${host}/api/notes/updatenote/${id}`,{
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           "auth-token": localStorage.getItem('token')
//         },
//         body: JSON.stringify({title, description, tag})
//       });
//     const json=response.json();

//     let newNote=JSON.parse(JSON.stringify(notes));
//     for(let index=0;index<newNote.length;index++)
//     {
//         const element=newNote[index];
//         if(element._id===id)
//         {
//             newNote[index].title=title;
//             newNote[index].description=description;
//             newNote[index].tag=tag;
//             break;
//         }
//     }
//     setNotes(newNote);

// }


    return(
        <NoteContext.Provider value={{allArticles,allPrograms,getAllArticles,getAllPrograms}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;