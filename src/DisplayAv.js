import React from 'react'
import Avatar from '@material-ui/core/avatar'


export default function DisplayAv(props) {
   
  return (
    <div>
 <a href="#"><Avatar
  alt="Remy Sharp"
  src={props.img}
  sx={{ width: 56, height: 56 }}
/></a>
{props.name}
    </div>
  )
}
