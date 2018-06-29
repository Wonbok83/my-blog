import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {

    state = {
      title:"",
      body: ""
    }



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

  handleInputChange = event => {
    const {name, value} = event.target;
    // const value =  event.target.value;
    this.setState({
      [name]:value
    });
  }

  saveBlog = event => {
    event.preventDefault();
    console.log(this.state.title);
    console.log(this.state.body);

  }

  render() {
    return (
      <div>
        <form>
        <input name="title" onChange = {this.handleInputChange} value={this.state.title}/>
        <textarea name="body" onChange = {this.handleInputChange} value = {this.state.body}></textarea>
        <button onClick={this.saveBlog}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
