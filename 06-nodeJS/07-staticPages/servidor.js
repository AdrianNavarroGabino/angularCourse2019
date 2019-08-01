// Adrián Navarro Gabino

const http = require('http');
const fs = require('fs');

var atenderPeticion = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    let contenido = fs.readFileSync('./index.html', 'utf8');
    let navegador = request.headers['user-agent'];
    contenido = contenido.replace('{navegador}', navegador);
    response.write(contenido);
    response.end();
}

http.createServer(atenderPeticion).listen(8090);