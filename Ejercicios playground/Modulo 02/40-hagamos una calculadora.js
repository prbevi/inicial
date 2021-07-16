/* Vamos a ver cómo podemos crear una función que nos sirva como calculadora. Empecemos con algo sencillo...

Creemos cuatro funciones que realicen las operaciones principales de una calculadora.
Nuestro trabajo será definir la función suma, resta, multiplicacion y division.
Cada una de ellas recibirá dos parámetros y deberá realizar la operación matemática según corresponda.
Por ejemplo, la función suma deberá retornar la suma de ambos parámetros; la función resta, la resta de ambos parámetros, y así sucesivamente.
Ahora sí, con esas funciones ya definidas, creemos la función calculadora.
Esta función recibirá dos parámetros numéricos y una función, que será nuestro callback.*/

let suma = (a,b) => a+b;
let resta = (a,b) => a-b;
let multiplicacion = (a,b) => a*b;
let division = (a,b) => a/b;
let calculadora = (a,b,operacion) => operacion(a,b);