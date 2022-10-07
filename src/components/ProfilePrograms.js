import React,{useEffect,useContext} from 'react'
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
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ProfilePrograms(props) {
  let rand=0
  const context=useContext(noteContext);

  const {userProfile,getUserProfile,updateUser}=context;
    const {title,image,description,author,date,tags}=props;
    const handleSave=()=>{
      const newarr=[];
      for(let i=0;i<userProfile.enrolledPrograms.length;i++)
      {
        if(userProfile.enrolledPrograms[i]._id!==props._id)
        newarr.push(userProfile.enrolledPrograms[i]._id);
      }
      userProfile.enrolledPrograms=newarr;
      updateUser(userProfile);
    }
   
    
        useEffect(()=>{
    //     if(!localStorage.getItem('token'))
    //     {
    
    // navigate('/login');
  
    //     }
getUserProfile();    // console.log(allArticles);
},[userProfile])
    
    
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

<Button variant="outlined" className="ms-auto me-auto" onClick={handleSave}>Enrolled</Button>

</CardActions>
</Card>
</div>
  )
}

export default ProfilePrograms