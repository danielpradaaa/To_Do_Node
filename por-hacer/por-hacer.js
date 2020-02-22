const fs = require('fs');

let listadoPorhacer = [];

const guardarEnTareasDB = () => {
    let data = JSON.stringify(listadoPorhacer);

    fs.writeFile('./tareasDB/data.json', data, err => {
        if (err) throw new error('No se pudo... Pailas', err);
        else console.log('Se grabó el en archivo data.json');
    });
}

const cargarDeTareasDB = () => {
    try {
        listadoPorhacer = require('../tareasDB/data.json');
    } catch (error) {
        listadoPorhacer = [];
    }
}


const crear = descripcion => {
    cargarDeTareasDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorhacer.push(porHacer);
    guardarEnTareasDB();
    return porHacer;
}

const getListado = () => {
    cargarDeTareasDB();
    return listadoPorhacer;
}

const actualizar = (descripcion, completado) => {
    cargarDeTareasDB();
    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorhacer[index].completado = completado;
        guardarEnTareasDB();
        return 'Hecho';
    } else {
        return 'No hecho'
    }
}

const borrar = (descripcionIngresada) => {
    cargarDeTareasDB();
    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcionIngresada);
    if (index >= 0) {
        const filteredItems = listadoPorhacer.filter(item => item !== listadoPorhacer[index]);
        listadoPorhacer = filteredItems;
        guardarEnTareasDB();
        return console.log('Borrada la tarea con al descripción ' + descripcionIngresada);
    }else{
        return console.log('No se encontró una tarea con la descripción ' + descripcionIngresada);
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
}