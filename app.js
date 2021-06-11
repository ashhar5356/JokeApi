//jshint esversion:6

//jshint esversion:6
const express=require("express");
const https=require("https");
const app=express();


const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){

  res.sendFile(__dirname +"/index.html");
});


app.post("/", function(req,res){

// console.log(req.body.cityName);
  //const query=req.body.parameter;
  //const parameter=req.body.parameter;
  const url="https://www.boredapi.com/api/activity/";


  https.get(url,function(response){
      console.log(response.statusCode);

      response.on("data",function(data){
        const Data=JSON.parse(data);
        const activity =Data.activity;



        res.write("<h1>You can do the following activity:      "    + activity+"</h1>");
        /*res.write("<p>The weather currently is " +descp+ "</p>");
        res.write("<img src="+ imageUrl+">");*/
        res.send();


  });
});
});







app.listen(3000,function(){
  console.log("server running 3000")
});
