// Adrián Navarro Gabino

const fs = require('fs');

const archivo = 'libros.json';

let cargarLibros = () => {
    try {
        return JSON.parse(fs.readFileSync(archivo, 'utf8'));
    } catch (e) {
        return [];
    }
};

let guardarLibros = (libros) => {
    fs.writeFileSync(archivo, JSON.stringify(libros));
};

let buscarLibroPorId = (id) => {
    let libros = cargarLibros();
    let resultado = libros.filter((libro) => libro.id == id);
    if (resultado.length > 0)
        return resultado[0];
};

let nuevoLibro = (id, titulo, autor, precio) => {
    if (!buscarLibroPorId(id)) {
        let libros = cargarLibros();
        let nuevo = {
            id: id,titulo: titulo,
            autor: autor,
            precio: precio
        };
        libros.push(nuevo);
        guardarLibros(libros);
        return true;
    }
};

let borrarLibro = (id) => {
    let libros = cargarLibros();
    let librosFiltrados = libros.filter((libro) => libro.id != id);
    if (librosFiltrados.length !== libros.length)
        guardarLibros(librosFiltrados);
    return librosFiltrados.length !== libros.length;
}

module.exports = {
    listarLibros: cargarLibros,
    nuevoLibro: nuevoLibro,
    borrarLibro: borrarLibro
};