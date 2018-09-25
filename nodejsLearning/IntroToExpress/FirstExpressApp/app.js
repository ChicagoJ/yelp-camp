var express = require('express');
var app = express();

// "/" => "Hi There!"
app.get("/", function(req,res){
    res.send("Hi There!");
});
// "/bye" => "Goodbye"
app.get("/bye", function(req,res){
    res.send("Goodbye");
});
// "/dog" => "Meow"
app.get("/dog", function(req,res){
    res.send("MEOW!");
})
//Tell Express to listen for requests(start over)
app.listen(3000, process.env.IP, function(){
    console.log("Server has starterd and listen to the port 3000");
});