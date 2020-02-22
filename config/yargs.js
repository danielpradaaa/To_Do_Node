const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',

        }
    })
    .command('actualizar', 'Permite actualizar una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
        },
        completado: {
            default: true,
            alias: 'c',

        }

    })
    .command('borrar', 'Elimina la tarea del .json con la descripción ingresada', {
        descripcion: {
            demand: true,
            alias: 'd',
        }
    })
    .help().argv;


module.exports = {
    argv,
}
