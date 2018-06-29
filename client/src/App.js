import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {

  getGetRequest(){
    axios.get("/api/test").then(res => {
      console.log("get test");
    }); 
  }
  getPostRequest(){
    //sending test information -> {test: true} -> it is showing up terminal(node server.js) -> it is sending to server. 
    axios.post("/api/test", {test: true}).then(res => {
      console.log("Post test");
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>Hello World!
          <button onClick={this.getGetRequest}>GET</button>
          <button onClick={this.getPostRequest}>POST</button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
