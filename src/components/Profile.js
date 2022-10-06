import React, { useEffect,useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Rating from '@mui/material/rating'
import Typography from '@material-ui/core/typography'
import WithinProfile from './WithinProfile';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from '@material-ui/core/avatar'


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



function Profile() {
  let rand=0
  const context=useContext(noteContext);
  const {userProfile,getUserProfile}=context;
  const {name,email,password,profileImg,followedMentors,enrolledPrograms,savedForLater}=userProfile
  
  useEffect(() => {
    if(localStorage.getItem('who')==="u")
    getUserProfile();
  }, [userProfile])
  
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
                        <p className=" small text-muted mb-1">Saved Articles</p>
                        <hr />
                        <p className="mb-0">{savedForLater.length}</p>
                      </div>
                      <div className="px-3 ms-auto me-auto">
                        <p className="small text-muted mb-1">Enrolled Programs</p>
                        <hr />
                        <p className="mb-0 ms-auto me-auto">{enrolledPrograms.length}</p>
                      </div>
                      <div className="px-3 ms-auto me-auto">
                        <p className="small text-muted mb-1 ms-auto me-auto">Followed Mentors</p>
                        <hr />
                        <p className="mb-0">{followedMentors.length}</p>
                      </div>
                      {/* <div className='ms-auto me-auto'>
                        <p className="small text-muted mb-1 ">Rating</p>
                        <p className="mb-0">{ratings}</p>
                      </div> */}
                    </div>

                    {localStorage.getItem('who')!=="u"&&<Typography className="text-muted mb-1" component="legend">Ratings</Typography>
                }
 {localStorage.getItem('who')!=="u"&&<Rating name="read-only" value={5} readOnly />}
 {localStorage.getItem('who')!=="u"&&<hr/>  }
{localStorage.getItem('who')!=="u"&&
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
}
        

                </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0" style={{"display":localStorage.getItem('who')==="u"?"none":"block"}}>
            
              <MDBCardBody className="p-0">
                
             <MDBListGroup flush  style={{ background: 'hsla(0, 0%, 100%, 0.6)', backdropFilter: 'blur(30px)' ,borderRadius:'12px'}}>
             <a href='#' style={{"textDecoration":"none"}}>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  </a>
                  <a href='#' style={{"textDecoration":"none"}}>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  </a>
                  <a href='#' style={{"textDecoration":"none"}}>

                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  </a>
                  <a href='#' style={{"textDecoration":"none"}}>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  </a>
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
                  <h1 className="text-muted text-align-center ms-auto bg-transparent">Enrolled Programs</h1>

     {userProfile.enrolledPrograms.slice(0,2).map((element) => {
      // console.log(element.author.name);
         return <div className="col-md-6 bg-transparent" key={rand++}>
            <WithinProfile {...element}/>
         </div>
     })}

 </div>
     <button type="button" class="btn ms-auto btn-dark me-auto my-3" style={{"maxWidth":"6rem"}}>Show All</button>

 </div>
<div className="cont px-3 align-items-center justify-content-center ">


<div className="row">

<h1 className="text-muted text-align-center">Followed Mentors</h1>
     {followedMentors.length>=1&&userProfile.followedMentors.slice(0,6).map((element) => {
      // console.log(element.name)
         return <div className="col-md-2 my-3" key={rand++}>
            <DisplayAv name={element.name} img={element.profileImg}/>
         </div>
     })}

     {
       followedMentors.length===0&&<h1 className="text-muted text-align-center">No followed mentors</h1>
       
      }
 </div>
 {followedMentors.length>6&&<button type="button" class="btn align-items-center justify-content-center ms-auto btn-dark me-auto my-3" style={{"maxWidth":"6rem"}}>Show All</button>}
</div>
<div className="cont px-3 align-items-center justify-content-center ">


<div className="row">

<h1 className="text-muted text-align-center">Saved Articles</h1>
     {followedMentors.length>=1&&userProfile.savedForLater.slice(0,3).map((element) => {
      // console.log(element.name)
         return <div className="my-3" key={rand++}>
          <ProfileArticles {...element}/>
         </div>
     })}

     </div>
 
      {savedForLater.length>6&&<button type="button" class="btn align-items-center justify-content-center ms-auto btn-dark me-auto my-3" style={{"maxWidth":"6rem"}}>Show All</button>}
      {
        savedForLater.length===0&&<p>You have not saved any articles</p>
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

export default Profile
//
