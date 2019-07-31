class Series
{
// Crear variables serie y capitulos privadas
// Crear constructor
// Crear setters y getters
	private serie: string;
	private capitulos: number;

	constructor(nombre:string, capitulos: number)
	{
		this.serie = nombre;
		this.capitulos = capitulos;
	}

	getSerie(): string { return this.serie; }
	getCapitulos(): number { return this.capitulos; }

	setSerie(nombre: string): void { this.serie = nombre; }
	setCapitulos(capitulos: number): void { this.capitulos = capitulos; }
}

// Crear un array de series
let series: Series[]=[];

function guardar(): void
{  
	//Accede al nombre y capítulos insertados por el usuario
	//Valida que el nombre no este vacio
	//Valida que los capítulos sean número positivo
	//Instancia la clase Series con ambos datos
	//Añade la serie al array
	//Pones ambos campos de la pantalla a vacío

	let nombre: string = (<HTMLInputElement>document.getElementById("serie")).value;
	let capitulos: number = +(<HTMLInputElement>document.getElementById("capitulos")).value;

	if(nombre == "")
		return;
	if(capitulos <= 0)
		return;
	let serie: Series = new Series(nombre, capitulos);
	series.push(serie);

	(<HTMLInputElement>document.getElementById("serie")).value = "";
	(<HTMLInputElement>document.getElementById("capitulos")).value = "";
}

function listar()
{
    //Accedes al div de listado
	//Calculas cuantos hijos hay, y si es distinto de 0 eliminas todo con el DOM
	//Accedes al valor del desplegable
	//Si el modo es LISTA creas con DOM la lista
	//Si es tabla creas con el DOM la tabla
	//Si es vacío das mensaje de error

	let listado: HTMLElement = document.getElementById("listado");
	let child: Element = listado.lastElementChild;  
	while (child) { 
		listado.removeChild(child); 
		child = listado.lastElementChild; 
	} 
	let valorDesplegable: string = (<HTMLSelectElement>document.getElementById("modo")).value;
	if(valorDesplegable == "lista")
	{
		let ul: HTMLElement = document.createElement("ul");
		for(let i of series)
		{
			let li: HTMLElement = document.createElement("li");
			let t: Text = document.createTextNode(i.getSerie() + " - " + i.getCapitulos());

			li.appendChild(t);
			ul.appendChild(li);
		}
		listado.appendChild(ul);
	}
	if(valorDesplegable == "tabla")
	{
		let tabla: HTMLElement = document.createElement("table");
		tabla.style.border = "1px black solid";
		tabla.style.borderCollapse = "collapse";
		for(let i of series)
		{
			let fila: HTMLElement = document.createElement("tr");
			let c1: HTMLElement = document.createElement("td");
			let t1: Text = document.createTextNode(i.getSerie());
			let c2: HTMLElement = document.createElement("td");
			let t2: Text = document.createTextNode(i.getCapitulos().toString());

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

window.onload  = function(){
	//Accedes al botón y generas un manejador que llame a GUARDAR si clickeas sobre él
	//Accedes al desplegable y si cambia su valor generas el manejador de listar  

	let boton: HTMLElement = document.getElementById("boton");
	let desplegable: HTMLElement = document.getElementById("modo");

	boton.addEventListener("click", guardar);
	desplegable.addEventListener("change", listar);
}
