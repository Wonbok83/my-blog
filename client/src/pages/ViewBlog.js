//what sort of data do we need ? 
//JSON - Title, Body, BLOGS 

import React, { Component } from "react";
import axios from "axios";

class ViewBlog extends Component {
    state = {
        blogs: [{
            id:1,
            title: "test",
            body: "other test"
        },
        {
            id:2,
            title: "test2",
            body: "other test2"
        }]
    };


    refreshBlogs(){
        console.log("this is calling");
        axios.get("/api/blog").then((res)=> {
            console.log(res);
            this.setState({
                blogs: res.data
            })
        });
    }


    componentDidMount(){
        this.refreshBlogs();
    }

    render() {
        return (
            <div>
                {this.state.blogs.map(post => (
                    <div key = {post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    </div>
                ))

                }

            </div>
        )
    }
}

export default ViewBlog;