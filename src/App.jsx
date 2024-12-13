import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Landing from './components/Landing';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  pageSize=5
  api_key=process.env.REACT_APP_API_KEY
  constructor(){
    super();
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedBackgroundColor = localStorage.getItem("backgroundColor") || "white";
    const savedTextColor = localStorage.getItem("textColor") || "#121212";
    this.state = {
      mode:savedTheme
    }
    document.body.style.backgroundColor = savedBackgroundColor;
    document.body.style.color = savedTextColor;
  }
  toggleMode = () => {
    if(this.state.mode==='light'){
      // this.setState({mode:'dark'})
      this.setState({ mode: 'dark' }, () => {
        localStorage.setItem("theme", 'dark');
        localStorage.setItem("backgroundColor", '#121212');
        localStorage.setItem("textColor", 'white');
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = 'white';
      });
    }
    else{
      // this.setState({mode:'light'})
      this.setState({ mode: 'light' }, () => {
        localStorage.setItem("theme", 'light');
        localStorage.setItem("backgroundColor", 'white');
        localStorage.setItem("textColor", '#121212');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#121212';
      });
    }
  }
  render() {
    return (
      <div className={this.state.mode === "dark" ? "dark-theme" : "light-theme"}>
        <Router>
        <Navbar mode={this.state.mode} toggleMode = {this.toggleMode}/>
          <Routes>
            <Route exact path="/" element={<Landing/>}/>
            <Route exact path="/general" element={<News mode={this.state.mode} key={"general"} pageSize={this.pageSize} apikey={this.api_key} category={"general"} />}/>
            <Route exact path="/business" element={<News mode={this.state.mode} key={"business"} pageSize={this.pageSize} apikey={this.api_key} category={"business"} />}/>
            <Route exact path="/entertainment" element={<News mode={this.state.mode} key={"entertainment"} pageSize={this.pageSize} apikey={this.api_key} category={"entertainment"} />}/>
            <Route exact path="/health" element={<News mode={this.state.mode} key={"health"} pageSize={this.pageSize} apikey={this.api_key} category={"health"} />}/>
            <Route exact path="/sports" element={<News mode={this.state.mode} key={"sports"} pageSize={this.pageSize} apikey={this.api_key} category={"sports"} />}/>
            <Route exact path="/technology" element={<News mode={this.state.mode} key={"technology"} pageSize={this.pageSize} apikey={this.api_key} category={"technology"} />}/>
            <Route exact path="/science" element={<News mode={this.state.mode} key={"science"} pageSize={this.pageSize} apikey={this.api_key} category={"science"} />}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
