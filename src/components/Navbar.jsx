import React, { Component } from "react";
import news_monkey from './news_monkey.jpg'
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <nav className={`navbar fixed-top navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img style={{width:'40px',height:'40px', borderRadius:'5px'}} src= {news_monkey} alt="err" srcset="" />
=======
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img style={{width:'40px',height:'40px', borderRadius:'5px'}} src= "https://files.oaiusercontent.com/file-OxPeQglBcelmhyyr3s90RrBf?se=2024-11-06T09%3A26%3A00Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D328bc57b-745b-4b9d-9255-ee8de76f6a72.webp&sig=7Mzaw850fXVajKImOi%2BXP%2BNJjJU4CANZqYhhb0ChU0Y%3D" alt="err" />
>>>>>>> master
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
              </ul>
              <div class={`form-check form-switch text-${this.props.mode==='light'?'dark':'light'}`}>
                <input checked={this.props.mode === "dark"} onClick={this.props.toggleMode} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                <label class="form-check-label" for="flexSwitchCheckChecked">Enable Dark Mode</label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
