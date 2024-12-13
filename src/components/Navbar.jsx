import React, { Component } from "react";
import news_monkey from './news_monkey.jpg'
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img style={{width:'40px',height:'40px', borderRadius:'5px'}} src= {news_monkey} alt="err" srcset="" />
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
