const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const path = require("path");

// Use bodyParser in our app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("HI");
}); 



app.get("/api/test", (req, res)=> {
    console.log(req.body);
    res.json(true);
});

app.post("/api/test", (req, res)=> { 
    console.log(req.body);
    res.json(req.body);
});


//this allows us to serve files out of the client server
// app.use(express.static("client/build"));

app.listen(PORT, function() {
    console.log(`API server on port ${PORT}`)
})

// app.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "client/build/index.html"));
//   });

  