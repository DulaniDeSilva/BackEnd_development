//jshint esversion:6

//require express into my file
const express = require("express");

const app = express();

//GET REQUEST  
//get request : location => '/' which is the route home page, 
app.get("/", function(request, response) {
    //response.send("Hello");
    response.send("<h1> Hello Express! </h1>");
});

app.get("/contact", function(request, response) {
    response.send("Contanct me !!!");
});

app.get("/about", function(request, response) {
    response.send("<h1>Dulani De Silva</h1> <br> <h2> Undergraduate at UOP</h2>")
});

app.get("/hobbies", function(request, response) {
    response.send("THis is hobby pages");
});



app.listen(3000, function(){
    console.log("Server started on port 3000");
});












//use this app
// app.removeListener(3000, function(){
//     console.log("Server started");
// });
//listen to the port
