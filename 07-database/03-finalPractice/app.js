// Adrián Navarro Gabino

// npm install body-parser
// npm install express
// npm install mysql

const express = require('express');
const bodyParser = require('body-parser');
const libros = require('./routers/libro');
let app = express();

app.use(bodyParser.json());
app.use('/libros', libros);
app.listen(8090);