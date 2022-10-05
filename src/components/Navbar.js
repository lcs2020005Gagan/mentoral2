import React from 'react'
import Avatar from '@material-ui/core/avatar'
import Button from '@material-ui/core/button'
import { Link,useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const profileImg=""
  let color="#181236";
  const handleSignOut=(e)=>{
    localStorage.removeItem('token');
    navigate('/');

  }
  return (
    <div className=" justify-content-center align-items-center text-items-center">
<nav className="rounded ms-auto me-auto navbar fixed-top navbar-expand-sm navbar-light  " style={{"background": 'rgb(255, 255, 255, 0.3)', "backdropFilter": 'blur(5px)', "width":"96%","marginTop":"1rem"}} >
        <div className="container-fluid">
    <a className="navbar-brand" href="#">
    {/* <img src={require('./navbar.png')} style={{"width":"50px", "height":"40px"}}  alt="" className="d-inline-block align-text-top"/> */}

     <h2>
      MentoraL
      </h2>
    </a>
  </div> 
  <div className='ms-auto me-auto'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-auto me-auto" id="navbarSupportedContent">
   
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/articles">Articles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/programs">Programs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mentors">Mentors</Link>
        </li>
        {localStorage.getItem('token')?<li className="nav-item dropdown" >
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            My Account
          </a>
          <ul className="dropdown-menu " style={{"background": 'rgb(255, 255, 255, 0.3)', "backdropFilter": 'blur(50px)'}}>
            <li><Link className="dropdown-item" to="#">Saved Articles</Link></li>
            <li><Link className="dropdown-item" to="#">Liked Articles</Link></li>
            <li><Link className="dropdown-item" to="#">Followed Mentors</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#" onClick={handleSignOut}>Sign Out</Link></li>

          </ul>
        </li>:<Link to="/loginu"><i class="fa-solid fa-right-to-bracket"></i></Link> }
       
      
      </ul>
    {localStorage.getItem('token')&&
      <Avatar
  alt="Remy Sharp"
  src={profileImg}
  sx={{ width: 56, height: 56 }}
  
/>}
       
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar