$(document).ready(function(){	
		
	elegirMusica();

});

function elegirMusica() {
	let pistas = musica.length;
	let pista = Math.floor(Math.random() * pistas);
	let cancion = musica[pista];
	$("#musica-cnt").html('<iframe width="80%" height="auto" src="https://www.youtube.com/embed/' + cancion.url.replace("https://www.youtube.com/watch?v=", "") + '" frameborder="0"  allowfullscreen></iframe>');
	$("#mtitulo").text(cancion.autor + " - " + cancion.nombre);
	$("#mdesc").text(cancion.descripcion);
}

var musica = [
	{
		"nombre": "Africa",
		"autor": "Toto",
		"url": "https://www.youtube.com/watch?v=FTQbiNvZqaY",
		"descripcion": ""
	},
	{
		"nombre": "Push It To The Limit",
		"autor": "Paul Engemann",
		"url": "https://www.youtube.com/watch?v=DZz3y6r-5H8",
		"descripcion": ""
	},
	{
		"nombre": "Died In Your Arms",
		"autor": "Cutting Crew",
		"url": "https://www.youtube.com/watch?v=6dOwHzCHfgA",
		"descripcion": ""
	},
	 {
		"nombre": "Out of Touch",
		"autor": "Daryl Hall & John Oates",
		"url": "https://www.youtube.com/watch?v=SCa5hmp-UmQ",
		"descripcion": ""
	},
	{
		"nombre": "Roundabout",
		"autor": "Yes",
		"url": "https://www.youtube.com/watch?v=cPCLFtxpadE",
		"descripcion": ""
	},
	{
		"nombre": "",
		"autor": "",
		"url": "",
		"descripcion": ""
	},
]

