var slideIndex = 1;

$(document).ready(function(){	
		
	elegirVideojuego();

});

function elegirVideojuego() {
	let num = bibliotecav.length;
	let elegido = Math.floor(Math.random() * num);
	let juego = bibliotecav[elegido];
	$("#vdport").attr("src", "./images/Juegos/" + juego.portada);
	$("#vdtitulo").text(juego.titulo);
	$("#vddatos").text(juego.desarrollador + " - " + juego.año);
	$("#vddesc").text(juego.descripcion);
	let slideshow = "";
	let dots = "";
	let counter = 1;
	for(imagen in juego.imagenes) {
		slideshow += '<div class="mySlides"><img src="images/juegos/' + juego.imagenes[imagen] + '" style="width:100%"></div>';
		dots += '<span class="dot" onclick="currentSlide(' + counter + ')"></span>';
		counter++;
	}
	slideshow += '<a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a>'
	$(".slideshow-container").html(slideshow);
	$("#vddots").html(dots);
	$("#vdvideo").html('<iframe width="80%" height="auto" src="https://www.youtube.com/embed/' + juego.video.replace("https://www.youtube.com/watch?v=", "") + '" frameborder="0"  allowfullscreen></iframe>' + '<p id="descvideo" class="italic">' + juego.descvideo + '</p>');
	
	showSlides(slideIndex);
}



function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var bibliotecav = [
	{
		"titulo": "Deus Ex",
		"desarrollador": "Ion Storm",
		"año": "2000",
		"portada": "Deus_Ex.jpg",
		"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"imagenes": ["deusex1.jpg", "deusex2.jpg", "deusex3.jpg"],
		"video": "https://www.youtube.com/watch?v=nBPK_oXeJgA",
		"descvideo": "Breve descripción del video en cuestión"
		
	}
]

