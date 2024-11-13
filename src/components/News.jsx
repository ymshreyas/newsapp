import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I'm a constructor from news component");
    this.state = {
      articles: [],
      load: false,
      page: 1,
    };
  }
  async updatenews() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=9d9770c505784d01a8200e1ad2032571&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ load: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      load: false,
    });
  }
  async componentDidMount() {
    this.updatenews()
  }
  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updatenews();
  };
  handlePreviousClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updatenews();
  };
  render() {
    return (
      <div className="container my-3 ">
        <h2 className="text-center">News Monkey Top Headlines on <span style={{color:'#172499'}}>{this.props.category}</span></h2>
        {this.state.load && <Spinner />}
        <div className="row">
          {!this.state.load &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    time={element.publishedAt}
                    name={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.handlePreviousClick}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            onClick={this.handleNextClick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
