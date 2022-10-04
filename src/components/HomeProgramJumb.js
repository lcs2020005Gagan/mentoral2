import React from 'react'

function HomeProgramJumb() {
    const img="https://temp.compsci88.com/cover/Shingeki-No-Kyojin.jpg"
  return (
    <div>
        <header>

  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div id="intro-example" className="p-5 text-center bg-image"
    style={{"backgroundImage": "{img}"}}>
    <div className="mask" style={{"backgroundColor": "rgba(0, 0, 0, 0.7)"}}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
          <h5 className="mb-4">
            Best & free guide of responsive web design
          </h5>
          <a className="btn btn-outline-light btn-lg m-2" href="https://www.youtube.com/watch?v=c9B4TPnak1A"
            role="button" rel="nofollow" target="_blank">Start tutorial</a>
          <a className="btn btn-outline-light btn-lg m-2" href="https://mdbootstrap.com/docs/standard/"
            target="_blank" role="button">Download MDB UI KIT</a>
        </div>
      </div>
    </div>
  </div>
</header>
prog

    </div>
  )
}

export default HomeProgramJumb