var http = require("http"), 
fs = require("fs");


http.createServer(function(req , res){
    fs.readFile("./4_html.html", function(err , html){
        var html_string = html.toString();

        var variables = html_string.match(/[^\{\}]+(?=\})/g); // busca en html un valor entre llaves
        var nombre = "itan";
        
        for (var i = variables.length -1; i >= 0; i--) {
            var value = eval(variables[i]);
            html_string = html_string.replace("{"+variables[i]+"}",value);
        }

        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(html_string);
        res.end();
    });
}).listen(8080);