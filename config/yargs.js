const opts = {
    base: {
        demand: true,
        alias: 'b',
        describe: 'La pareste de pecho colorado'
    },
    limite: {
        alias: 'l',
        default: 10,
        describe: 'Saveee'
    }
}

const argv = require('yargs')
    .command('listar', 'ya te la you now', opts)
    .command('crear', 'al septimo dia', opts)
    .help()
    .argv;

module.exports = {
    argv
}