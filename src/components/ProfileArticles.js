import React from 'react';
import {Link} from 'react-router-dom'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon
} from 'mdb-react-ui-kit';


function ProfileArticles(props) {
    const {title,author,date,image}=props
  return (
    <div className='bg-transparent'>
    
            <MDBCard  className="d-flex flex-row"style={{ borderRadius: '15px' }}>
            
              <MDBCardBody >
                <div className="cont d-flex">
                <a href="#!">
                    <MDBCardImage
                      width="60"
                      src={image}
                      alt="avatar"
                      className="me-auto"
                      fluid style={{"borderRadius":"12px"}}/>
                  </a>
                  <div className="cont ms-1">
                  <MDBTypography tag='h3'>{title}</MDBTypography>
                <MDBCardText className="small">
                <MDBIcon fas icon="star text-warning" size="lg" />
                  <span>|</span> Last updated on {date}
                </MDBCardText>
                  </div>
                
                </div>

                <hr className="my-4" />
                <div className="d-flex justify-content-start align-items-center">
                
                  <a target="_blank" href={`/profile/mentor/${author._id}`}>
                    <MDBCardImage
                      width="35"
                      src={author.profileImg}
                      alt="avatar"
                      className="rounded-circle"
                      fluid />
                  </a>
                  <span className="mx-2"></span> {author.name}

                 
                </div>
              </MDBCardBody>
            </MDBCard>

        
    </div>
  )
}

export default ProfileArticles
//
