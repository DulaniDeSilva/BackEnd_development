
const express = require("express");
const app = express();

// sending the html file 
app.get("/", function(request, response) {
    // response.sendFile("index.html"); 
    // instead of above method constant of file path is given
    // response.sendFile(__dirname)
    // console.log(__dirname);
    // appending file to the srever without telling where it is located
    response.sendFile(__dirname + "/index.html");
});

// hp@DESKTOP-B24IE5S MINGW64 /f/GIT MY PROJECTS/BACKEND DEVELOPMENT/BackEnd_development/Calculator (main)
// $ nodemon calculator.js
// [nodemon] 3.0.1
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node calculator.js`
// Server started on port 3000
// F:\GIT MY PROJECTS\BACKEND DEVELOPMENT\BackEnd_development\Calculator
// F:\GIT MY PROJECTS\BACKEND DEVELOPMENT\BackEnd_development\Calculator

app.post("/", function(req, res) {
    res.send("Thank for sending");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});