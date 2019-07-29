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