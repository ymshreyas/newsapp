<<<<<<< HEAD
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Landing from './components/Landing';
=======
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
>>>>>>> master
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
<<<<<<< HEAD
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
=======

export default class App extends Component {
  render() {
    let pageSize = 20
    return (
      <div>
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<News key={"general"} pageSize={pageSize} category={"general"} />}/>
            <Route exact path="/business" element={<News key={"business"} pageSize={pageSize} category={"business"} />}/>
            <Route exact path="/entertainment" element={<News key={"entertainment"} pageSize={pageSize} category={"entertainment"} />}/>
            <Route exact path="/health" element={<News key={"health"} pageSize={pageSize} category={"health"} />}/>
            <Route exact path="/sports" element={<News key={"sports"} pageSize={pageSize} category={"sports"} />}/>
            <Route exact path="/technology" element={<News key={"technology"} pageSize={pageSize} category={"technology"} />}/>
            <Route exact path="/science" element={<News key={"science"} pageSize={pageSize} category={"science"} />}/>
>>>>>>> master
          </Routes>
        </Router>
      </div>
    )
  }
}
