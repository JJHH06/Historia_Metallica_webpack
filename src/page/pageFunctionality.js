import historia11 from '../assets/historia/historia11.jpg';
import historia12 from '../assets/historia/historia12.jpg';
import historia13 from '../assets/historia/historia13.jpg';

import historia21 from '../assets/historia/historia21.jpg';
import historia22 from '../assets/historia/historia22.png';
import historia23 from '../assets/historia/historia23.jpg';

import historia31 from '../assets/historia/historia31.jpg';
import historia32 from '../assets/historia/historia32.jpg';
import historia33 from '../assets/historia/historia33.jpg';

import historia41 from '../assets/historia/historia41.jpg';
import historia42 from '../assets/historia/historia42.jpg';
import historia43 from '../assets/historia/historia43.jpg';

import historia51 from '../assets/historia/historia51.jpg';
import historia52 from '../assets/historia/historia52.jpg';
import historia53 from '../assets/historia/historia53.jpg';
import historia54 from '../assets/historia/historia54.jpg';
import historia55 from '../assets/historia/historia55.jpg';

import historia61 from '../assets/historia/historia61.jpg';
import historia62 from '../assets/historia/historia62.jpg';

import historia71 from '../assets/historia/historia71.jpg';
import historia72 from '../assets/historia/historia72.jpeg';

//paso de parametros
var eleccionPagina = 0;
var retornoDeParametro = sessionStorage.getItem("numeroPaginaHistoria");
//esto es en caso de que a alguien se le ocurra la idea de abrir primero una pagina antes de menu
if( retornoDeParametro != null){
    eleccionPagina = retornoDeParametro;
};


var titulosHistoria = [
    "\nFormación de la banda",
    "\nCliff Burton, el bajista excepcional, y la expulsión de Dave Mustaine",
    "\nPrimeros álbumes y ¿“Alcohólica”?",
    "\nAccidente en Suecia y la muerte de Cliff Burton",
    "\nLa mala aceptación de Jason Newsted y creación de uno de los mejores álbumes de la historia",
    "\nCaso Napster y la banda al borde del colapso",
    "\nUn Nuevo Bajista y la actualidad",
];
document.getElementById("titulo-historia").innerText = titulosHistoria[eleccionPagina];

var imagenesHistoria=[
    [historia11,historia12,historia13],
    [historia21,historia22,historia23],
    [historia31,historia32,historia33],
    [historia41,historia42,historia43],
    [historia51,historia52,historia53,historia54,historia55],
    [historia61,historia62],
    [historia71,historia72]
];
//primeras 2 imagenes
document.getElementById("imagen-historia1").src = imagenesHistoria[eleccionPagina][0];
document.getElementById("imagen-historia2").src = imagenesHistoria[eleccionPagina][1];


