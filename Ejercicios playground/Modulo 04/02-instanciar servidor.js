/* Veamos cómo levantar un servidor con Express.

Nuestro trabajo será instanciar un servidor en el puerto 8000. A su vez, queremos que se muestre por consola la frase "Levantando un servidor con Express"
una vez que el servidor esté corriendo, para verificar que el mismo se levantó correctamente.*/

const express = require('express');
const app = express();

app.listen(8000,() => console.log('Levantando un servidor con Express'));