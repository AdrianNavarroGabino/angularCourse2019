// Adrián Navarro Gabino

// npm install body-parser
// npm install express
// npm install mysql

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

conexion.query("SELECT * FROM libros", (error, resultado,
                                            campos) => {
    if (error)
        console.log("Error al procesar la consulta");
    else {
        resultado.forEach((libro) => console.log(libro.TITULO,
            ": ", libro.PRECIO, "€"));
    }
});

conexion.query("INSERT INTO libros (COD, ISBN, PRECIO, TITULO)" +
        "VALUES ('10', '978-84-17805-07-4', 18, 'Flamenca')",
        (error, resultado, campos) => {
    if (error)
        console.log("Error al procesar la inserción: " + error);
    else
        console.log("Inserción realizada. Nuevo id = ", resultado.COD);
});

conexion.query("DELETE FROM libros WHERE TITULO = 'Libro imaginario'",
        (error, resultado, campos) => {
    if (error)
        console.log("Error al realizar el borrado");
    else
        console.log("Borrado realizado.",
            resultado.affectedRows, "filas afectadas");});