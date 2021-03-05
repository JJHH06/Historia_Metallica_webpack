//imagenes de la portada
import portada1 from '../assets/wallpaper4.jpg';
import portada2 from '../assets/wallpaper2.jpg';
import portada3 from '../assets/wallpaper3.jpg';
//imagenes de la historia
import historia1 from '../assets/portada-historia1.jpg';
import historia2 from '../assets/portada-historia2.jpg';
import historia3 from '../assets/portada-historia3.jpg';
import historia4 from '../assets/portada-historia4.png';
import historia5 from '../assets/portada-historia5.jpg';
import historia6 from '../assets/portada-historia6.jpg';
import historia7 from '../assets/portada-historia7.jpg';
//imagen creditos
import creditos from '../assets/creditos-concierto.jpg';



var imagen1 = document.getElementById("portada1");
imagen1.src = portada2;
var imagen1 = document.getElementById("portada2");
imagen1.src = portada1;
var imagen1 = document.getElementById("portada3");
imagen1.src = portada3;

//creacion de las imagenes hacia las historias
var menuHistoria1 = document.getElementById("menu-historia1");
menuHistoria1.src = historia1;

var menuHistoria2 = document.getElementById("menu-historia2");
menuHistoria2.src = historia2;

var menuHistoria3 = document.getElementById("menu-historia3");
menuHistoria3.src = historia3;

var menuHistoria4 = document.getElementById("menu-historia4");
menuHistoria4.src = historia4;

var menuHistoria5 = document.getElementById("menu-historia5");
menuHistoria5.src = historia5;

var menuHistoria6 = document.getElementById("menu-historia6");
menuHistoria6.src = historia6;

var menuHistoria7 = document.getElementById("menu-historia7");
menuHistoria7.src = historia7;

var imagenCreditos = document.getElementById("imagen-creditos");
imagenCreditos.src = creditos;


//definir ubicacion de la historia seleccionada
//boton-link1
function parametroHistoria(no_pagina){
    sessionStorage.setItem("numeroPaginaHistoria", no_pagina);
};

document.getElementById("boton-link1").onclick =function(){parametroHistoria(0)};
document.getElementById("boton-link2").onclick =function(){parametroHistoria(1)};
document.getElementById("boton-link3").onclick =function(){parametroHistoria(2)};
document.getElementById("boton-link4").onclick =function(){parametroHistoria(3)};
document.getElementById("boton-link5").onclick =function(){parametroHistoria(4)};
document.getElementById("boton-link6").onclick =function(){parametroHistoria(5)};
document.getElementById("boton-link7").onclick =function(){parametroHistoria(6)};