//parrafos
var parrafosHistorias = [
    //historia1
    [
        "Los inicios de la banda comenzaron en 1981, cuando Lars Urlich, originario de Dinamarca, llegó a california con su familia, el siempre fue un aficionado al heavy metal y sabía tocar un poco de la batería, por lo que publicó un anuncio en una revista llamada Recycler que necesitaba un guitarrista para iniciar su propia banda de metal, anuncio que respondió el joven guitarrista James Hetfield.",
        "Luego de haberse conocido, comenzaron a reclutar un bajista y un guitarrista extra. Para el bajo seleccionaron a un amigo de James Hetfield llamado Ron McGovney, el no sabía tocar bajo, pero James se ofreció a enseñarle. Para guitarrista, encontraron a un joven llamado Lloyd Grant. Siendo esta la primera agrupación oficial de metallica.",
        "Lloyd Grant planeó quedarse con la banda solo por poco tiempo, debido a esto luego de escribir la primera canción de Metallica, llamada Hit The Lights, partió. La banda encontró a un guitarrista super talentoso rápidamente, este se llamaba Dave Mustaine, aunque este no convenció del todo a los miembros de Metallica, se rumora que lo contrataron porque tenía mucho equipo musical que podría ser útil para la banda."
    ],

    //historia2
    [
        "Luego de tener esta conformación de la banda fija por vario tiempo, James y Lars se plantearon cambiar a un nuevo bajista, por lo que les recomendaron ir a ver a la banda exodus al bar Whisky a go go. Cuando estos 2 entraron al bar se sorprendieron al escuchar un solo de guitarra asombroso, al momento de acercarse a ver quien lo tocaba, descubrieron que era un solo de Bajo, y estaba siendo tocado por el bajista que les habían recomendado, Cliff Burton. A este bajista le ofrecieron unirse a la banda, inicialmente rechazó la oferta, pero luego de unos problemas con su banda, aceptó unirse con la condición de que la banda se mudara a San Francisco. El solo que Cliff Burton tocó ese día en el bar, es ahora una de las canciones del primer álbum de la banda, y se llama Anesthesia ( Pulling teeth).",
        "Al mismo tiempo que reclutaban a un nuevo bajista, los problemas de alcohol y drogas de Dave Mustaine se hicieron evidentes. Este guitarrista tenía una actitud muy problemática y violenta, lo cual causó que en medio de una de las primeras giras de la banda por Nueva York fuera echado de la banda. A este se le notificó con un boleto de tren de regreso a casa. Durante este viaje en tren, Dave Mustaine lleno de furia se le ocurrió crear Megadeth, con el propósito de tocar mejor y mucho más rápido que Metallica, esta banda se convertiría en una de las más icónicas del trash metal.",
        "Metallica por otro lado reclutó a un joven guitarrista llamado Kirk Hammett, este fue descubierto por la banda en la gira que estaban realizando, ya que estaba en una banda llamada Exodus, sin embargo lo convencieron de dejarla. Este guitarrista fue muy icónico para metallica, ya que fue pupilo de Joe Satriani (uno de los mejores guitarristas del mundo), por lo que introdujo sonidos más armónicos y complejos a la banda."
    ],
    //historia3
    [
        "En 1983 la banda comenzó la grabación de su primer álbum. Este fue grabado en los Music America Studios en Nueva york, incluyendo 10 canciones. Un debate interesante que se dio con este álbum fue el nombre, ya que la banda lo quería nombrar “metal up your ass”, pero por razones publicitarias decidieron llamarlo Kill em All. Metallica logró vender varias miles de copias de este álbum en las primeras semanas, lo cual ocasionó que hicieran una gira publicitaria en Europa, abriéndole el concierto a varias bandas e incrementando su popularidad.",
        "Luego de regresar de la gira, en 1984, la banda se plantea la creación de un nuevo álbum con ideas nuevas, introduciendo un sonido más melodico. Este originalmente incluyó 7 canciones, pero la productora les dijo que necesitaban al menos 8 canciones para lanzar el álbum, y ahí nació la canción Escape, echa a ultima hora. Finalmente decidieron llamar al álbum como una de sus canciones, Ride the lightning. Cabe a destacar que al inicio este álbum no fue muy bien aceptado por los fans de la banda.",
        "Después de realizar su segundo álbum, Metallica hizo una gira promocional por Estados Unidos, como banda principal y para abrirle a otras bandas famosas. En esta gira promocional, la banda se ganó el apodo de alcohólica, ya que los miembros de la banda tomaban demasiado alcohol, antes y al mismo tiempo que tocaban. Aquí la banda ganó muchísima fama, ya que cuando abría para bandas más grandes, parecía que ellos eran el evento principal, debido a una gran energía y canciones muy buenas, que hacían al publico preguntarse “yo pensé que iba a salir otra banda”."
    ],
    //historia4
    [
        "Luego de concluidos 2 álbumes y 2 giras promocionales. La banda se puso a realizar un tercer álbum. Este sería llamado Master of Puppets, e incluiría un sonido mucho más fuerte y elaborado, volviéndolo uno de los álbumes más vendidos en la historia del metal. Luego de culminado el álbum, la banda había ganado fama mundial, por lo que realizaron una gira por todo el mundo, siendo los artistas principales de esta.",
        "Durante la gira promocional de Master of Puppets en 1986 todo iba bien, hasta el 27 de septiembre de ese año. La madrugada de ese día, la banda se movilizaba por la carretera de Kronoberg, Suecia, el autobús de la banda derrapó y dio varias vueltas, dejando al Bajista Cliff Burton debajo del vehículo, causando su muerte. Esto fue un golpe muy duro para la banda, ya que Cliff era uno de los compositores principales de las canciones, debido a sus grandes antecedentes musicales, se rumora que Cliff Burton tuvo tantos maestros de bajo, que llegó a un punto donde no encontró un maestro que le pudiese enseñar más, debido a esto sus composiciones son comparadas con la música clásica. La ultima composición de Cliff Burton se tomó en cuenta en la canción to live is to die siendo esta una representación musical del duelo de los integrantes de la banda por la partida de Cliff Burton.",
        "Debido a que la muerte de Cliff Burton fue en medio de una gira mundial, solo se pospusieron las fechas unas semanas, para darle tiempo a la banda de encontrar un nuevo bajista. Durante las audiciones que realizó Metallica, encontró a un joven bajista llamado Jason Newsted, el era un gran fan de metallica, por lo que se sabía todas las canciones de la banda, lo cual facilitó que este se convirtiera en el nuevo bajista de la banda. Jason continuó el tour que Metallica había dejado en pausa."
    ],
    //historia5
    [
        "Luego de concluida la gira de Master of Puppets en 1987 la banda decidió grabar el disco Garage Days, que sería un albúm de covers de bandas que influyeron a los miembros de Metallica en su carrera, este también serviría para que se adaptara el bajista a la banda.",
        "Un año después en 1988, la banda decidió grabar un nuevo álbum, este introdujo el nuevo sonido de Jason Newsted, siendo las canciones mucho más agresivas. Este álbum se llamó And Justice for all..., siendo uno de los más vendidos de la banda. Algo curioso que se nota en este álbum es que el sonido del bajo es casi nulo, esto se rumora que fue por capricho de la banda al no aceptar bien al bajista. Una canción muy icónica de este álbum fue One, siendo una de las más reconocidas de la banda.",
        "Luego de una gira promocional y de unos años de descanso, en 1991 la banda decidió crear un álbum llamado Metallica, debido a su portada negra, también se le conoce como The Black Album. Este álbum tuvo un éxito astral, vendió tantas copias, que se le considera uno de los álbumes más vendidos de la historia. Además, las canciones eran muy buenas, a tal nivel que la revista Rolling Stone dijo que la canción del álbum Enter Sandman, es considerada una de las mejores canciones de todos los tiempos.",
        "Durante las giras de estos dos albumes, Jason Newsted no sintió que era parte de la banda, ya que era tratado muy mal por el resto de los integrantes, se rumora que no le hablaban y según Jason siempre lo trataron como el chico nuevo. También le hacían bromas pesadas, una de estas era que le hacían creer que el bar de su cuarto de hotel era sin costo, y luego le llegaban facturas inmensas.",
        "Luego de haber terminado con el black álbum, la banda sacó 3 albumes más Load(1996), ReLoad (1997), Garage Inc. (1998) y S&M (1999), este ultimo son versiones sinfónicas de sus mayores éxitos y los albumes anteriores no tuvieron tanta fama. Sin embargo los disgustos de el grupo hacía Jason Newsted continuaron. Un dato interesante es que las portadas de Load y Reload, fueron fotografías de sangre del fotógrafo Andres Serrano y otros fluidos de su cuerpo."
    ],
    //historia6
    [
        "En el año 2000, Metallica notó que sus álbumes no se estaban vendiendo bien, pero mucha gente los estaba escuchando, esto fue debido a una plataforma de descarga de canciones llamada Napster, esta se basaba en que un usuario subía a la plataforma el disco que había comprado y otras personas lo podían descargar de manera gratuita. Debido a esto, Metallica fue uno de los artistas principales que demandó a Napster, en esta demanda la banda salió victoriosa, pero le costó bastante opinión pública, ya que ahora la gente pensaba que Metallica solo tocaba por el dinero.",
        "En 2001 la banda grabó un nuevo álbum, llamado St. Anger , este contuvo canciones con un sonido experimental, donde predominaba la batería y no había solos de guitarra, debido a esto y a la baja opinión publica de Metallica por la demanda a Napster, mucha gente lo crítico. Durante una gira la gira de mismo año, en este punto Jason Newsted (el bajista) ya no aguantaba más los abusos y malos tratos por parte de sus compañeros, por lo que decidió dejar la banda justo después de finalizada la gira mundial. Esto hizo que la banda quedara en shock, por lo que James Hetfield (el guitarrista y cantante principal) decidió entrar a rehabilitación por sus problemas con el alcohol y por qué se dio cuenta del daño que le había causado a Jason. Esto casi hace que la banda se separara. Jason por su parte, fundó una banda de rock alternativo que se llama Newsted."
    ],
    //historia7
    [
        "En 2004 James Hetfield regresó a la banda y estos se dieron a la tarea de buscar un nuevo bajista. Para esto realizaron muchísimas audiciones, las cuales fueron televisadas en MTV como parte de un documental acerca de la búsqueda de un nuevo bajista para Metallica. Entre los muchos bajistas que audicionaron, encontraron a Robert Trujillo. Robert había tenido una gran experiencia con el bajo, ya que fue el bajista de Ozzy Osbourne en varias ocasiones. Al escucharlo se dieron cuenta que era el indicado y fue contratado como el nuevo bajista de la banda, además como señal de buena fe, le dieron una bonificación de 1 millón de dólares por entrar a Metallica y también se comprometieron a ser mejores personas. Robert Trujillo es el actual bajista de la banda.",
        "Metallica luego de hacer una gira promocional con el nuevo bajista, lanzó 2 álbumes, Death Magnetic (2008) y Hardwired… To Self-Destruct (2016). Además, hace pocos años se reconciliaron con Dave Mustaine (el guitarrista que fue echado), luego de una pelea eterna entre ellos, e incluso Megadeth y Metallica hicieron una gira con otras grandes bandas de metal en 2011, esta gira se llamó The Big 4. Con esto llegamos a la actualidad, donde la gira de Metallica durante su gira mundial, luego de grabar el álbum sinfónico S&M 2 (2019) suspendió su gira mundial debido a una recaída con el alcoholismo de James Hetfield, y luego anunciaron en 2020 que retomarían la gira en abril de ese año, sin embargo, se tuvo que suspender debido a la pandemia de Covid-19. Además, se rumora que están escribiendo nuevas canciones para un álbum mejor a los 2 anteriores, solo nos queda esperar lo que viene."
    ]
];


//primeros 2 fragmentos
document.getElementById("texto-historia1").innerText = parrafosHistorias[eleccionPagina][0];
document.getElementById("texto-historia2").innerText = parrafosHistorias[eleccionPagina][1];


//funcion que crea los contenedores de las historias a la derecha
function rightFeaturette(parrafo_historia, imagen_historia){
    var rowFeaturette = document.createElement("div");
    rowFeaturette.classList = "row featurette";

    var textContainter = document.createElement("div");
    textContainter.classList = "col-md-7";

    rowFeaturette.appendChild(textContainter);

    var featuretteParagraph  = document.createElement("p");
    featuretteParagraph.classList = "lead";
    featuretteParagraph.innerText = parrafo_historia;

    textContainter.appendChild(featuretteParagraph);

    var imageContainter = document.createElement("div");
    imageContainter.classList = "col-md-5";

    rowFeaturette.appendChild(imageContainter);

    var featuretteImage = document.createElement("img");
    featuretteImage.classList.add("bd-placeholder-img", "bd-placeholder-img-lg", "featurette-image", "img-fluid", "mx-auto");
    featuretteImage.width = "500";
    featuretteImage.height = "500";
    featuretteImage.role = "img";
    featuretteImage.preserveAspectRatio = "xMidYMid slice";
    featuretteImage.focusable = "false";
    featuretteImage.src = imagen_historia;
    featuretteImage.innerHTML = "<rect width=\"100%\" height=\"100%\" fill=\"#eee\"/>";

    imageContainter.appendChild(featuretteImage);

    var divisor = document.createElement("hr");
    divisor.classList = "featurette-divider";

    var contenedorFeaturettes = document.getElementById("contenedor-featurettes");

    contenedorFeaturettes.appendChild(rowFeaturette);
    contenedorFeaturettes.appendChild(divisor);
};

//funcion que crea los contenedores de las historias con imagen a la izquierda
function leftFeaturette(parrafo_historia, imagen_historia){
    var rowFeaturette = document.createElement("div");
    rowFeaturette.classList = "row featurette";

    var textContainter = document.createElement("div");
    textContainter.classList.add("col-md-7", "order-md-2");
    

    rowFeaturette.appendChild(textContainter);

    var featuretteParagraph  = document.createElement("p");
    featuretteParagraph.classList = "lead";
    featuretteParagraph.innerText = parrafo_historia;

    textContainter.appendChild(featuretteParagraph);

    var imageContainter = document.createElement("div");
    imageContainter.classList = "col-md-5";

    rowFeaturette.appendChild(imageContainter);

    var featuretteImage = document.createElement("img");
    featuretteImage.classList.add("bd-placeholder-img", "bd-placeholder-img-lg", "featurette-image", "img-fluid", "mx-auto");
    featuretteImage.width = "500";
    featuretteImage.height = "500";
    featuretteImage.role = "img";
    featuretteImage.preserveAspectRatio = "xMidYMid slice";
    featuretteImage.focusable = "false";
    featuretteImage.src = imagen_historia;
    featuretteImage.innerHTML = "<rect width=\"100%\" height=\"100%\" fill=\"#eee\"/>";

    imageContainter.appendChild(featuretteImage);

    var divisor = document.createElement("hr");
    divisor.classList = "featurette-divider";

    var contenedorFeaturettes = document.getElementById("contenedor-featurettes");

    contenedorFeaturettes.appendChild(rowFeaturette);
    contenedorFeaturettes.appendChild(divisor);
};

