import React, { useEffect,useContext, useState } from 'react'
import {Link, useParams } from 'react-router-dom';
import noteContext from '../context/notes/noteContext'
import Rating from '@mui/material/rating'
import Typography from '@material-ui/core/typography'
import WithinProfile from './WithinProfile';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from '@material-ui/core/avatar'
import Button from '@material-ui/core/button'

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit'
import DisplayAv from '../DisplayAv';
import ProfileArticles from './ProfileArticles';
import ProfileArticlesMentor from './ProfileArticlesMentor';
import WithinProfileMentor from './WithinProfileMentor';


function MentorProfile(props) {
    let rand=0
    const {id}=useParams();
    const context=useContext(noteContext);
    const {profileMentor,getMentorProfile}=context;


  const {name,email,profileImg,followers,publishedPrograms,publishedArticles,twitter,github,instagram,facebook,about,skills,ratingsSum,totalVoted,ratings}=profileMentor
  
  useEffect(() => {
      getMentorProfile((id));
    //   console.log(github)
//    console.log(profileMentor)
// console.log(typeof(id)," ",id);
// fetch("http://localhost:5000/api/auth/profile/mentor/"+{id}).then(res=>res.json).then((result)=>{
//     console.log(result)
// })
// console.log(profileMentor)
  }, [profileMentor])
    
  return (
    <div>
      <div className="p-5 bg-image " style={{backgroundImage:`url(${profileImg})`,backgroundSize:'100% 100%',filter:'brightness(85%)', boxShadow: 'inset 0 0 22rem black',height: '75vh', maxWidth:'100%',backgroundRepeat: 'no-repeat'}}></div>

           <section className="ms-auto me-auto "style={{marginTop: '-7rem', background: 'hsla(0, 0%, 100%, 0.6)', backdropFilter: 'blur(30px)' ,maxWidth:'90%', borderRadius:'12px'}} >
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4 bg-transparent" style={{ borderRadius:'12px'}}>
              <MDBCardBody className="text-center">
              <MDBCardImage
                      style={{ width: '8rem', height:'8rem', borderRadius: '12px' }}
                      src={profileImg}
                      fluid />
                <p className="text-muted mb-1"><h1>{name}</h1></p>
                {/* {localStorage.getItem('who'==="m")&&<p className="text-muted mb-4">{about}</p>} */}
                <div className="d-flex justify-content-start align-items-center rounded-3 p-2 mb-3"
                      style={{ backgroundColor: '#efefef' ,borderRadius:'12px'}}>
                      <div className='px-3 ms-auto me-auto'>
                        <p className=" small text-muted mb-1">Published Articles</p>
                        <hr />
                        <p className="mb-0">{publishedArticles.length}</p>
                      </div>
                      <div className="px-3 ms-auto me-auto">
                        <p className="small text-muted mb-1">Published Programs</p>
                        <hr />
                        <p className="mb-0 ms-auto me-auto">{publishedPrograms.length}</p>
                      </div>
                      <div className="px-3 ms-auto me-auto">
                        <p className="small text-muted mb-1 ms-auto me-auto">Followed Mentors</p>
                        <hr />
                        <p className="mb-0">{followers.length}</p>
                      </div>
                      {/* <div className='ms-auto me-auto'>
                        <p className="small text-muted mb-1 ">Rating</p>
                        <p className="mb-0">{ratings}</p>
                      </div> */}
                    </div>

                    {<Typography className="text-muted mb-1" component="legend">Ratings</Typography>
                }
 {<Rating name="read-only" value={5} readOnly />}
 {<hr/>  }
{
                <div className="d-flex justify-content-center mb-2">
                <Button variant="contained" disableElevation style={{"color":"white","backgroundColor":"blue"}}>Follow</Button>
                <Button variant="outlined blue" className="ms-1" style={{color:"blue","backgroundColor":"white", border:"1px solid blue"}}>Message</Button>
                </div>
}
        

                </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
            
              <MDBCardBody className="p-0">
                
             <MDBListGroup flush  style={{ background: 'hsla(0, 0%, 100%, 0.6)', backdropFilter: 'blur(30px)' ,borderRadius:'12px'}}>
             <Link to={`${github}`} style={{"textDecoration":"none"}}>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>GitHub</MDBCardText>
                  </MDBListGroupItem>
                  </Link>
                  <Link to='#' style={{"textDecoration":"none"}}>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>Twitter</MDBCardText>
                  </MDBListGroupItem>
                  </Link>
                  <Link to='#' style={{"textDecoration":"none"}}>

                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>Instagran</MDBCardText>
                  </MDBListGroupItem>
                  </Link>
                  <Link to='#' style={{"textDecoration":"none"}}>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>Facebook</MDBCardText>
                  </MDBListGroupItem>
                  </Link>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4 bg-transparent"  style={{"borderRadius":"12px"}}>
              <MDBCardBody >
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                {/* <hr />
                <MDBRow style={{"display":localStorage.getItem('who')==="u"?"none":"block"}}>
                  <MDBCol sm="3">
                    <MDBCardText>Skills</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">skills</MDBCardText>
                  </MDBCol>
                </MDBRow> */}
                {/* <hr /> */}
                {/* <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow> */}
              </MDBCardBody>
            </MDBCard>
          
                <div className='align-items-center justify-content-centerbg-transparent'>
                <div className="cont px-3 align-items-center justify-content-center bg-transparent">


<div className="row">
                  <h1 className="text-muted text-align-center ms-auto bg-transparent">Published Programs</h1>

     {profileMentor.publishedPrograms.map((element) => {
      // console.log(element.author.name);
         return <div className="col-md-6 bg-transparent" key={rand++}>
            <WithinProfileMentor publisher="profileMentor.name" publisherProfile="profileMentro.profileImg" {...element}/>
         </div>
     })}
    {
        publishedPrograms.length===0&&<p>It's empty in here...No published programs</p>
      }

 </div>
  
    


 </div>

<div className="cont px-3 align-items-center justify-content-center ">


<div className="row">

<h1 className="text-muted text-align-center">Published Articles</h1>
     {publishedArticles.length>=1&&profileMentor.publishedArticles.map((element) => {
      // console.log(element.name)
         return <div className="my-3" key={rand++}>
          <ProfileArticlesMentor publisher={profileMentor.name} publisherProfile={profileMentor.profileImg} {...element}/>
         </div>
     })}

     </div>
 
    
      {
        publishedArticles.length===0&&<p>It's empty in here...No published articles</p>
      }
</div>




                </div>
                
                 
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </div>
  )
}

export default MentorProfile