
const express = require("express");

// getting body parser into our
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended:true}));


app.listen(3000, function(){
    console.log("Server started on the port 3000");
});

// home route
// app.get("/", function(req, res){
//     res.send("<h1> Calculator App</h1>");
// });

// sending entire html page : expressjs.com/ api.html
app.get("/", function(req, res){
    // res.sendFile(index.html);
    // insted of above specifing file name we can use __dirname
    res.sendFile(__dirname + "/index.html");
});




app.post("/", function(req, res){

    // this takes the numbers as of string  var num1 = req.body.num1;
    // var num2 = req.body.num2;
    // so need to convert them to numbers


    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result of the calculator is: "+ result );
})


app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight / height;
    res.send("The bmi is: " + bmi);
})