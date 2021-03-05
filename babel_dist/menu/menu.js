"use strict";

var _wallpaper = _interopRequireDefault(require("../assets/wallpaper4.jpg"));

var _wallpaper2 = _interopRequireDefault(require("../assets/wallpaper2.jpg"));

var _wallpaper3 = _interopRequireDefault(require("../assets/wallpaper3.jpg"));

var _portadaHistoria = _interopRequireDefault(require("../assets/portada-historia1.jpg"));

var _portadaHistoria2 = _interopRequireDefault(require("../assets/portada-historia2.jpg"));

var _portadaHistoria3 = _interopRequireDefault(require("../assets/portada-historia3.jpg"));

var _portadaHistoria4 = _interopRequireDefault(require("../assets/portada-historia4.png"));

var _portadaHistoria5 = _interopRequireDefault(require("../assets/portada-historia5.jpg"));

var _portadaHistoria6 = _interopRequireDefault(require("../assets/portada-historia6.jpg"));

var _portadaHistoria7 = _interopRequireDefault(require("../assets/portada-historia7.jpg"));

var _creditosConcierto = _interopRequireDefault(require("../assets/creditos-concierto.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//imagenes de la portada
//imagenes de la historia
//imagen creditos
var imagen1 = document.getElementById("portada1");
imagen1.src = _wallpaper2["default"];
var imagen1 = document.getElementById("portada2");
imagen1.src = _wallpaper["default"];
var imagen1 = document.getElementById("portada3");
imagen1.src = _wallpaper3["default"]; //creacion de las imagenes hacia las historias

var menuHistoria1 = document.getElementById("menu-historia1");
menuHistoria1.src = _portadaHistoria["default"];
var menuHistoria2 = document.getElementById("menu-historia2");
menuHistoria2.src = _portadaHistoria2["default"];
var menuHistoria3 = document.getElementById("menu-historia3");
menuHistoria3.src = _portadaHistoria3["default"];
var menuHistoria4 = document.getElementById("menu-historia4");
menuHistoria4.src = _portadaHistoria4["default"];
var menuHistoria5 = document.getElementById("menu-historia5");
menuHistoria5.src = _portadaHistoria5["default"];
var menuHistoria6 = document.getElementById("menu-historia6");
menuHistoria6.src = _portadaHistoria6["default"];
var menuHistoria7 = document.getElementById("menu-historia7");
menuHistoria7.src = _portadaHistoria7["default"];
var imagenCreditos = document.getElementById("imagen-creditos");
imagenCreditos.src = _creditosConcierto["default"]; //definir ubicacion de la historia seleccionada
//boton-link1

function parametroHistoria(no_pagina) {
  sessionStorage.setItem("numeroPaginaHistoria", no_pagina);
}

; //se colocó el parametro de la pagina

document.getElementById("boton-link1").onclick = function () {
  parametroHistoria(0);
};

document.getElementById("boton-link2").onclick = function () {
  parametroHistoria(1);
};

document.getElementById("boton-link3").onclick = function () {
  parametroHistoria(2);
};

document.getElementById("boton-link4").onclick = function () {
  parametroHistoria(3);
};

document.getElementById("boton-link5").onclick = function () {
  parametroHistoria(4);
};

document.getElementById("boton-link6").onclick = function () {
  parametroHistoria(5);
};

document.getElementById("boton-link7").onclick = function () {
  parametroHistoria(6);
};