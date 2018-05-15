const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const compleado = {
    default: true,
    alias: 'c',
    desc: 'Marca una tarea como completada'
}

const opt_crear = {
    descripcion: descripcion
}

const opt_borrar = {
    descripcion: descripcion
}

const opt_actualizar = {
    descripcion: descripcion,
    completado: compleado
}

const argv = require('yargs')
    .command('crear', 'Crea un tarea por hacer', opt_crear)
    .command('actualizar', 'Actualiza una tarea', opt_actualizar)
    .command('listar', 'Lista las tareas')
    .command('borrar', 'Borra una tarea', opt_borrar)
    .help()
    .argv;


module.exports = {
    argv
}