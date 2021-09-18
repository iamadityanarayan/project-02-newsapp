import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
          <div className="container-fluid">
            <a className="navbar-brand text-info fw-bold" href="#">NEWS<span className='fst-italic text-warning'>WORLD</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-light text-uppercase" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light text-uppercase" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light text-uppercase" href="#">Contact</a>
                </li>
              </ul> */}
              <a class="btn btn-outline-info ms-auto" href="#" role="button">Sign Up / Sign In</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
