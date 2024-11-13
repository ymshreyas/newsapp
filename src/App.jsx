import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  render() {
    let pageSize=5
    let api_key=process.env.AP__KEY
    return (
      <div>
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<News key={"general"} pageSize={this.pageSize} apikey={api_key} category={"general"} />}/>
            <Route exact path="/business" element={<News key={"business"} pageSize={pageSize} apikey={api_key} category={"business"} />}/>
            <Route exact path="/entertainment" element={<News key={"entertainment"} pageSize={pageSize} apikey={api_key} category={"entertainment"} />}/>
            <Route exact path="/health" element={<News key={"health"} pageSize={pageSize} apikey={api_key} category={"health"} />}/>
            <Route exact path="/sports" element={<News key={"sports"} pageSize={pageSize} apikey={api_key} category={"sports"} />}/>
            <Route exact path="/technology" element={<News key={"technology"} pageSize={pageSize} apikey={api_key} category={"technology"} />}/>
            <Route exact path="/science" element={<News key={"science"} pageSize={pageSize} apikey={api_key} category={"science"} />}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
