// Adrián Navarro Gabino

const mysql = require('mysql');

let conexion = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'biblioteca'
});

conexion.connect((error) => {
    if (error)
        console.log("Error al conectar con la BD:", error);
    else
        console.log("Conexión satisfactoria");
});

module.exports = conexion;