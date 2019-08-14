			// Adrián Navarro Gabino
			
			function addParrafo()
			{
					//8
					// Accedemos al DIV respuesta
					// Contamos el número de párrafos
					// Creamos 1 nuevo párrafo con el número que le toca
					// Creamos el evento que al pulsar sobre él llame a la función eliminar
					// Lo insertamos justo antes del botón

					let divRespuesta = document.getElementById("respuesta");
					let numeroDeParrafos = divRespuesta.childNodes.length - 3;
					if(numeroDeParrafos < 10) {
						let nuevoParrafo = document.createElement("p");
						let nuevoTexto = document.createTextNode("Este es el párrafo número " + (numeroDeParrafos + 1));
						nuevoParrafo.appendChild(nuevoTexto);
						nuevoParrafo.addEventListener("click", eliminar);
						let boton = document.getElementById("anyadir");
						boton.parentNode.insertBefore(nuevoParrafo, boton);
					}
			}
			
			function eliminar()
			{
				// 14
				// Con THIS podemos tener el objeto donde nos encontramos
				// Accedemos al DIV respuesta
				// Eliminamos el nodo donde nos encontramos
				// Vemos la cantidad de elementos que tenemos
				// Si quedan 2 eliminamos el H1, el botón, volvemos a habilitar los campos titulo y numero y los dejamos en blanco

				this.parentNode.removeChild(this);
				let divRespuesta = document.getElementById("respuesta");
				if(divRespuesta.childNodes.length == 3) {
					divRespuesta.removeChild(divRespuesta.childNodes[0]);
					divRespuesta.removeChild(divRespuesta.childNodes[0]);
					divRespuesta.removeChild(divRespuesta.childNodes[0]);
					let titulo = document.getElementById("titulo");
					let numero = document.getElementById("numero");
					titulo.disabled = false;
					numero.disabled = false;
					titulo.value = "";
					numero.value = "";
				}
			}
			
			function lanzar()
			{
				//25
				// Obultamos el botón
				// Accedemos al desplegable y lo eliminamos
				// Accedemos al DIV respuesta
				// Accedemos a los que usuario ha puesto en numero y titulo
				// Creamos las variables de p y texto
				// Creamos el nodo H1 y lo enchufamos al DIV
				// Creamos tanto párrafos como números nos pide el usuario y los vamos enchufando al DIV
				// Creando un evento a cada párrafo para eliminarlo
				// Finalmente creamos el botón, con los atributos VALUES, TYPE e ID. Y un evento a la función addParrafo
				
				miFormulario.btn_lanzar.style.display = "none";
				miFormulario.eleccion.parentNode.removeChild(miFormulario.eleccion);

				let divRespuesta = document.getElementById("respuesta");
				let numero = document.getElementById("numero").value;
				let titulo = document.getElementById("titulo").value;
				let h1 = document.createElement("h1");
				let textH1 = document.createTextNode(titulo);
				h1.appendChild(textH1);
				divRespuesta.appendChild(h1);
				for(let i = 0; i < numero; i++) {
					let p = document.createElement("p");
					let text = document.createTextNode("Este es el párrafo número " + (i + 1));
					p.appendChild(text);
					divRespuesta.appendChild(p);
					p.addEventListener("click", eliminar);
				}
				
				let boton = document.createElement("input");
				boton.value = "Añadir";
				boton.type = "button";
				boton.id = "anyadir";
				divRespuesta.appendChild(boton);
				boton.addEventListener("click", addParrafo);
			}

			function lanzarImagenes()
			{
				// 27
				// Obultamos el botón
				// Accedemos al desplegable y lo eliminamos
				// Accedemos al DIV respuesta
				// Accedemos a los que usuario ha puesto en numero y titulo
				// Creamos las variables de ul, texto, li e img			
				// Creamos el nodo H1 y lo enchufamos al DIV
				// Creamos el nodo UL sin tipo ni padding left, y cambiamos su display para que se hagan horizontales
				// Creamos tantos LI como numero indica el usuario
				// Dentro de cada LI creamos un IMG con su SRC a "portadaX"
				// Enchufamos todo al UL
				// Finalmente el UL al DIV

				miFormulario.btn_lanzar.style.display = "none";
				miFormulario.eleccion.parentNode.removeChild(miFormulario.eleccion);

				let divRespuesta = document.getElementById("respuesta");
				let numero = document.getElementById("numero").value;
				let titulo = document.getElementById("titulo").value;
				let h1 = document.createElement("h1");
				let textH1 = document.createTextNode(titulo);
				h1.appendChild(textH1);
				divRespuesta.appendChild(h1);
				let ul = document.createElement("ul");
				for(let i = 0; i < numero; i++) {
					let li = document.createElement("li");
					let img = document.createElement("img");
					img.src = "portada" + (i + 1) + ".jpg";
					li.appendChild(img);
					ul.appendChild(li);
					li.style.display = "inline";
				}
				ul.style.paddingLeft = "0px";
				ul.style.listStyleType = "none";
				divRespuesta.appendChild(ul);
			}			
			
			function elegir()
			{
				miFormulario.btn_lanzar.style.display="block";
				if (miFormulario.eleccion.value=="")
				{
					alert("Debes elegir una opción");
				}
				else
				{
					if(miFormulario.eleccion.value=="parrafo")
						miFormulario.btn_lanzar.onclick=lanzar;
					else
						miFormulario.btn_lanzar.onclick=lanzarImagenes;
				}				
				
			}

			function validar()
			{
				//41
				// Accedemos a los valores numero y titulo
				// Validamos que no sean vacíos
				// Validamos que numero este entre 1 y 10
				// Validamos que el título estén en mayúscula con 1 sola palabra y de 5 a 20.
				// Si falla el fondo en ROJO
				// Si no falla el fondo en BLANCO
				// Deshabilitamos los dos campos
				// Creamos el desplegable con las tres opciones y lo insertamos antes del botón
				// Le ponemos un evento que al modificar la opcion llame a ELEGIR
				let validate = true;
				let numero = document.getElementById("numero");
				let titulo = document.getElementById("titulo");
				if(numero.value == "" || titulo.value == "")
					validate = false;
				if(numero.value != "" && (+numero.value < 1 || +numero.value > 10 || isNaN(numero.value)))
				{
					numero.style.backgroundColor = "red";
					validate = false;
				}
				else
					numero.style.backgroundColor = "white";

				let reg = /^[A-Z]{5,20}$/g;
				if(titulo.value != "" && !reg.test(titulo.value))
				{
					titulo.style.backgroundColor = "red";
					validate = false;
				}
				else
					titulo.style.backgroundColor = "white";

				if(validate) {
					titulo.disabled = true;
					numero.disabled = true;

					let select = document.createElement("select");
					let option1 = document.createElement("option");
					let option2 = document.createElement("option");
					let option3 = document.createElement("option");
					let text1 = document.createTextNode("");
					let text2 = document.createTextNode("PARRAFO");
					let text3 = document.createTextNode("PORTADAS");
					option1.appendChild(text1);
					option2.appendChild(text2);
					option3.appendChild(text3);
					option1.value = "";
					option2.value = "parrafo";
					option3.value = "portadas";
					select.appendChild(option1);
					select.appendChild(option2);
					select.appendChild(option3);
					select.name = "eleccion";
					let boton = document.getElementsByClassName("btn")[0];
					boton.parentNode.insertBefore(select, boton);

					select.addEventListener("change", elegir);
				}
			}
			
			
            window.onload = function() {
				//2 
				// Creamos eventos para que en el momento que nos salgamos de cualquier de los dos campos llamamos a VALIDAR
				document.getElementById("titulo").addEventListener("blur",validar);
				document.getElementById("numero").addEventListener("blur",validar);
			};			