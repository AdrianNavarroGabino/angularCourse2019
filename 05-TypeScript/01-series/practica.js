// Adrián Navarro Gabino
var Series = /** @class */ (function () {
    function Series(nombre, capitulos) {
        this.serie = nombre;
        this.capitulos = capitulos;
    }
    Series.prototype.getSerie = function () { return this.serie; };
    Series.prototype.getCapitulos = function () { return this.capitulos; };
    Series.prototype.setSerie = function (nombre) { this.serie = nombre; };
    Series.prototype.setCapitulos = function (capitulos) { this.capitulos = capitulos; };
    return Series;
}());
// Crear un array de series
var series = [];
function guardar() {
    //Accede al nombre y capítulos insertados por el usuario
    //Valida que el nombre no este vacio
    //Valida que los capítulos sean número positivo
    //Instancia la clase Series con ambos datos
    //Añade la serie al array
    //Pones ambos campos de la pantalla a vacío
    var nombre = document.getElementById("serie").value;
    var capitulos = +document.getElementById("capitulos").value;
    if (nombre == "")
        return;
    if (capitulos <= 0)
        return;
    var serie = new Series(nombre, capitulos);
    series.push(serie);
    document.getElementById("serie").value = "";
    document.getElementById("capitulos").value = "";
}
function listar() {
    //Accedes al div de listado
    //Calculas cuantos hijos hay, y si es distinto de 0 eliminas todo con el DOM
    //Accedes al valor del desplegable
    //Si el modo es LISTA creas con DOM la lista
    //Si es tabla creas con el DOM la tabla
    //Si es vacío das mensaje de error
    var listado = document.getElementById("listado");
    var child = listado.lastElementChild;
    while (child) {
        listado.removeChild(child);
        child = listado.lastElementChild;
    }
    var valorDesplegable = document.getElementById("modo").value;
    if (valorDesplegable == "lista") {
        var ul = document.createElement("ul");
        for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
            var i = series_1[_i];
            var li = document.createElement("li");
            var t = document.createTextNode(i.getSerie() + " - " + i.getCapitulos());
            li.appendChild(t);
            ul.appendChild(li);
        }
        listado.appendChild(ul);
    }
    if (valorDesplegable == "tabla") {
        var tabla = document.createElement("table");
        tabla.style.border = "1px black solid";
        tabla.style.borderCollapse = "collapse";
        for (var _a = 0, series_2 = series; _a < series_2.length; _a++) {
            var i = series_2[_a];
            var fila = document.createElement("tr");
            var c1 = document.createElement("td");
            var t1 = document.createTextNode(i.getSerie());
            var c2 = document.createElement("td");
            var t2 = document.createTextNode(i.getCapitulos().toString());
            c1.appendChild(t1);
            c2.appendChild(t2);
            fila.appendChild(c1);
            fila.appendChild(c2);
            tabla.appendChild(fila);
            fila.style.border = "1px black solid";
            c1.style.border = "1px black solid";
            c2.style.border = "1px black solid";
            fila.style.borderCollapse = "collapse";
            c1.style.borderCollapse = "collapse";
            c2.style.borderCollapse = "collapse";
        }
        listado.appendChild(tabla);
    }
}
window.onload = function () {
    //Accedes al botón y generas un manejador que llame a GUARDAR si clickeas sobre él
    //Accedes al desplegable y si cambia su valor generas el manejador de listar  
    var boton = document.getElementById("boton");
    var desplegable = document.getElementById("modo");
    boton.addEventListener("click", guardar);
    desplegable.addEventListener("change", listar);
};
