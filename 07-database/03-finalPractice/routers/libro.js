// Adrián Navarro Gabino

const express = require('express');
let Libro = require('../dataModel/libro.js');
let router = express.Router();

router.get('/', (req, res) => {
    Libro.listarLibros().then(resultado => {
        res.send(resultado);
    }).catch(error => {
        res.send(error);
    });
});

router.post('/', (req, res) => {
    Libro.nuevoLibro(req.body.COD,
            req.body.ISBN, req.body.PRECIO,
            req.body.TITULO).then(resultado => {
        res.send({error: false, resultado: resultado});
    }).catch(error => {
        res.send({error: true, mensajeError:"Error añadiendo libro: "+error});
    });
});

router.delete('/', (req, res) => {
    Libro.eliminarLibro(req.body.COD).then(resultado => {
        res.send({error: false, resultado: resultado});
    }).catch(error => {
        res.send({error: true, mensajeError: "Error borrando libro: " + error});
    });
});

router.put('/', (req, res) => {
    Libro.modificarLibro(req.body.COD, req.body.ISBN,
            req.body.PRECIO, req.body.TITULO).then(resultado => {
        res.send({error: false, resultado: resultado});
    }).catch(error => {
        res.send({error: true, mensajeError: "Error modificando libro: " + error});
    });
});

module.exports = router;