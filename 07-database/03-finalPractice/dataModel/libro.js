// Adrián Navarro Gabino

const conexion = require('./bdconfig');

module.exports = class Libro {
    constructor(libroJSON) {
        this.COD = libroJSON.COD;
        this.ISBN = libroJSON.ISBN;
        this.PRECIO = libroJSON.PRECIO;
        this.TITULO = libroJSON.TITULO;
    }
    
    static listarLibros() {
        return new Promise( (resolve, reject) => {
            conexion.query("SELECT * FROM libros",
                    (error, resultado, campos) => {
                if (error)
                    reject(error);
                else
                    resolve(resultado.map(lJSON => new Libro(lJSON)));
                });
        });
    }
    
    static crearLibro(COD, ISBN, PRECIO, TITULO) {
        return new Promise( (resolve, reject) => {
            let datos = {
                COD: COD,
                ISBN: ISBN,
                PRECIO: PRECIO,
                TITULO: TITULO
            };
            
            conexion.query("INSERT INTO libros SET ?",
                    datos, (error, resultado, campos) => {
                if (error)
                    reject(error);
                else
                    resolve(resultado);
            });
        });
    }

    static eliminarLibro(id) {
        return new Promise( (resolve, reject) => {
            conexion.query("DELETE FROM libros WHERE COD = ?", id,
                    (error, resultado, campos) => {
                if(error)
                    reject(error);
                else
                    resolve(resultado);
            });
        });
    }

    static modificarLibro(COD, ISBN = null, PRECIO = null, TITULO = null) {
        return new Promise( (resolve, reject) => {
            let isbnUpdate;
            let precioUpdate;
            let tituloUpdate;

            let query = "UPDATE libros SET";

            if(ISBN != null)
                query += " ISBN = " + ISBN;
            if(PRECIO != null)
                query += " PRECIO = " + PRECIO;
            if(TITULO != null)
                query += " TITULO = " + TITULO;
            
            query += " WHERE COD = " + COD;
            
            conexion.query(query, (error, resultado, campos) => {
                if (error)
                    reject(error);
                else
                    resolve(resultado);
            });
        });
    }

    static buscarLibroPorId(id) {
        return new Promise( (resolve, reject) => {
            conexion.query("SELECT * FROM libros WHERE COD = ?", id,
                    (error, resultado, campos) => {
                if (error)
                    reject(error);
                else
                    resolve(resultado.map(lJSON => new Libro(lJSON)));
                });
        });
    }
}