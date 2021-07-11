const fs = require('fs');

let arrayDeTareas = [];

function TareaNueva (titulo, estado){
    this.titulo = titulo;
    this.estado = estado;
};
let tarea1 = new TareaNueva('Tarea 1', 'Pendiente');
let tarea2 = new TareaNueva('Tarea 2', 'Terminada');
let tarea3 = new TareaNueva('Tarea 3', 'En Progreso');
let tarea4 = new TareaNueva('Tarea 4', 'En Progreso');
let tarea5 = new TareaNueva('Tarea 5', 'Pendiente');
let tarea6 = new TareaNueva('Tarea 6', 'En Progreso');
let tarea7 = new TareaNueva('Tarea 7', 'Terminada');


arrayDeTareas.push(tarea1);
arrayDeTareas.push(tarea2);
arrayDeTareas.push(tarea3);
arrayDeTareas.push(tarea4);
arrayDeTareas.push(tarea5);
arrayDeTareas.push(tarea6);
arrayDeTareas.push(tarea7);

function escribirJSON(arrayDeTareas){
    let arrayDeTareasJSON = JSON.stringify(arrayDeTareas);
    fs.writeFileSync('./tareas.json',arrayDeTareasJSON);
};

escribirJSON(arrayDeTareas);