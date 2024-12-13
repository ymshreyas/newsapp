import React, { Component } from "react";
// import './About.css'
export class About extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <p className="card-title">{this.props.title}</p>
          <p style={{marginBottom:'20px',textAlign:'justify'}} className="small-desc">
            {this.props.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
