import React,{useContext,useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router-dom';

//
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@material-ui/core/chip'
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { Button, CardActionArea, CardActions } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import noteContext from '../context/notes/noteContext'
import IconButton from '@mui/material/IconButton';
//

function ProgramsItem(props) {
  const navigate = useNavigate();
  const location=useLocation()

    const {title,image,description,author,date,tags}=props;
    const context=useContext(noteContext);
    const {userProfile,getUserProfile,updateUser}=context;
    const [arr,setArr]=useState([])
    const textinit=""
    const [text,settext]=useState(textinit)
    const {name,email,password,profileImg,followedMentors,enrolledPrograms,savedForLater}=userProfile
    // console.log(userProfile.enrolledPrograms)
      console.log(props);
      const deletesave=()=>{
        const newarr=[];
        for(let i=0;i<userProfile.enrolledPrograms.length;i++)
        {
          if(props._id!==enrolledPrograms[i]._id)
          newarr.push(enrolledPrograms[i]._id);
        }
        userProfile.enrolledPrograms=newarr;
        setArr(newarr);
      }
    const handleSave=()=>{
      if(localStorage.getItem('who')!=='u')
      navigate('/loginu');
      if(!arr.includes(props._id))
      {
        userProfile.enrolledPrograms.push(props._id);
        updateUser(userProfile);
      }
      // else{
      //   settext("Enroll")
      //    let newarr=[];
      //    for(let i=0;i<userProfile.enrolledPrograms.length;i++)
      //    {
      //      if(userProfile.enrolledPrograms[i]._id!==props._id)
      //      newarr.push(userProfile.enrolledPrograms[i]);
      //    }
      //    userProfile.enrolledPrograms=newarr;
      //    console.log(newarr)
      //    updateUser(userProfile)
      // }
     }
     useEffect(() => {
      // if(localStorage.getItem('who')==="u")
      getUserProfile();
      // setArr([]);
      for(let i=0;i<userProfile.enrolledPrograms.length;i++)
      {
        if(!arr.includes(userProfile.enrolledPrograms[i]._id))
        arr.push(userProfile.enrolledPrograms[i]._id);
      }
      console.log(arr);
     }, [userProfile])

  return (
    <div className='my-3'> 
        <Card sx={{maxWidth: 345}}>
        <CardHeader
          avatar={
            // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            //   R
            // </Avatar>
            <Link  to={`/profile/mentor/${author._id}`}>
            <Avatar
  alt="Remy Sharp"
  src={author.profileImg}
  sx={{ width: 40, height: 40 }}
/>
            </Link>
           
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={author.name}
          subheader={date.toString()}
        />
    <CardActionArea className="ms-auto me-auto">
      <CardMedia
        component="img"
        height="220"
        image={image}
        alt="green iguana"
      />
      <CardContent className="ms-auto me-auto">
        <Typography gutterBottom variant="h5" component="div" className="ms-auto me-auto" >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <div className="cont my-2 d-flex">

{tags.length>=1&&<Chip
  label={tags[0]}
  component="a"
  href="/"
  variant="outlined"
  clickable
  className='ms-auto'
/>}

        {tags.length>=2&&<Chip
  label={tags[1]}
  component="a"
  href="#basic-chip"
  variant="outlined"
  clickable
  className="ms-1 me-auto"
/> }
</div>
    <CardActions>
   
    <Button variant="outlined" className="ms-auto me-auto" onClick={handleSave} style={{color:"white",backgroundColor:arr.includes(props._id)?"grey":"blue"}} disabled={arr.includes(props._id)}>{arr.includes(props._id)?"Enrolled":"Enroll"}</Button>

    </CardActions>
  </Card>
  </div>
  )
}

export default ProgramsItem



