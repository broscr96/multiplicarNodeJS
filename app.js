const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
var colors = require('colors');

//let base = 'abc';
//let argv2 = process.argv;
//let argumento = process.argv[2];
//let base = argumento.split('=')[1]
//console.log(argumento[2]);  solo para recibir el valor de la base sin poner --base=n
//console.log('Limite ', argv.limite);

let comando = argv._[0]; //Hace referencia al argv del required (linea 1)

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.white))
            .catch(e => console.log(`Error creando archivo, `.red, e));
        break;

    default:
        console.log('Comando no reconocido');
}