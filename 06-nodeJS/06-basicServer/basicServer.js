// Adrián Navarro Gabino

const http = require('http');

let atenderPeticion = (request, response) => {
   response.writeHead(200,   {"Content-Type":   "text/plain"});
   response.write("Welcome.\n");
   response.write("You have this browser: " + request.headers['user-agent']);
   response.end();
}

http.createServer(atenderPeticion).listen(8090);