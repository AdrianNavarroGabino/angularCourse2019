// Adrián Navarro Gabino

let nuevaPersona = persona => {
    return new Promise((resolve, reject) => {
        let resultado = datos.filter(p => p.telefono == persona.telefono);
        if(resultado.length == 0) {
            datos.push(persona);
            resolve(persona);
        }
        else {
            reject("Error: el teléfono ya existe");
        }
    });
};

let borrarPersona = persona => {
    return new Promise((resolve, reject) =>{
        let resultado = datos.filter(p => p.telefono != persona.telefono ||
            p.nombre != persona.nombre || p.edad != persona.edad);
        if(resultado.length != datos.length) {
            datos = resultado;
            resolve(resultado);
        }
        else {
            reject("Error: no se encontraron coincidencias");
        }
    });
};

let datos = [
    {nombre: "Diego", telefono: "966112233", edad: 40},
    {nombre: "Carmen", telefono: "911223344", edad: 35},
    {nombre: "Victor", telefono: "611998877", edad: 15},
    {nombre: "Carolina", telefono: "633663366", edad: 17}
];

nuevaPersona({nombre: "Nestor", telefono:"965661564", edad: 60}).then((result) => {
    console.log("Añadida persona:", result);
}).catch((err) => {
    console.log(err);
});

nuevaPersona({nombre: "Diego", telefono:"966112233", edad: 40}).then((result) => {
    console.log("Añadida persona:", result);
}).catch((err) => {
    console.log(err);
});

borrarPersona({nombre: "Victor", telefono:"611998877", edad: 15}).then((result) => {
    console.log("Persona borrada:", result);
}).catch((err) => {
    console.log(err);
});

borrarPersona({nombre: "Antonio", telefono:"965664364", edad: 70}).then((result) => {
    console.log("Persona borrada:", result);
}).catch((err) => {
    console.log(err);
});