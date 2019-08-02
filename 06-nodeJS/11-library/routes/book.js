// Adrián Navarro Gabino

const express = require('express');
let router = express.Router();

const fs = require('fs');
const archivo = 'libros.json';

let cargarLibros = () => {
    return new Promise((resolve, reject) => {
        try {
             resolve(JSON.parse(fs.readFileSync(archivo, 'utf8')));
        } catch (e) {
            //console.log(e);
            reject([]);
        }
    });
}

let guardarLibros = () => {
    return new Promise((resolve, reject) => {
        try {
             resolve(fs.writeFileSync(archivo, JSON.stringify(libros)));
        } catch (e) {
            //console.log(e);
            reject([]);
        }
    });
}

let buscarLibroPorId = (id) => {
    return new Promise((resolve, reject) => {
        cargarLibros.then(libros => {
            let resultado = libros.filter((libro) => libro.id == id);
            if(resultado.length > 0)
                resolve(resultado[0])
            else
                reject("El libro no existe")
        })
    });
}

let nuevoLibro = (id, titulo, autor, precio) => {
    return new Promise((resolve, reject) => {
        if (!buscarLibroPorId(id))
        {
            let libros = cargarLibros();
            let nuevo = {
                id: id,
                titulo: titulo,
                autor: autor,
                precio: precio
            };
            libros.push(nuevo);
            guardarLibros(libros);
            resolve(nuevo);
        }
        else
        {
            reject("El libro ya existe");
        }
    });
};

let borrarLibro = (id) => {
    return new Promise((resolve, reject) => {
        let libros = cargarLibros();
        let librosFiltrados = libros.filter((libro) => libro.id != id);
        if (librosFiltrados.length !== libros.length) {
            guardarLibros(librosFiltrados);
            resolve(true);
        }
        else {
            reject(false);
        }
    });
};

router.get('/', (req, res) => {
    cargarLibros().then(resultado => {
        res.send(resultado);
    }).catch(error => {res.send(error); });
});

router.get('/:id', (req, res) => {
    buscarLibroPorId(req.params.id).then(resultado => {
        if(resultado) {
            res.send({error: false, resultado: resultado});
        }
        else {
            res.send({error: true, mensajeError: 'Libro no encontrado'});
        }
    });
});

router.post('/', (req,res) => {
    nuevoLibro(id, titulo, autor, precio).then(resultado => {
        res.send(resultado);
    }).catch(error => {res.send(error); });
})

router.delete('/', (req, res) => {
    borrarLibro(id).then(resultado => {
        res.send(resultado);
    }).catch(error => {res.send(resultado); });
})

module.exports = router;