// Adrián Navarro Gabino

const utilities = require('./utilities_os.js');

if(utilities.isUser('pepe')) {
    console.log("El usuario es 'pepe'");
}
else {
    console.log("El usuario no es 'pepe'");
    console.log("El usuario correcto es " + utilities.loginUser());
}