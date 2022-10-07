import React,{useContext,useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/rating'
import Chip from '@material-ui/core/chip'
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { Button, CardActionArea, CardActions } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import noteContext from '../context/notes/noteContext'


function UserMentorsItem(props) {
    const [arr,setArr]=useState([])
    const img="https://mangadex.org/covers/ac6819d8-de35-442c-82dd-3444983d4f26/951e114d-a76c-47e4-923b-030ddaaf83a1.jpg"
    const context=useContext(noteContext);
    const {userProfile,getUserProfile,updateUser}=context;

    const handleClick=()=>{
        const newarr=[];
         
        for(let i=0;i<userProfile.followedMentors.length;i++)
        {
          if(userProfile.followedMentors[i]._id!==props._id)
          newarr.push(userProfile.followedMentors[i]._id);
        }
        // console.log(arr);
        userProfile.followedMentors=newarr;
        updateUser(userProfile);
        
    }
    useEffect(() => {
        // if(localStorage.getItem('who')==="u")
        getUserProfile();
        // setArr([]);
       
       }, [userProfile])
  return (
    <div>
        
    <section className="justify-content-center align-items-center" style={{"maxWidth": "23rem"}}>
        
        <div className="card testimonial-card mt-2 mb-3">
          <div className="card card-up">
          <img src={img} class="card-img" alt="Stony Beach" style={{"objectFit":"contain"}}/>
          </div>
          <div className="avatar mx-auto white" style={{"zIndex":1}}>
            <a href='#'>
            <img src={props.profileImg} className="rounded-circle img-fluid"
              alt="woman avatar"/>
              </a>
          </div>
          <div className="card-body text-center">
            <h4 className="card-title font-weight-bold">{props.name}</h4>
            <hr/>
            <div className="d-flex justify-content-start align-items-center rounded-3 p-2 mb-2"
                        style={{ backgroundColor: '#efefef' }}>
                        <div className='ms-auto me-auto'>
                          <p className=" small text-muted mb-1">Articles</p>
                          <p className="mb-0">{props.publishedArticles.length}</p>
                        </div>
                        <div className="px-3 ms-auto me-auto">
                          <p className="small text-muted mb-1">Programs</p>
                          <p className="mb-0 ms-auto me-auto">{props.publishedPrograms.length}</p>
                        </div>
                        <div className="px-3 ms-auto me-auto">
                          <p className="small text-muted mb-1 ms-auto me-auto">Followers</p>
                          <p className="mb-0">{props.followers.length}</p>
                        </div>
                        {/* <div className='ms-auto me-auto'>
                          <p className="small text-muted mb-1 ">Rating</p>
                          <p className="mb-0">{ratings}</p>
                        </div> */}
                      </div>
                      <Typography component="legend">Ratings</Typography>
  <Rating name="read-only" value={props.ratings} readOnly />
          </div>
          <Button className="ms-auto me-auto mb-2 " variant="contained" onClick={handleClick}style={{color:"white",backgroundColor:"blue"}}>{"UnFollow"}</Button>      </div>
        
      </section>
    </div>
  )
}

export default UserMentorsItem