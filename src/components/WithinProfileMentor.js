import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Avatar from '@material-ui/core/avatar'

function WithinProfileMentor(props) {
    
  const {publisher,publisherImg,title,image,author,description}=props
  return (
        <MDBRow className="justify-content-center bg-transparent">
          <MDBCol >
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody >
                <div className="d-flex text-black bg-transparent">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', height:'9rem', borderRadius: '15px' }}
                      src={image}
                      alt='Generic placeholder image'
                      fluid />
                 

                  </div>
                  <div className="flex-grow-1 ms-3">
                 
                  <div className="muted-text"><h6>{title}</h6></div>
                    <div>{description}</div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
  )
}

export default WithinProfileMentor
//
