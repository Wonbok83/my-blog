const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const path = require("path");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

//const blogPosts = [];

// Use bodyParser in our app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/my-blog");


// This allows us to serve files out of the client/build folder
app.use(express.static("client/build"));


app.get("/", (req, res) => {
    res.send("HI");
}); 



app.get("/api/blog", (req, res)=> {
    console.log(req.body);
    Blog.find({}).then(results=>res.json(results));
    // res.json([{
    //     id:1,
    //     title: "blog1",
    //     body: "111"
    // },
    // {
    //     id:2,
    //     title: "blog2",
    //     body: "222"
    // }]);
});

app.post("/api/blog", (req, res)=> { 
    console.log(req.body);
   // blogPosts.push(req.body);
    Blog.create(req.body).then(dbBlog => {
        res.json(dbBlog);
    })
   
});

// This is a catch all if no other routes are matched
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });


app.listen(PORT, function() {
    console.log(`API server on port ${PORT}`)
})



  