// first we have to require express
const express = require('express');

const app = express();

//getreques : location of the getrequest
app.get("/", function(req, res) {
    // sending data
//    res.send("Hello"); 

   res.send("<h1> Hello World </h1>")
})

app.get("/contact", function(req, res) {
    res.send("<h1> Contact page </h1> <p> Contact me via live</p>");
})

app.get("/about", function(req, res){
    res.send(" <h1> About me </h1> <p> Hello I am DUlani De SIlva </p>");
})






// setting the server
app.listen(3000, function() {
    console.log('Server started on the port 3000');
});