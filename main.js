const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.';

var go = document.querySelector('#go');
var segundos = 0;


go.addEventListener('click', ()=>{
	console.log("estefania");
	pokemon();
});
//cargarSegundos();
setInterval(() => {
    pokemon();
}, 30000);
//go.addEventListener('click', pokemon);

async function pokemon() {
	try {
		const respuesta = await fetch(url);
		const resultado = await respuesta.json();
		start(resultado.results);
	} catch(error) {
		console.log(error);
	}
}

function start(api) {
	let numeroRandom = Math.floor(Math.random()*1281);
	let personajeAleatorio = api[numeroRandom];
	obtenerImagen(personajeAleatorio);
}

async function obtenerImagen(personaje) {
	try {
		const respuesta = await fetch(personaje.url);
		const resultado = await respuesta.json();
		pintarHTML(personaje.name, resultado.sprites.other.home.front_default);
	} catch(error) {
		console.log(error);
	}
}

function pintarHTML(personaje, imagen) {
	let img = document.querySelector('#imagenPokemon');
	let parrafo = document.querySelector('#nombrePokemon');

	console.log(imagen);

	//console.log(imagen.includes('null'));

	if(imagen == null) {
		img.src = 'https://placehold.co/262x262';
	} else {
		img.src = imagen;
	}
	
	parrafo.textContent = personaje;
}


//temporizador
function cargarSegundos() {
	let txtSegundos = 0;

	if(segundos < 0) {
		segundos = 29;
	}

	//mostrar segunsos en pantalla
	if(segundos < 10) {
		txtSegundos = `0${segundos}`;
	} else {
		txtSegundos = segundos;
	}

	document.querySelector('#segundos').textContent = txtSegundos;
	segundos --;
}

//cada segundo
setInterval(cargarSegundos, 1000);