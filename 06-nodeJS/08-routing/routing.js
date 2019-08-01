// Adrián Navarro Gabino

const http = require('http');
const fs = require('fs');
const os = require('os');

var atenderPeticion = (request, response) => {
    if(request.url == '/') {
        response.writeHead(200, {"Content-Type": "text/html"});
        let contenido = fs.readFileSync('./index.html', 'utf8');
        response.write(contenido);
    }
    else if(request.url == '/usuario') {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Tu usuario es: " + os.userInfo().username);
    }
    else if(request.url == '/carpeta') {
        response.writeHead(200, {"Content-Type": "text/plain"});
        fs.readdirSync('.').forEach(file => {
            response.write(file);
            response.write(' ');
          });
    }
    else if(request.url == '/stop.JPG') {
        response.writeHead(200, {"Content-Type": "image/jpg"});
        let contenido = fs.readFileSync('./stop.JPG');
        response.write(contenido);
    }
    else {
        response.writeHead(200, {"Content-Type": "text/html"});
        let contenido = fs.readFileSync('./error.html', 'utf8');
        response.write(contenido);
    }
    
    response.end();
}

http.createServer(atenderPeticion).listen(8090);