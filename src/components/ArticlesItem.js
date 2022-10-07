import React ,{useState,useContext,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
//
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Grid from '@material-ui/core/grid'
import IconButton from '@mui/material/IconButton';
import Chip from '@material-ui/core/chip'
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import noteContext from '../context/notes/noteContext'


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
//
//do clickable tags

function ArticlesItem(props) {
  
    const {title,image,description,author,date,tags}=props;
    // console.log("props is",props)
    // console.log(title);
    const [expanded, setExpanded] = React.useState(false);
    const [saved, setSaved] = React.useState(false);
    const context=useContext(noteContext);
    const {userProfile,getUserProfile,updateUser}=context;

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const navigate=useNavigate()
    
    const handleSave=()=>{
      if(localStorage.getItem('who')!=="u")
      navigate('/loginu')
     if(!arr.includes(props._id))
     {
       userProfile.savedForLater.push(props._id);
      //  console.log(userProfile.savedForLater);
       updateUser(userProfile);
     }
     else{
        let newarr=[];
        for(let i=0;i<userProfile.savedForLater.length;i++)
        {
          if(userProfile.savedForLater[i]._id!==props._id)
          newarr.push(userProfile.savedForLater[i]);
        }
        userProfile.savedForLater=newarr;
        // console.log(newarr)
        updateUser(userProfile)
     }
    }
    let rand=0

    const {name,email,password,profileImg,followedMentors,enrolledPrograms,savedForLater}=userProfile
    const [arr,setArr]=useState([])

    useEffect(() => {
      if(localStorage.getItem('who')==="u")
      getUserProfile();
      // console.log(savedForLater.length)
      const newarr=[]
      for(let i=0;i<userProfile.savedForLater.length;i++)
      newarr.push(savedForLater[i]._id)
      setArr(newarr)
      // console.log(userProfile)
    }, [userProfile])
  
  return (
    
      <Card sx={{ maxWidth: 400,minWidth: '35%' }} className="align-items-center my-3 justify-content-center ">
<CardHeader style={{display:typeof(author)===String?"none":"flex"}}
          avatar={
              // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            //   R
            // </Avatar>

                <Link  to={`/profile/mentor/${author._id} `}>
            <Avatar
  alt="Remy Sharp"
  src={author.profileImg}
  sx={{ width: 40, height: 40 }}saved
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
        
        <CardMedia
          component="img"
          height="250"
          width="250"
          image={image}
          alt="Paella dish"
        />
        {/* <div className="cont align-items-center justify-content-center">
        {tags.length>=1&&<Chip label={tags[0]} />}
        {tags.length>=2&&<Chip label={tags[1]} />}

        </div> */}
        <div className="cont my-2 d-flex ">

{tags.length>=1&&<Chip
  label={tags[0]}
  component="a"
  href="#basic-chip"
  variant="outlined"
  clickable
  className='mx-1'
/>}

        {tags.length>=2&&<Chip
  label={tags[1]}
  component="a"
  href="#basic-chip"
  variant="outlined"
  clickable
/> }
</div>


        <CardContent>
          <Typography variant="h6" color="text.primary">
          {title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleSave} style={{"color":arr.includes(props._id)?"red":"grey"}}>
            <FavoriteIcon />
          </IconButton>
          
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          {description}
          </CardContent>
        </Collapse>
      </Card>
  
  )
}

export default ArticlesItem

///

