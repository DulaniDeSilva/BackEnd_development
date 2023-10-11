const express = require("express");


const https = require("https");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function (req, res) {

    const query = "London";
    const unit = "metrics";
    const apikey = "b11ec9a2fcb6c1bc93236912330f763f";
    const url = "https://api.openweathermap.org/data/2.5/weather?q= " + query + "&appid= " + apikey + "&units= " + unit;

    res.sendFile(__dirname + '/index.html');


});

app.post("/", function(req, res) {
    console.log(req.body.cityName );
    
})



app.get("/", function(req, res){
    res.send("Server is up");
});


app.listen(3000, function(){
    console.log("Server is running ");
})