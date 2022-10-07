import React, { useContext,useEffect,useState } from 'react';
import noteContext from '../context/notes/noteContext'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Rating from '@mui/material/rating'
import Typography from '@material-ui/core/typography'


function AllMentors(props) {
  const context=useContext(noteContext);
  const [arr,setArr]=useState([])
  const {userProfile,getUserProfile,updateUser}=context;
 
   const handleClick=()=>{
    if(!arr.includes(props._id))
    {
      userProfile.followedMentors.push(props._id);
      updateUser(userProfile);
    }
   
   }
   useEffect(()=>{
    //  if(localStorage.getItem('who')!=="u")
    //  navigate("/login")
  getUserProfile();  
  for(let i=0;i<userProfile.followedMentors.length;i++)
  {
    arr.push(userProfile.followedMentors[i]._id);
  }
  console.log(userProfile);
  console.log(arr);
  },[userProfile])


  const {name,publishedPrograms,publishedArticles,followers,about,profileImg,ratings}=props;
  const img="https://media.istockphoto.com/photos/mountain-landscape-ponta-delgada-island-azores-picture-id944812540?k=20&m=944812540&s=612x612&w=0&h=U3sC5L6ZJY2oHC33eixu4CcB15JsgKl0Wnhtcpf_p40="
  return (
   
    <section className="justify-content-center align-items-center" style={{"maxWidth": "23rem"}}>
        
      <div className="card testimonial-card mt-2 mb-3">
        <div className="card card-up">
        <img src={img} class="card-img" alt="Stony Beach" style={{"objectFit":"contain"}}/>
        </div>
        <div className="avatar mx-auto white" style={{"zIndex":1}}>
          <a href='#'>
          <img src={profileImg} className="rounded-circle img-fluid"
            alt="woman avatar"/>
            </a>
        </div>
        <div className="card-body text-center">
          <h4 className="card-title font-weight-bold">{name}</h4>
          <hr/>
          <div className="d-flex justify-content-start align-items-center rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div className='ms-auto me-auto'>
                        <p className=" small text-muted mb-1">Articles</p>
                        <p className="mb-0">{publishedArticles.length}</p>
                      </div>
                      <div className="px-3 ms-auto me-auto">
                        <p className="small text-muted mb-1">Programs</p>
                        <p className="mb-0 ms-auto me-auto">{publishedPrograms.length}</p>
                      </div>
                      <div className="px-3 ms-auto me-auto">
                        <p className="small text-muted mb-1 ms-auto me-auto">Followers</p>
                        <p className="mb-0">{followers.length}</p>
                      </div>
                      {/* <div className='ms-auto me-auto'>
                        <p className="small text-muted mb-1 ">Rating</p>
                        <p className="mb-0">{ratings}</p>
                      </div> */}
                    </div>
                    <Typography component="legend">Ratings</Typography>
<Rating name="read-only" value={ratings} readOnly />
        </div>
        <Button className="ms-auto me-auto mb-2 " variant="contained" disabled={arr.includes(props._id)} onClick={handleClick}style={{color:"white",backgroundColor:arr.includes(props._id)?"grey":"blue"}}>{arr.includes(props._id)?"Following":"Follow"}</Button>      </div>
      
    </section>
  )
}

export default AllMentors

