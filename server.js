const express = require("express")
const app = express()

// Parses our request and converts it into a format from which
// you can easily extract relevant information that you may need.
// For example, a sign-up form. Matter of fact, we are using something like
// <form> in html file.
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))

// This is used to send the whole html file to the page.
app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html")
})

// This will extract stuff from html and we will use them here.
// And for the feature extraction, we are using "body-parser".
app.post("/", function(req, res){
  var w = Number(req.body.weight)
  var h = Number(req.body.height)
  var hh = h * h / 10000
  var result = w / hh
  res.send("The BMI is: " + result.toFixed(3))
  console.log(res)
})

// Setting up the server.
app.listen(666, function(){
  console.log("Listening on  port 666 pal...")
})
