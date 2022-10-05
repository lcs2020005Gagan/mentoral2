import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Avatar from '@material-ui/core/avatar'

function withinProfile(props) {
  const {title,image,author,description}=props
  return (
        <MDBRow className="justify-content-center">
          <MDBCol >
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody >
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', height:'9rem', borderRadius: '15px' }}
                      src={image}
                      alt='Generic placeholder image'
                      fluid />
                  <div className='mt-1'>By, <a href="#" style={{"color":"blue"}}>{author.name}</a></div>

                  </div>
                  <div className="flex-grow-1 ms-3">
                 
                    <a href="#" style={{"text-decoration":"none"}}><div className="muted-text"><h6>{title}</h6></div></a>
                    <div>{description}</div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
  )
}

export default withinProfile
//
