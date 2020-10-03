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
		"nombre": "Take It On The Run",
		"autor": "REO Speedwagon",
		"url": "https://www.youtube.com/watch?v=t7Csc6l4QLs",
		"descripcion": ""
	},
	{
		"nombre": "You Give Love A Bad Name",
		"autor": "Bon Jovi",
		"url": "https://www.youtube.com/watch?v=KrZHPOeOxQQ",
		"descripcion": ""
	},
	{
		"nombre": "Don't Stop Believin'",
		"autor": "Journey",
		"url": "https://www.youtube.com/watch?v=1k8craCGpgs",
		"descripcion": ""
	},
	{
		"nombre": "She's On Fire",
		"autor": "Amy Holland & Giorgio Moroder",
		"url": "https://www.youtube.com/watch?v=kQlsoV0LWd8",
		"descripcion": ""
	},
	{
		"nombre": "Blue Moon",
		"autor": "Frank Sinatra",
		"url": "https://www.youtube.com/watch?v=Dw1ZC6sZjIY",
		"descripcion": ""
	},
	{
		"nombre": "Who Can It Be Now?",
		"autor": "Men At Work",
		"url": "https://www.youtube.com/watch?v=SECVGN4Bsgg",
		"descripcion": ""
	},
	{
		"nombre": "Losing My Religion",
		"autor": "R.E.M.",
		"url": "https://www.youtube.com/watch?v=OKvCV8MFIaw",
		"descripcion": ""
	},
	{
		"nombre": "Hotel California",
		"autor": "Eagles",
		"url": "https://www.youtube.com/watch?v=EqPtz5qN7HM",
		"descripcion": ""
	},
	{
		"nombre": "Send Me An Angel",
		"autor": "Scorpions",
		"url": "https://www.youtube.com/watch?v=1UUYjd2rjsE",
		"descripcion": ""
	},
	{
		"nombre": "It's my life",
		"autor": "Bon Jovi",
		"url": "https://www.youtube.com/watch?v=9SKFwtgUJHs",
		"descripcion": ""
	},
	{
		"nombre": "All Star",
		"autor": "Smash Mouth",
		"url": "https://www.youtube.com/watch?v=L_jWHffIx5E",
		"descripcion": ""
	},
	{
		"nombre": "You Got It",
		"autor": "Roy Orbison",
		"url": "https://www.youtube.com/watch?v=lvR1YgT7QYs",
		"descripcion": ""
	},
	{
		"nombre": "White Wedding",
		"autor": "Billy Idol",
		"url": "https://www.youtube.com/watch?v=AAZQaYKZMTI",
		"descripcion": "The rock doesn't stop until we lose our license, which could be soon."
	},
	{
		"nombre": "Two Tickets To Paradise",
		"autor": "Eddie Money",
		"url": "https://www.youtube.com/watch?v=RTqCusP0uzQ",
		"descripcion": ""
	},
	{
		"nombre": "Eminence Front",
		"autor": "The Who",
		"url": "https://www.youtube.com/watch?v=xODK_OwxpHM",
		"descripcion": ""
	},
	{
		"nombre": "Runnin' Down A Dream",
		"autor": "Tom Petty And The Heartbreakers",
		"url": "https://www.youtube.com/watch?v=Y1D3a5eDJIs",
		"descripcion": ""
	},
	{
		"nombre": "Strutter",
		"autor": "Kiss",
		"url": "https://www.youtube.com/watch?v=1DDus_S-Tr4",
		"descripcion": ""
	},
	{
		"nombre": "Barracuda",
		"autor": "Heart",
		"url": "https://www.youtube.com/watch?v=PeMvMNpvB5M",
		"descripcion": ""
	},
	{
		"nombre": "One Step Forward",
		"autor": "Desert Rose Band",
		"url": "https://www.youtube.com/watch?v=ydmHfVLFLCM",
		"descripcion": ""
	},
	{
		"nombre": "Free Bird",
		"autor": "Lynyrd Skynyrd",
		"url": "https://www.youtube.com/watch?v=bwqfwieV-mc",
		"descripcion": "Su solo es un manjar otorgado por los dioses."
	},
	{
		"nombre": "Take On Me",
		"autor": "a-ha",
		"url": "https://www.youtube.com/watch?v=djV11Xbc914",
		"descripcion": ""
	},
	{
		"nombre": "Paranoid",
		"autor": "Black Sabbath",
		"url": "https://www.youtube.com/watch?v=uk_wUT1CvWM",
		"descripcion": "Bienvenidos a Estalia, caballeros. No os mentiré..."
	},
	{
		"nombre": "The Top",
		"autor": "Ken Blast",
		"url": "https://www.youtube.com/watch?v=aPI7ZeOGckQ",
		"descripcion": "Naturalmente, he de poner un mínimo de Eurobeat."
	},
	{
		"nombre": "Big Iron",
		"autor": "Marty Robbins",
		"url": "https://www.youtube.com/watch?v=zzICMIu5zFY",
		"descripcion": "Cantar Big Iron a viva voz es de obligado cumplimiento."
	},
	{
		"nombre": "Down Under",
		"autor": "Men At Work",
		"url": "https://www.youtube.com/watch?v=XfR9iY5y94s",
		"descripcion": ""
	},
	{
		"nombre": "Echoes",
		"autor": "Pink Floyd",
		"url": "https://www.youtube.com/watch?v=53N99Nim6WE",
		"descripcion": ""
	},
	{
		"nombre": "Master of Puppets",
		"autor": "Metallica",
		"url": "https://www.youtube.com/watch?v=S7blkui3nQc",
		"descripcion": ""
	},
	{
		"nombre": "Forever Young",
		"autor": "Alphaville",
		"url": "https://www.youtube.com/watch?v=t1TcDHrkQYg",
		"descripcion": ""
	},
	{
		"nombre": "Sheer Heart Attack",
		"autor": "Queen",
		"url": "https://www.youtube.com/watch?v=rkHF_JMnB8o",
		"descripcion": ""
	},
	{
		"nombre": "Message In A Bottle",
		"autor": "The Police",
		"url": "https://www.youtube.com/watch?v=MbXWrmQW-OE",
		"descripcion": ""
	},
	{
		"nombre": "Lost in Love",
		"autor": "Air Supply",
		"url": "https://www.youtube.com/watch?v=cZiq84hM74g",
		"descripcion": ""
	},
	{
		"nombre": "Money For Nothing",
		"autor": "Dire Straits",
		"url": "https://www.youtube.com/watch?v=wTP2RUD_cL0",
		"descripcion": ""
	},
	{
		"nombre": "Keep On Loving You",
		"autor": "REO Speedwagon",
		"url": "https://www.youtube.com/watch?v=wJzNZ1c5C9c",
		"descripcion": ""
	},
	{
		"nombre": "Cold As Ice",
		"autor": "Foreigner",
		"url": "https://www.youtube.com/watch?v=ySb1f9zWJkQ",
		"descripcion": ""
	},
	{
		"nombre": "Suspiros de España",
		"autor": "Dyango",
		"url": "https://www.youtube.com/watch?v=_59tOefrlpY",
		"descripcion": ""
	},
	{
		"nombre": "Un Beso Y Una Flor",
		"autor": "Nino Bravo",
		"url": "https://www.youtube.com/watch?v=maEVfX9zRIE",
		"descripcion": ""
	},
	{
		"nombre": "Maneater",
		"autor": "Daryl Hall & John Oates",
		"url": "https://www.youtube.com/watch?v=yRYFKcMa_Ek",
		"descripcion": ""
	},
	{
		"nombre": "Wind Of Change",
		"autor": "Scorpions",
		"url": "https://www.youtube.com/watch?v=n4RjJKxsamQ",
		"descripcion": ""
	},
	{
		"nombre": "Against All Odds",
		"autor": "Phil Collins",
		"url": "https://www.youtube.com/watch?v=CkGg1bzfSys",
		"descripcion": ""
	},
	{
		"nombre": "Easy Lover",
		"autor": "Phil Collins",
		"url": "https://www.youtube.com/watch?v=2aJ2Vh_e2dQ",
		"descripcion": ""
	},
	{
		"nombre": "Another Day In Paradise",
		"autor": "Phil Collins",
		"url": "https://www.youtube.com/watch?v=Qt2mbGP6vFI",
		"descripcion": ""
	},
	{
		"nombre": "Owner of a Lonely Heart",
		"autor": "Yes",
		"url": "https://www.youtube.com/watch?v=IG_VDj8Eh_g",
		"descripcion": ""
	},
	{
		"nombre": "Cadillac Solitario",
		"autor": "Loquillo",
		"url": "https://www.youtube.com/watch?v=vvitGvSA1EI",
		"descripcion": ""
	},
	{
		"nombre": "Ring of fire",
		"autor": "Johnny Cash",
		"url": "https://www.youtube.com/watch?v=1WaV2x8GXj0",
		"descripcion": ""
	},
	{
		"nombre": "(I Just) Died In Your Arms",
		"autor": "Cutting Crew",
		"url": "https://www.youtube.com/watch?v=2wf-MNzSbpA",
		"descripcion": "Otro clásico irrevocable."
	},
	
]
