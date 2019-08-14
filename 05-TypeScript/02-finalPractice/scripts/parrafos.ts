			// Adrián Navarro Gabino
			
			function addParrafo(): void
			{
					//8
					// Accedemos al DIV respuesta
					// Contamos el número de párrafos
					// Creamos 1 nuevo párrafo con el número que le toca
					// Creamos el evento que al pulsar sobre él llame a la función eliminar
					// Lo insertamos justo antes del botón

					let divRespuesta: HTMLElement = document.getElementById("respuesta");
					let numeroDeParrafos: number = divRespuesta.childNodes.length - 3;
					if(numeroDeParrafos < 10) {
						let nuevoParrafo: HTMLElement = document.createElement("p");
						let nuevoTexto: Text = document.createTextNode("Este es el párrafo número " + (numeroDeParrafos + 1));
						nuevoParrafo.appendChild(nuevoTexto);
						nuevoParrafo.addEventListener("click", eliminar);
						let boton: HTMLElement = document.getElementById("anyadir");
						boton.parentNode.insertBefore(nuevoParrafo, boton);
					}
			}
			
			function eliminar(): void
			{
				// 14
				// Con THIS podemos tener el objeto donde nos encontramos
				// Accedemos al DIV respuesta
				// Eliminamos el nodo donde nos encontramos
				// Vemos la cantidad de elementos que tenemos
				// Si quedan 2 eliminamos el H1, el botón, volvemos a habilitar los campos titulo y numero y los dejamos en blanco

				this.parentNode.removeChild(this);
				let divRespuesta: HTMLElement = document.getElementById("respuesta");
				if(divRespuesta.childNodes.length == 3) {
					divRespuesta.removeChild(divRespuesta.childNodes[0]);
					divRespuesta.removeChild(divRespuesta.childNodes[0]);
					divRespuesta.removeChild(divRespuesta.childNodes[0]);
					let titulo: HTMLElement = document.getElementById("titulo");
					let numero: HTMLElement = document.getElementById("numero");
					(<HTMLInputElement>titulo).disabled = false;
					(<HTMLInputElement>numero).disabled = false;
					(<HTMLInputElement>titulo).value = "";
					(<HTMLInputElement>numero).value = "";
				}
			}
			
			function lanzar(): void
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
				
				document.getElementsByName("btn_lanzar")[0].style.display = "none";
				document.getElementsByName("eleccion")[0].parentNode.removeChild(document.getElementsByName("eleccion")[0]);

				let divRespuesta: HTMLElement = document.getElementById("respuesta");
				let numero: number = +(<HTMLInputElement>document.getElementById("numero")).value;
				let titulo: string = (<HTMLInputElement>document.getElementById("titulo")).value;
				let h1: HTMLElement = document.createElement("h1");
				let textH1: Text = document.createTextNode(titulo);
				h1.appendChild(textH1);
				divRespuesta.appendChild(h1);
				for(let i = 0; i < numero; i++) {
					let p: HTMLElement = document.createElement("p");
					let text: Text = document.createTextNode("Este es el párrafo número " + (i + 1));
					p.appendChild(text);
					divRespuesta.appendChild(p);
					p.addEventListener("click", eliminar);
				}
				
				let boton: HTMLElement = document.createElement("input");
				(<HTMLInputElement>boton).value = "Añadir";
				(<HTMLInputElement>boton).type = "button";
				(<HTMLInputElement>boton).id = "anyadir";
				divRespuesta.appendChild(boton);
				boton.addEventListener("click", addParrafo);
			}

			function lanzarImagenes(): void
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

				document.getElementsByName("btn_lanzar")[0].style.display = "none";
				document.getElementsByName("eleccion")[0].parentNode.removeChild(document.getElementsByName("eleccion")[0]);

				let divRespuesta: HTMLElement = document.getElementById("respuesta");
				let numero: number = +(<HTMLInputElement>document.getElementById("numero")).value;
				let titulo: string = (<HTMLInputElement>document.getElementById("titulo")).value;
				let h1: HTMLElement = document.createElement("h1");
				let textH1: Text = document.createTextNode(titulo);
				h1.appendChild(textH1);
				divRespuesta.appendChild(h1);
				let ul: HTMLElement = document.createElement("ul");
				for(let i = 0; i < numero; i++) {
					let li: HTMLElement = document.createElement("li");
					let img: HTMLElement = document.createElement("img");
					(<HTMLImageElement>img).src = "portada" + (i + 1) + ".jpg";
					li.appendChild(img);
					ul.appendChild(li);
					li.style.display = "inline";
				}
				ul.style.paddingLeft = "0px";
				ul.style.listStyleType = "none";
				divRespuesta.appendChild(ul);
			}			
			
			function elegir(): void
			{
				document.getElementsByName("btn_lanzar")[0].style.display="block";
				if ((<HTMLOptionElement>document.getElementsByName("eleccion")[0]).value=="")
				{
					alert("Debes elegir una opción");
				}
				else
				{
					if((<HTMLOptionElement>document.getElementsByName("eleccion")[0]).value == "parrafo")
						document.getElementsByName("eleccion")[0].onclick=lanzar;
					else
						document.getElementsByName("eleccion")[0].onclick=lanzarImagenes;
				}				
				
			}

			function validar(): void
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
				let validate: boolean = true;
				let numero: HTMLElement = document.getElementById("numero");
				let titulo: HTMLElement = document.getElementById("titulo");
				let valorNumero:number = +(<HTMLInputElement>numero).value;
				let valorTitulo:string = (<HTMLInputElement>titulo).value;
				if(valorNumero == undefined || valorTitulo == "")
					validate = false;
				if(valorNumero != undefined && valorNumero < 1 || valorNumero > 10 || isNaN(valorNumero))
				{
					numero.style.backgroundColor = "red";
					validate = false;
				}
				else
					numero.style.backgroundColor = "white";

				let reg = /^[A-Z]{5,20}$/g;
				if(valorTitulo != "" && !reg.test(valorTitulo))
				{
					titulo.style.backgroundColor = "red";
					validate = false;
				}
				else
					titulo.style.backgroundColor = "white";

				if(validate) {
					(<HTMLInputElement>titulo).disabled = true;
					(<HTMLInputElement>numero).disabled = true;

					let select: HTMLElement = document.createElement("select");
					let option1: HTMLElement = document.createElement("option");
					let option2: HTMLElement = document.createElement("option");
					let option3: HTMLElement = document.createElement("option");
					let text1: Text = document.createTextNode("");
					let text2: Text = document.createTextNode("PARRAFO");
					let text3: Text = document.createTextNode("PORTADAS");
					option1.appendChild(text1);
					option2.appendChild(text2);
					option3.appendChild(text3);
					(<HTMLOptionElement>option1).value = "";
					(<HTMLOptionElement>option2).value = "parrafo";
					(<HTMLOptionElement>option3).value = "portadas";
					select.appendChild(option1);
					select.appendChild(option2);
					select.appendChild(option3);
					(<HTMLSelectElement>select).name = "eleccion";
					let boton: Element = document.getElementsByClassName("btn")[0];
					boton.parentNode.insertBefore(select, boton);

					select.addEventListener("change", elegir);
				}
			}
			
			
			window.onload = function(): void
			{
				//2 
				// Creamos eventos para que en el momento que nos salgamos de cualquier de los dos campos llamamos a VALIDAR
				document.getElementById("titulo").addEventListener("blur",validar);
				document.getElementById("numero").addEventListener("blur",validar);
			};			