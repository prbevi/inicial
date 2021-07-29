const fs = require('fs');
const process = require('process');
let tareas = fs.readFileSync('./tareas.json','utf-8');
let arrayTareas = JSON.parse(tareas);

/*
function recorrerArray(){
     for (let i=0;i<arrayTareas.length;i++){
        console.log(arrayTareas[i].titulo+' - '+arrayTareas[i].estado);
    } 
    
};
*/

function recorreArray(){arrayTareas.forEach((tarea, index) => {
    console.log((index+1) + ' ' + tarea.titulo + ' - ' + tarea.estado);
});}

let consola = process.argv[2];
switch (consola){
    case 'listar':
        recorreArray();
    break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción');
    break;
    default:
        console.log('No entiendo qué quieres hacer');
    break;
};

