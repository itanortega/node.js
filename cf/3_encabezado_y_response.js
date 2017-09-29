var http = require("http"), 
fs = require("fs");


http.createServer(function(req , res){
    fs.readFile("./2_html.html", function(err , html){
       res.writeHead(200,{"Content-Type":"application/json"});
       res.write(JSON.stringify({nombre: "Uriel", username:"uriel"}));
       res.end();
    });
}).listen(8080);
