console.log(process.argv);

function leerOpcion(opcion){
    var index = process.argv.indexOf(opcion);
    if(index==-1){
        return false;
    }else{
        return process.argv[index+1];
    }
}

var nombre = leerOpcion("-nombre");

console.log("El nombre es " + nombre);

process.stdout.write("Cúal es el apellido: \n");
process.stdin.on("data",function(data){
    process.stdout.write(`El nombre completo es ${nombre} ${data}`);
    process.exit();
});
