const fs = require('fs');


let listadoPorHacer = [];
//let resultadoArray = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('No se ha podido grabar', err);
        else
            return true;
    });

}

const cargarDB = () => {
    try {
        listadoPorHacer = require(`../db/data.json`);
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = (mostrar = 'ALL') => {

    cargarDB();
    let resultadoArray = [];
    console.log(listadoPorHacer);
    if (mostrar === 'DONE') {
        let resultadoArray = listadoPorHacer.filter(tarea => {
            return tarea.completado === true;
        });
        console.log('DONE');
        return resultadoArray;
    } else if (mostrar === 'TODO') {
        let resultadoArray = listadoPorHacer.filter(tarea => tarea.completado === false);
        console.log('TODO');
        return resultadoArray;
    } else {
        console.log('ALL');
        let resultadoArray = listadoPorHacer;
        return resultadoArray;
    }
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB(listadoPorHacer);
    return porHacer;
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}