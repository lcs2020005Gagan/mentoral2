import React from 'react'
let color="#181236";

function Navbar() {
  return (
    <div>
<nav className="navbar fixed-top navbar-expand-sm navbar-light" >
        <div className="container-fluid">
    <a className="navbar-brand" href="#">
    {/* <img src={require('./navbar.png')} style={{"width":"50px", "height":"40px"}}  alt="" className="d-inline-block align-text-top"/> */}

     <h2>
      MentoraL
      </h2>
    </a>
  </div> 
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Articles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Programs</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Account
          </a>
          <ul className="dropdown-menu ">
            <li><a className="dropdown-item" href="#">Saved Articles</a></li>
            <li><a className="dropdown-item" href="#">Liked Articles</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Followed Mentors</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar