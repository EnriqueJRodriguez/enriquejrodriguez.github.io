$(document).ready(function(){	
		
	elegirCita();
	setInterval(elegirCita, 8000);

});



function elegirCita() {
	let lon = citas.length;
	let num = Math.floor(Math.random() * lon);
	let cita = citas[num];
	$("#cita").text(cita.cita);
	$("#autorcita").text(cita.autor);
}

var citas = [
	{
		"cita": "El éxito no es definitivo, el fracaso no es fatal; es el valor para persistir lo que cuenta.",
		"autor": "Winston Churchill"
	},
	{
		"cita": "La historia me será amable, puesto que pretendo escribirla.",
		"autor": "Winston Churchill"
	},
	{
		"cita": "La muerte no es nada, pero vivir derrotado y sin gloria es morir a diario.",
		"autor": "Napoleón Bonaparte"
	},
	{
		"cita": "La independencia, al igual que el honor, es una isla rocosa sin playas.",
		"autor": "Napoleón Bonaparte"
	},
	{
		"cita": "El que quiera hacer historia, primero que aprenda de ella.",
		"autor": "Napoleón Bonaparte"
	},
	{
		"cita": "Nunca interrumpas a un enemigo cuando está cometiendo un error.",
		"autor": "Napoleón Bonaparte"
	},
	{
		"cita": "Mejor luchar por algo que vivir por nada.",
		"autor": "General George S. Patton"
	},
	{
		"cita": "Los cobardes mueren multitud de ocasiones antes de su muerte. Los valientes no prueban la muerte sino una vez.",
		"autor": "William Shakespeare, 'Julio César'"
	},
	{
		"cita": "Vivid como hombres valientes; y si la fortuna os es adversa, afrontad sus golpes con corazones henchidos de bravura.",
		"autor": "Cicerón"
	},
	{
		"cita": "Si conoces al enemigo y te conoces a ti mismo, no debes temer el resultado de cien batallas.",
		"autor": "Sun Tzu"
	},
	{
		"cita": "Un líder predica con el ejemplo, no con la fuerza.",
		"autor": "Sun Tzu"
	},
	{
		"cita": "Casi todos los hombres pueden afrontar la adversidad, pero si queréis poner a prueba el carácter de un hombre, dadle poder.",
		"autor": "Abraham Lincoln"
	},
	{
		"cita": "Ningún plan resiste el primer contacto con el enemigo.",
		"autor": "Helmuth von Moltke"
	},
	{
		"cita": "Si te embarcas en un viaje de venganza, cava dos tumbas.",
		"autor": "Confucio"
	},
	{
		"cita": "Una nación se revela no sólo por los hombres que produce pero también por los hombres a los que honra, los hombres a los que recuerda.",
		"autor": "John Fitzgerald Kennedy"
	},
	{
		"cita": "Pocos hombres nacen valerosos, muchos obtienen tal cualidad mediante entrenamiento y disciplina.",
		"autor": "Vegecio"
	},
	{
		"cita": "Qui desiderat pacem praeparet bellum. / El que desee la paz, que se prepare para la guerra.",
		"autor": "Vegecio"
	},
	{
		"cita": "Para aquellos que huyen no hay honor ni gloria.",
		"autor": "Homero"
	},
	{
		"cita": "De todos los infortunios que afligen a la humanidad el más amargo es que hemos de tener conciencia de mucho y control de nada.",
		"autor": "Heródoto"
	},
	{
		"cita": "Preferible tener siempre un corazón robusto y sufrir nuestra cuota de males, que vivir siempre temeroso de lo que pueda ocurrir.",
		"autor": "Heródoto"
	},
	{
		"cita": "Cuando la guerra se acabe, haz alianzas.",
		"autor": "Proverbio griego"
	},
	{
		"cita": "Fortis cadere, cedere non potest. / Un hombre valiente puede caer, pero no rendirse.",
		"autor": "Proverbio romano"
	},
	{
		"cita": "La victoria ama a la prudencia.",
		"autor": "Proverbio romano"
	},
	{
		"cita": "Las artes propias de un general son el juicio y la prudencia.",
		"autor": "Tácito"
	},
	{
		"cita": "Los grandes imperios no se mantienen con timidez.",
		"autor": "Tácito"
	},
	{
		"cita": "El deseo de seguridad está contra toda grande y noble empresa.",
		"autor": "Tácito"
	},
	{
		"cita": "Fas est et ab hoste doceri. / Está bien aprender, incluso del enemigo.",
		"autor": "Ovidio."
	},
	{
		"cita": "El hombre sabio habla porque tiene algo que decir, el necio porque tiene que decir algo.",
		"autor": "Aristóteles"
	},
	{
		"cita": "Mal plan aquel que no puede ser alterado.",
		"autor": "Publilio Siro"
	},
	{
		"cita": "Perdona una ofensa y alentarás la realización de muchas.",
		"autor": "Publilio Siro"
	},
	{
		"cita": "Aquel que está más seguro del peligro es el que permanece en guardia incluso cuando parece estar a salvo.",
		"autor": "Publilio Siro"
	},
	{
		"cita": "Si un hombre no sabe hacia qué puerto navega, ningún viento le es favorable.",
		"autor": "Séneca"
	},
	{
		"cita": "La obediencia voluntaria siempre triunfa sobre la forzosa.",
		"autor": "Jenofonte"
	},
	{
		"cita": "Aníbal sabía conseguir una victoria, pero no cómo emplearla.",
		"autor": "Maharbal"
	},
	{
		"cita": "Una alianza con los poderosos nunca debe ser digna de confianza.",
		"autor": "Fedro"
	},
	{
		"cita": "Divide y vencerás.",
		"autor": "Máxima militar"
	},
	{
		"cita": "El sudor salva sangre, la sangre salva vidas, pero los cerebros salvan ambos.",
		"autor": "Mariscal Rommel"
	},
	{
		"cita": "No luches una batalla si no obtienes ganancia alguna de la victoria.",
		"autor": "Mariscal Rommel"
	},
	{
		"cita": "Sé un ejemplo para tus hombres, en el deber y en la vida privada. [...] Evita una excesiva aspereza en la voz, lo que suele señalar al hombre que tiene defectos que ocultar.",
		"autor": "Mariscal Rommel"
	},
	{
		"cita": "Preferiría ser el martillo antes que el yunque.",
		"autor": "Mariscal Rommel"
	},
	{
		"cita": "Las decisiones audaces tienen la mayor probabilidad de éxito. Pero uno debe diferenciar entre la audacia estratégica-táctica y una apuesta.",
		"autor": "Mariscal Rommel"
	},
	{
		"cita": "Estos son malos tiempos. Los hijos han dejado de obedecer a sus padres y todo el mundo escribe libros.",
		"autor": "Cicerón"
	},
	{
		"cita": "Si quieres aprender, enseña.",
		"autor": "Cicerón"
	},
	{
		"cita": "El estudio y la contemplación de la naturaleza es el natural alimento de la inteligencia y del corazón.",
		"autor": "Cicerón"
	},
	{
		"cita": "Las raíces del estudio son amargas; los frutos, dulces.",
		"autor": "Cicerón"
	},
	{
		"cita": "Pocos ven lo que somos, pero todos ven lo que aparentamos.",
		"autor": "Maquiavelo"
	},
	{
		"cita": "Vale más hacer y arrepentirse, que no hacer y arrepentirse.",
		"autor": "Maquiavelo"
	},
	{
		"cita": "Los hombres ofenden antes al que aman que al que temen.",
		"autor": "Maquiavelo"
	},
	{
		"cita": "La naturaleza de los hombres soberbios y viles es mostrarse insolentes en la prosperidad y abyectos y humildes en la adversidad.",
		"autor": "Maquiavelo"
	},
	{
		"cita": "La historia es la ciencia de los hombres, de los hombres en el tiempo.",
		"autor": "Maquiavelo"
	},
	{
		"cita": "El infierno está empedrado de buenas intenciones.",
		"autor": "San Bernardo de Claraval"
	},
	{
		"cita": "Los hay tan turbulentos que cuando están libres de trabajo trabajan aún más, puesto que mayor el ocio que tienen para pensar, peor el tumulto interno que han de soportar.",
		"autor": "Papa Gregorio I"
	},
	{
		"cita": "No sólo hay que recordar que cada día vivido es un día menos sino que no está garantizado que nuestra inteligencia nos acompañará hasta el final.",
		"autor": "Marco Aurelio"
	},
	{
		"cita": "La mejor forma de defenderte, es no parecerte a ellos.",
		"autor": "Marco Aurelio"
	},
	{
		"cita": "El hombre que a todo antepusiere su inteligencia, su genio interior y los misterios del culto debido a la gloria de éste, ese hombre no representará una tragedia, no se entregará al llanto, prescindirá de la soledad como de la muchedumbre; y, lo que es más, vivirá sin aprestarse y sin huir de la muerte.",
		"autor": "Marco Aurelio"
	},
	{
		"cita": "Mientras me quede algo por hacer, no habré hecho nada.",
		"autor": "Julio César"
	},
	{
		"cita": "Además, creo que Cartago debe ser destruida.",
		"autor": "Catón el Viejo"
	},
	{
		"cita": "La verdadera gloria consiste en hacer lo que merece escribirse y en escribir lo que merece leerse.",
		"autor": "Plinio el Viejo"
	},
	{
		"cita": "Si Dios no existiera, sería necesario inventarlo.",
		"autor": "Voltaire"
	},
	{
		"cita": "El secreto de aburrir a la gente consiste en decirlo todo.",
		"autor": "Voltaire"
	},
	{
		"cita": "Conviene siempre esforzarse más en ser interesante que exacto; porque el espectador lo perdona todo menos el sopor.",
		"autor": "Voltaire"
	},
	{
		"cita": "Si he visto más lejos que otros, es porque estaba sobre los hombros de gigantes.",
		"autor": "Sir Isaac Newton"
	},
	{
		"cita": 'No diré "no lloréis", pues no todas las lágrimas son amargas.',
		"autor": "Gandalf"
	},
	{
		"cita": "Desleal es aquel que desaparece cuando el camino es oscuro.",
		"autor": "J.R.R. Tolkien"
	},
	{
		"cita": "Ni el más sabio conoce el fin de todos los caminos.",
		"autor": "Gandalf"
	},
	{
		"cita": "La antigua sabiduría fue olvidada en Occidente. Los reyes hicieron tumbas más hermosas que las casas de los vivos, dando más valor al nombre de sus antepasados que al de sus hijos.",
		"autor": "Gandalf"
	},
	{
		"cita": "Nada queda fuera de mi alcance con diez dedos en las manos y ciento cincuenta españoles.",
		"autor": "Alonso de Contreras"
	},
	{
		"cita": "Si en la pelea veis caer mi caballo y mi estandarte, levantad primero a este que a mí.",
		"autor": "Carlos I de España"
	},
	{
		"cita": "No importa que no me entendáis. Que yo estoy hablando en mi lengua española, que es tan bella y noble que debería ser conocida por toda la cristiandad.",
		"autor": "Carlos I de España"
	},
	{
		"cita": "Hablo el español con Dios, el italiano con las mujeres, el francés con los hombres y el alemán con mi caballo.",
		"autor": "Carlos I de España"
	},
	{
		"cita": "La Humanidad debe gratitud eterna a la Monarquía española, pues la multitud de expediciones científicas que ha financiado ha hecho posible la extensión de los conocimientos geográficos.",
		"autor": "Alexander von Humboldt"
	},
	{
		"cita": "No hay puñado de tierra sin una tumba española.",
		"autor": "Anónimo"
	},
	{
		"cita": "Me gusta saber que dejo una parte de mí mismo en cada campo de batalla, a cambio de un poco de gloria.",
		"autor": "Blas de Lezo"
	},
	{
		"cita": "Hay que tener cuidado al elegir a los enemigos, porque uno termina pareciéndose a ellos.",
		"autor": "Jorge Luis Borges"
	},
	{
		"cita": "Yo soy yo y mis circunstancias.",
		"autor": "Ortega y Gasset"
	},
	{
		"cita": "Cuando uno se hace viejo, gusta más releer que leer.",
		"autor": "Pío Baroja"
	},
	{
		"cita": "La soledad es muy hermosa... cuando se tiene alguien a quien decírselo.",
		"autor": "Gustavo Adolfo Bécquer"
	},
	{
		"cita": "Muchos habrían podido llegar a la sabiduría si no se hubiesen creído ya suficiente sabios.",
		"autor": "Juan Luis Vives"
	},
	{
		"cita": "No recen para tener vidas sencillas, amigos. Recen para ser más fuertes.",
		"autor": "John Fitzgerald Kennedy"
	},
	{
		"cita": "La guerra en el desierto es como la guerra naval: uno no trata de capturar el agua, de lo que se trata es de destruir barcos.",
		"autor": "Hans Von Gröbel"
	},
	{
		"cita": "Recoges lo que siembras, Artyom. Para quebrar este círculo vicioso uno debe hacer más que actuar sin pensamiento ni duda alguna.",
		"autor": "Khan"
	},
	{
		"cita": "Dios creó al hombre, Colt los hizo iguales.",
		"autor": "Anónimo"
	},
	{
		"cita": "Moriré en este mundo. Moriré en Armaggeddon.",
		"autor": "Reclusiarca Grimaldus, héroe (vivo) de Armaggeddon."
	},
	{
		"cita": "Cada despedida nos proporciona una anticipación de la muerte; cada reunión, un indicio de la resurrección.",
		"autor": "Arthur Schopenhauer"
	},
	{
		"cita": "El Caos era la ley de la naturaleza; el Orden, el sueño del hombre.",
		"autor": "Henry Adams"
	},
]

