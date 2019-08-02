// Adrián Navarro Gabino

// npm install express
// npm install body-parser

const express = require('express');
const bodyParser = require('body-parser');

const libros = require('./routes/book');

let app = express();
app.use(bodyParser.json());
app.use('/book', libros);

app.listen(8090);