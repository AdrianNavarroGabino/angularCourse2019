let button1 = document.createElement("button");
let text1 = document.createTextNode("Seguir leyendo");

let button2 = document.createElement("button");
let text2 = document.createTextNode("Ocultar");

button1.appendChild(text1);

document.getElementById("aside").appendChild(button1);

button1.addEventListener("click", function() {
    button1.parentNode.removeChild(button1);
    document.getElementById("primero").style.display = "block";
    button2.appendChild(text2);
    document.getElementById("aside").insertBefore(button2, document.querySelectorAll("#aside p")[1]);
})

button2.addEventListener("click", function() {
    button2.parentNode.removeChild(button2);
    document.getElementById("primero").style.display = "none";
    button1.appendChild(text1);
    document.getElementById("aside").appendChild(button1);
})

/*----------------------------------------------------------------------------*/

function setBorder() {
    let size = +prompt("Introduce el tamaño del borde:");
    if(!isNaN(size)) {
        document.querySelector("#principal table").style.borderWidth = size + "px";
        for(let i = 0; i <= document.querySelectorAll("#principal td").length; i++)
            document.querySelectorAll("#principal td")[i].style.borderWidth = size + "px";
        for(let i = 0; i <= document.querySelectorAll("#principal th").length; i++)
            document.querySelectorAll("#principal th")[i].style.borderWidth = size + "px";
        for(let i = 0; i <= document.querySelectorAll("#principal tr").length; i++)
            document.querySelectorAll("#principal tr")[i].style.borderWidth = size + "px";
    }
    else {
        alert("Tamaño incorrecto");
    }
}

function setCellSpacing() {
    let size = +prompt("Introduce el tamaño del cell-spacing:");
    if(!isNaN(size)) {
        document.querySelector("#principal table").cellSpacing = size;
    }
    else {
        alert("Tamaño incorrecto");
    }
}

function setCellPadding() {
    let size = +prompt("Introduce el tamaño del cell-padding:");
    if(!isNaN(size)) {
        document.querySelector("#principal table").cellPadding = size;
    }
    else {
        alert("Tamaño incorrecto");
    }
}

function setHeaderColor() {
    let headerColor = prompt("Introduce el color del encabezado (red, blue o green):");
    if(headerColor != "red" && headerColor != "blue" && headerColor != "green" && headerColor != "black") {
        alert("Color incorrecto");
    }
    else {
        for(let i = 0; i <= document.querySelectorAll("#principal th").length; i++)
            document.querySelectorAll("#principal th")[i].style.color = headerColor;
    }
}

function setRowColor() {
    let rowColor = prompt("Introduce el color del resto de filas (red, blue o green):");
    if(rowColor != "red" && rowColor != "blue" && rowColor != "green" && rowColor != "black") {
        alert("Color incorrecto");
    }
    else {
        for(let i = 0; i <= document.querySelectorAll("#principal td").length; i++)
            document.querySelectorAll("#principal td")[i].style.color = rowColor;
    }
}

function setHeaderFontSize() {
    let headerFontSize = +prompt("Introduce el tamaño del encabezado:");
    if(isNaN(headerFontSize)) {
        alert("Tamaño incorrecto");
    }
    else {
        for(let i = 0; i <= document.querySelectorAll("#principal th").length; i++)
            document.querySelectorAll("#principal th")[i].style.fontSize = headerFontSize + "px";
    }
}

function setRowFontSize() {
    let rowFontSize = +prompt("Introduce el tamaño del resto de filas:");
    if(isNaN(rowFontSize)) {
        alert("Tamaño incorrecto");
    }
    else {
        for(let i = 0; i <= document.querySelectorAll("#principal td").length; i++)
            document.querySelectorAll("#principal td")[i].style.fontSize = rowFontSize + "px";
    }
}

let b1 = document.createElement("button");
let b2 = document.createElement("button");
let b3 = document.createElement("button");
let b4 = document.createElement("button");
let b5 = document.createElement("button");
let b6 = document.createElement("button");
let b7 = document.createElement("button");

let t1 = document.createTextNode("Borde");
let t2 = document.createTextNode("Cell-spacing");
let t3 = document.createTextNode("Cell-padding");
let t4 = document.createTextNode("Color encabezado");
let t5 = document.createTextNode("Color filas");
let t6 = document.createTextNode("Tamaño encabezado");
let t7 = document.createTextNode("Tamaño filas");

b1.appendChild(t1);
b2.appendChild(t2);
b3.appendChild(t3);
b4.appendChild(t4);
b5.appendChild(t5);
b6.appendChild(t6);
b7.appendChild(t7);

b1.addEventListener("click", setBorder);
b2.addEventListener("click", setCellSpacing);
b3.addEventListener("click", setCellPadding);
b4.addEventListener("click", setHeaderColor);
b5.addEventListener("click", setRowColor);
b6.addEventListener("click", setHeaderFontSize);
b7.addEventListener("click", setRowFontSize);

document.getElementById("principal").appendChild(b1);
document.getElementById("principal").appendChild(b2);
document.getElementById("principal").appendChild(b3);
document.getElementById("principal").appendChild(b4);
document.getElementById("principal").appendChild(b5);
document.getElementById("principal").appendChild(b6);
document.getElementById("principal").appendChild(b7);