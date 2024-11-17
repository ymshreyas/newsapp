import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I'm a constructor from news component");
    this.state = {
      articles: [],
      load: true,
      page: 1,
      totalResults:0
    };
  }
  async updatenews() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
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
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({page: this.state.page + 1})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      load: false,
    });
  };
  capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }
  render() {
    return (
      <>
        <h2 className="text-center" style={{margin:'35px 0px', marginTop:'90px', color:this.props.mode}}>News Monkey Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.load&&<Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    time={element.publishedAt}
                    mode={this.props.mode}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        </>
    );
  }
}

export default News;
