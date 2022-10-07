import React, { useState,useContext } from 'react'
import Avatar from '@material-ui/core/avatar'
import Button from '@material-ui/core/button'
import { Link,useNavigate ,useLocation} from 'react-router-dom';

import { useEffect } from 'react';
import noteContext from '../context/notes/noteContext'


function Navbar() {
  const navigate = useNavigate();
  const location=useLocation();
  const profileImg="https://i.pinimg.com/280x280_RS/4b/56/64/4b5664b2673f8a33eb3eb85dccb56d6d.jpg"
  let color="#181236";
  const context=useContext(noteContext);

  const {profileMentor,getMentorProfile,userProfile,getUserProfile}=context;
  const [nav, setnav] = useState({name:"",profileImg:""})
  const handleSignOut=(e)=>{
    localStorage.removeItem('token');
    navigate('/');

  }
  useEffect(() => {
    if(localStorage.getItem('who')==='u')
    {
      getUserProfile();
      setnav({name:userProfile.name,profileImg:userProfile.profileImg})
    }
   
  }, [localStorage.getItem('who')])
  
  
  return (
    <div className=" justify-content-center align-items-center text-items-center" stle={{backgroundColor:" rgb(26, 32, 53)"}}>
     
<nav className=" ms-auto me-auto pe-3 navbar fixed-top navbar-expand-sm navbar-dark  " style={{"background": 'rgb(26, 32, 53, 0.7)', "backdropFilter": 'blur(5px)', "width":"96%","marginTop":"1rem", "borderRadius":"12px"}} >
        <div className="container-fluid">
    <a className="navbar-brand" href="#">
    {/* <img src={require('./navbar.png')} style={{"width":"50px", "height":"40px"}}  alt="" className="d-inline-block align-text-top"/> */}
    <Link to="/" style={{textDecoration:"none","color":"white"}}>
    <h2>
      MentoraL
      </h2>
        </Link>
     
    </a>
  </div> 
  <div className='ms-auto me-auto'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-auto me-auto" id="navbarSupportedContent">
   
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <Link className={`nav-link ${location.pathname==="/articles"?"active":""}`}naria-current="page" to="/articles" style={{borderBottom:location.pathname==="/articles"?"2px solid white":"0px solid white"}}>Articles</Link>
        </li>
        <li className="nav-item ">
          <Link className={`nav-link ${location.pathname==="/programs"?"active":""}`} to="/programs" style={{borderBottom:location.pathname==="/programs"?"2px solid white":"0px solid white"}}>Programs</Link>
        </li>
        <li className="nav-item ">
          <Link className={`nav-link ${location.pathname==="/mentors"?"active":""}`} to="/mentors" style={{borderBottom:location.pathname==="/mentors"?"2px solid white":"0px solid white"}}>Mentors</Link>
        </li>
        {localStorage.getItem('token')?<li className="nav-item dropdown" style={{color:"white"}}>
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            My Account
          </a>
          <ul className="dropdown-menu " style={{"background": 'rgb(26, 32, 53, 0.8)', "backdropFilter": 'blur(50px)', color:"white"}}>
            <li><Link  className="dropdown-item navbar-dark" to="/profiles/articles" style={{"color":"grey"}}>Saved Articles</Link></li>
            <li><Link className="dropdown-item" to="/profiles/programs" style={{"color":"grey"}}>Enrolled Programs</Link></li>
            <li><Link className="dropdown-item" to="/profiles/mentors" style={{"color":"grey"}}>Followed Mentors</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/" onClick={handleSignOut} style={{"color":"grey"}}>Sign Out</Link></li>

          </ul>
        </li>:
          <li className="nav-item">
          <Link className="nav-link" to="/loginu" style={{"color":"#c89ab9",}}>SignIn</Link>
        </li>}
       
      
      </ul>
    {localStorage.getItem('token')&&
     <Link to="/profiles">
        <Avatar
  alt="Remy Sharp"
  src={profileImg}
  sx={{ width: 56, height: 56 }}
  
/>
     </Link> 
  }
       
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar