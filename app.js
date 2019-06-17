const { argv } = require('./config/yargs');

const colors = require('colors');

const { crearArchivo, listarArchivo } = require('./multiplicar/multi');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo: ${archivo}, creado succesfully`.rainbow))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}


// let parametro = argv[2];

// let base = parametro.split('=')[1];