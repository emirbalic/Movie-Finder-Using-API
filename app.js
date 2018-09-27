var express = require("express");
var app = express("express");
var request = require("request");

app.set("view engine", "ejs");

app.get('/', function(req, res) {
   res.render('search'); 
});

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = 'http://www.omdbapi.com/?s=';
    var key = '&apikey=thewdb';
    
    request(url + query + key, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            //res.send(data["Search"][0]["Title"]);
            res.render("results", {data: data});
        }
    });
})

// guardians+of+the+galaxy

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Your Server is Serving!!!!"); 
});