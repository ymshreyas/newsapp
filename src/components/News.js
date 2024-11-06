import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export class News extends Component {
  constructor(){
      super();
      console.log("Hello I'm a constructor from news component")
      this.state = {
        articles : [],
        load : false,
        page:1,
      }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9d9770c505784d01a8200e1ad2032571&page=1&pageSize=${this.props.pageSize}`
    this.setState({load:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,load:false})
  }
  handleNextClick = async () =>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9d9770c505784d01a8200e1ad2032571&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      this.setState({load:true})
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles,
        load:false
      })
    }
  handlePreviousClick = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9d9770c505784d01a8200e1ad2032571&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({load:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      page:this.state.page-1,
      articles:parsedData.articles,
      load:false
    })
  }
  render() {
    return (
      <div className='container my-3 '>
        <h2 className='text-center' >News Monkey Top Headlines</h2>
        {this.state.load && <Spinner />}
        <div className="row">
          {!this.state.load && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <Newsitem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
          })}
        </div>
        <div className='d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" onClick={this.handlePreviousClick} className="btn btn-dark">&larr; Previous</button>
          <button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
