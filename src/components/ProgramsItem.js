import React from 'react'
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
import IconButton from '@mui/material/IconButton';
//

function ProgramsItem(props) {
    const {title,image,description,author,date,tags}=props;

  return (
    <div className='my-3'> 
        <Card sx={{maxWidth: 345}}>
        <CardHeader
          avatar={
            // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            //   R
            // </Avatar>
            <a href="#">
 <Avatar
  alt="Remy Sharp"
  src={image}
  sx={{ width: 40, height: 40 }}
/>
            </a>
           
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={author.name}
          subheader={date.toString()}
        />
    <CardActionArea>
      <CardMedia
        component="img"
        height="220"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
    </CardActionArea>
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
    <CardActions>
   
    <Button variant="outlined">Enroll</Button>

    </CardActions>
  </Card>
  </div>
  )
}

export default ProgramsItem



