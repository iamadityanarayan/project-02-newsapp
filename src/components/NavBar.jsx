import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
          <div className="container-xxl">
            <Link className="navbar-brand text-info fw-bold" to="/">NEWS<span className='fst-italic text-warning'>WORLD</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link text-uppercase" to="/business">business</Link></li>
                <li className="nav-item"><Link className="nav-link text-uppercase" to="/entertainment">entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link text-uppercase" to="/general">general</Link></li>
                <li className="nav-item"><Link className="nav-link text-uppercase" to="/health">health</Link></li>
                <li className="nav-item"><Link className="nav-link text-uppercase" to="/science">science</Link></li>
                <li className="nav-item"><Link className="nav-link text-uppercase" to="/sports">sports</Link></li>
                <li className="nav-item"><Link className="nav-link text-uppercase" to="/technology">technology</Link></li>
              </ul>
              <a className="btn btn-sm btn-outline-info" to="#" role="button">Sign Up / Sign In</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
