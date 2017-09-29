function render(html_string , parametros){
    var variables = html_string.match(/[^\{\}]+(?=\})/g); // busca en html un valor entre llaves
    var nombre = "";
    for (var i = variables.length -1; i >= 0; i--) {
        var variable = variables[i];
        html_string = html_string.replace("{"+variables[i]+"}",parametros[variable]);
    };
    return html_string;
}

module.exports.render = render;