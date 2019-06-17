//requireds
const fs = require('fs');
var colors = require('colors');

let listarArchivo = (base, limite = 10) => {
    let data = '';

    for (let i = 0; i <= limite; i++) {
        data += `${ base } * ${ i } = ${base*i} \n`;
    }
    console.log(data.green);


}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base) || !Number(limite)) {
            reject(`Trono pemex. Base -> ${base}. Limite -> ${limite}`);
            return;
        }

        for (let i = 0; i <= limite; i++) {
            data += `${ base } * ${ i } = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}
module.exports = {
    crearArchivo,
    listarArchivo
}