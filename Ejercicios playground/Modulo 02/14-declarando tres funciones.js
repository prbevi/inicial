/* ¿Se acuerdan cuando declarábamos variables para poder utilizarlas luego?
Bueno, aquí podemos hacer algo similar, pero en lugar de declarar variables (estructuras que contienen información) podemos declarar funciones
(estructuras que procesan información).

Escribir las siguientes tres funciones:

anterior: recibe un número como parámetro y devuelve ese número menos uno.
triple: recibe un número como parámetro y devuelve el triple de ese número.
anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores,
tendrá que devolver el número recibido multiplicado por 3 (tres) y al resultado restarle 1 (uno). */

function anterior(n1){
    return n1-1;
};
function triple(n2){
    return n2*3;
};
function anteriorDelTriple(n3){
    return n3*3-1;
};
