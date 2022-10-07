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


function ProfileArticlesMentor(props) {
    const {publisher,publisherProfile,title,author,date,image}=props
  return (
    <div className='bg-transparent'>
    
            <MDBCard  className="d-flex flex-row"style={{ borderRadius: '15px' }}>
            
              <MDBCardBody >
                <div className="cont d-flex">
                <Link to="#">
                    <MDBCardImage
                      width="70"
                      height="70"
                      src={image}
                      alt="avatar"
                      className="me-auto"
                      style={{"borderRadius":"12px"}}/>
                  </Link>
                  <div className="cont ms-3">
                  <MDBTypography tag='h3'>{title}</MDBTypography>
                <MDBCardText className="small">
                <MDBIcon fas icon="star text-warning" size="lg" />
                  <span>|</span> Last updated on {date}
                </MDBCardText>
                  </div>
                
                </div>

                <hr className="my-4" />
                <div className="d-flex justify-content-start align-items-center">
                
                  <Link to={`/profile/mentor/${author}`}>
                    <MDBCardImage
                      width="35"
                      src={publisherProfile}
                      alt="avatar"
                      className="rounded-circle"
                      fluid />
                  </Link>
                  <span className="mx-2"></span> {publisher}

                 
                </div>
              </MDBCardBody>
            </MDBCard>

        
    </div>
  )
}

export default ProfileArticlesMentor
//
