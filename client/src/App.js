import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {

    state = {
      title:"",
      body: ""
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

    postBlog = (event)=> {
      event.preventDefault();
      const {title, body} = this.state;
      axios.post("api/blog", {title, body}).then(res=>{
        console.log(res);
        this.setState({title:"", body:""});
      })
    }

  render() {
    return (
      <div>
        <form>
        <input name="title" onChange = {this.handleInputChange} value={this.state.title}/>
        <textarea name="body" onChange = {this.handleInputChange} value = {this.state.body}></textarea>
        <button onClick={this.postBlog}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
