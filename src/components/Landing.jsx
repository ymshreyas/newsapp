import React, { Component } from "react";
import Typed from "typed.js";
import news from "./news-removebg-preview.png";
import About from "./About";
import styled from "styled-components";

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.el = React.createRef();
    this.typed = null;
  }

  componentDidMount() {
    // Initialize Typed instance
    this.typed = new Typed(this.el.current, {
      strings: [
        "General",
        "Business",
        "Entertainment",
        "Health",
        "Sports",
        "Technology",
        "Science",
      ],
      typeSpeed: 100,
      loop: true,
    });
  }

  componentWillUnmount() {
    // Destroy Typed instance during cleanup to stop animation
    if (this.typed) {
      this.typed.destroy();
    }
  }
  render() {
    return (
      <div className="container">
        <h1
          className="text-center"
          style={{ margin: "35px 0px", marginTop: "90px" }}
        >
          News Monkey
        </h1>
        <h2 className="text-center">
          Your Gateway to the Latest News in
          <br />
          <span style={{ marginTop: "10px", color: "blue" }} ref={this.el} />
        </h2>
        <StyledWrapper>
          <div
            className="row my-4"
          >
            <div class="col-md-7">
              <div class="row ">
                <div class="col-md">
                  <About
                    title={"Stay Informed, Stay Ahead"}
                    description={
                      "In today's fast-paced world, staying updated with current events is essential for personal and professional growth. News Monkey delivers concise, reliable, and up-to-date news directly to you. Whether it’s breaking news, in-depth analysis, or trending stories, we ensure you have all the information you need to stay informed and ahead of the curve."
                    }
                  />
                </div>
                <div class="col-md">
                  <About
                    title={"Diverse Coverage at Your Fingertips"}
                    description={
                      "Our commitment to diverse and unbiased reporting ensures that you receive a comprehensive view of global events. From politics and technology to entertainment and lifestyle, News Monkey offers something for everyone. With easy navigation and personalized content, we help you stay updated with the news that matters most to you."
                    }
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md">
                  <About
                    title={"Accessible and Completely Free"}
                    description={
                      "With News Monkey, your daily dose of news is just a click away. Our platform is optimized for seamless access across devices, ensuring you’re always connected to the latest updates. Best of all, it’s completely free—because we believe that staying informed should never be a privilege, but a standard."
                    }
                  />
                </div>
                <div class="col-md">
                  <About
                    title={"Your Trusted Companion for Daily Updates"}
                    description={
                      "News Monkey is more than just a news platform; it’s your daily companion for staying connected to the world. Whether you're commuting, working, or relaxing, our easily digestible updates keep you in the loop. Make informed decisions, engage in meaningful conversations, and stay ahead—News Monkey has got you covered."
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={news}
                alt=""
              />
            </div>
            </div>
        </StyledWrapper>
      </div>
    );
  }
}
const StyledWrapper = styled.div`
.card-title {
    color: #262626;
    font-size: 1.5em;
    line-height: normal;
    font-weight: 700;
    margin-bottom: 0.5em;
  }
  
  .small-desc {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    color: #452c2c;
  }
  
  .small-desc {
    font-size: 1em;
  }
  
  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 2em;
    height: 2em;
    overflow: hidden;
    top: 0;
    right: 0;
    background: linear-gradient(135deg, #6293c8, #384c6c);
    border-radius: 0 4px 0 32px;
  }
  
  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }
  
  .card {
    display: block;
    position: relative;
    max-width: 300px;
    max-height: 320px;
    background-color: #f2f8f9;
    border-radius: 10px;
    padding: 2em 1.2em;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(to bottom, #c3e6ec, #a7d1d9);
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .card:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #364a60, #384c6c);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }
  
  .card:hover:before {
    transform: scale(28);
  }
  
  .card:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .card:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }
  
  }`;

export default Landing;
