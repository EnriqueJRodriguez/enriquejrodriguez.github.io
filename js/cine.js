$(document).ready(function(){	
		
	elegirPelicula();

});

function elegirPelicula() {
	let filmes = bibliotecac.length;
	let filme = Math.floor(Math.random() * filmes);
	let pelicula = bibliotecac[filme];
	$("#cnpost").attr("src", "./images/cine/" + pelicula.imagen);
	$("#cntitulo").text(pelicula.titulo);
	$("#cndatos").text(pelicula.director + " - " + pelicula.año);
	$("#cndesc").text(pelicula.descripcion);
}

var bibliotecac = [
	{
		"titulo": "Leyendas de pasión",
		"director": "Edward Zwick",
		"año": "1994",
		"imagen": "Leyendas_de_pasion.jpg",
		"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
]

