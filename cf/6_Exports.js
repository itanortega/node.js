var http = require("http"), 
    fs = require("fs"),
    parser = require("./6_params_parser.js"),
    render = require("./6_render_view.js");

var p = parser.parse;
var r = render.render;

http.createServer(function(req , res){
    if(req.url.indexOf("favicon.ico")>0){
        return;
    }

    fs.readFile("./5_html.html", function(err , html){
        var html_string = html.toString(); 
        var parametros = p(req);
        var html_string = r(html_string,parametros);

        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(html_string);
        res.end();
    });
    
}).listen(8080);