//si la pagina es menor
if(eleccionPagina<5){
    rightFeaturette(parrafosHistorias[eleccionPagina][2],imagenesHistoria[eleccionPagina][2]);
    if(eleccionPagina == 4){
        leftFeaturette(parrafosHistorias[eleccionPagina][3],imagenesHistoria[eleccionPagina][3]);
        rightFeaturette(parrafosHistorias[eleccionPagina][4],imagenesHistoria[eleccionPagina][4]);
    }
};

//creacion de botones
/* <a class="btn btn-primary col" id="boton-link2" href="page.html">Ir a parte 2 de Historia &raquo;</a>
      <div class ="col-4"></div>
      <a class="btn btn-primary  col" id="boton-link2" href="page.html">&laquo; Ir a parte 2 de Historia</a> */


function crearBotonNavegarLeft(no_historia){
    var botonIr = document.createElement("a");
    botonIr.classList.add("btn", "btn-primary", "col");
    botonIr.href = "page.html";
    const paginaIndice = no_historia+1;
    botonIr.innerHTML = "&laquo;"+" ir a parte "+paginaIndice+" de la Historia";
    botonIr.onclick =function(){sessionStorage.setItem("numeroPaginaHistoria", no_historia)};
    document.getElementById("contenedor-botones").appendChild(botonIr);
}

function crearBotonNavegarRight(no_historia){
    var botonIr = document.createElement("a");
    botonIr.classList.add("btn", "btn-primary", "col");
    botonIr.href = "page.html";
    const paginaIndice = no_historia+1;
    botonIr.innerHTML = " ir a parte "+paginaIndice+" de la Historia "+"&raquo;";
    botonIr.onclick =function(){sessionStorage.setItem("numeroPaginaHistoria", no_historia)};
    document.getElementById("contenedor-botones").appendChild(botonIr);
}

function crearEspaciadoGrande(){
    var espaciadorGrande = document.createElement("div");
    espaciadorGrande.classList = "col-8";
    document.getElementById("contenedor-botones").appendChild(espaciadorGrande);
};

function crearEspaciadoMediano(){
    var espaciadorMediano = document.createElement("div");
    espaciadorMediano.classList = "col-4";
    document.getElementById("contenedor-botones").appendChild(espaciadorMediano);
};


const pagina_futura = 1+ parseInt(eleccionPagina);
const pagina_pasada = parseInt(eleccionPagina) -1;
if(eleccionPagina ==0){
    crearEspaciadoGrande();
    crearBotonNavegarRight(1);
}
else if(eleccionPagina == 6){
    crearBotonNavegarLeft(6);
    crearEspaciadoGrande();
}
else{
    crearBotonNavegarLeft(pagina_pasada);
    crearEspaciadoMediano()
    crearBotonNavegarRight(pagina_futura);
}

