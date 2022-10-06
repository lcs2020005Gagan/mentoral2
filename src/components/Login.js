import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCard,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import Avatar from '@mui/material/Avatar';



function Login() {
    const navigate = useNavigate();
    const [note, setnote] = useState({email:"",password:""});
    const [up, setup] = useState({name:"" , profileImg:"",email:"",password:""});

    const handlechange=(e)=>{
      setnote({...note,   [e.target.name]:e.target.value})
    }
    const handleup=(e)=>{
        setup({...up,   [e.target.name]:e.target.value})
      }
    const handlesubmit= async(e)=>{
      e.preventDefault();
      const email=note.email
      const password=note.password
      // console.log(note.email," ",note.password)
          const response=await fetch("http://localhost:5000/api/auth/loginuser",{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                
              },
              body: JSON.stringify({email,password}),
            });
          const json=await response.json();
          console.log(json.success);
          if(json.success)
          {
            //redirect
            localStorage.setItem('token',json.authtoken)
            localStorage.setItem('who',"u")
  
            navigate('/');
            
          }
          else
          {
            // alert("invalid cred");
            console.log("invalid cred")
          }
  
      }

      const submitup= async(e)=>{
        e.preventDefault();
        const name=up.name
        const email=up.email
        const password=up.password
        // console.log(note.email," ",note.password)
            const response=await fetch("http://localhost:5000/api/auth/createuser",{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  
                },
                body: JSON.stringify({name,email,password}),
              });
            const json=await response.json();
            console.log(json.success);
            if(json.success)
            {
              //redirect
              localStorage.setItem('token',json.authtoken)
    
              navigate('/');
              
            }
            else
            {
              // alert("invalid cred");
              console.log("invalid cred")
            }
    
        }

    const [justifyActive, setJustifyActive] = useState('tab1');;
  
    const handleJustifyClick = (value) => {
      if (value === justifyActive) {
        return;
      }
  
      setJustifyActive(value);
    };
  return (
            <div>
    <div className="p-5 bg-image " style={{backgroundImage:`url("https://media.istockphoto.com/photos/beautiful-sunrise-over-the-sea-picture-id610041376?k=20&m=610041376&s=612x612&w=0&h=JoEPWYoq1-FN5ANIQHNNdI2XrRDYnPCUWuLOHMrgLnE=")`,backgroundSize:'100% 100%',filter:'brightness(85%)', boxShadow: 'inset 0 0 15rem black',height: '75vh', maxWidth:'100%',backgroundRepeat: 'no-repeat'}}></div>

      <MDBCard className='mx-5 mb-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.6)', backdropFilter: 'blur(30px)'}}>
        {/* <MDBCardBody className='p-5 text-center'> */}

          <MDBContainer className=" my-5 d-flex flex-column" style={{"width":"56%"}}>
  
  <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
    <MDBTabsItem>
      <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
        Login
      </MDBTabsLink>
    </MDBTabsItem>
    <MDBTabsItem>
      <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
        Register
      </MDBTabsLink>
    </MDBTabsItem>
  </MDBTabs>

  <MDBTabsContent>

    <MDBTabsPane show={justifyActive === 'tab1'}>

      <div className="text-center mb-3">
        <p>Sign in with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>
        </div>

        <p className="text-center mt-3">or:</p>
      </div>

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' name='email' type='email' onChange={handlechange}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name='password' onChange={handlechange}/>

      <div className="d-flex justify-content-between mx-2 mb-2" >
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4 w-100" onClick={handlesubmit}>Sign in</MDBBtn>
      <p className="text-center">Not a member? <a href="#!" onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>Register</a></p>
      <p className="text-center">Are you a mentor? <a href="#!">Sign in here</a></p>

    </MDBTabsPane>

    <MDBTabsPane show={justifyActive === 'tab2'}>

      <div className="text-center mb-3">
        <p>Sign un with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>
        </div>

        <p className="text-center mt-3">or:</p>
      </div>
      

      <MDBInput wrapperClass='mb-4' label='Name' id='form1' name='name' type='text' onChange={handleup}/>
      <MDBInput wrapperClass='mb-4' label='Email' id='form1' name='email' type='email' onChange={handleup}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form1' name='password' type='password'onChange={handleup}/>

      <div className='d-flex justify-content-center mb-4'>
        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
      </div>

      <MDBBtn className="mb-4 w-100" onClick={submitup}>Sign up</MDBBtn>

    </MDBTabsPane>

  </MDBTabsContent>

</MDBContainer>
</MDBCard>
</div >
  )
}

export default Login

//

 