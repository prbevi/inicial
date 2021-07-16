/* Vamos a ejecutar una función que recibimos por parámetro a cada uno de los elementos de un array. 

Para esto debemos completar la función procesar. Esta recibe dos parámetros:

1. El primer parámetro es un array.

2. El segundo parámetro que recibe es una función (al que solemos llamar callback).

La función deberá retornar un array donde cada elemento es el resultado de aplicar la función pasada a un elemento del array pasado.

Dejamos unas funciones para comprender y probar con el ejemplo:*/

function agregarHttp(url) {
    return 'http://' + url;
}
function procesar(lista, agregarHttp) {
    listaSalida = [];
    for(let i = 0; i < lista.length; i++){
        listaSalida.push(agregarHttp(lista[i]))
    }
    return listaSalida;
};