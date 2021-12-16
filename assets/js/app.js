//* Rutina para obtener, vía web, el ancho del lienzo del CANVAS
// var anchoIn = document.getElementById("ancho");
// var altoIn = document.getElementById("alto");
// var ancho = parseInt(anchoIn.value);
// var alto = parseInt(altoIn.value);
// var boton = document.getElementById("btn");
// boton.addEventListener("click", area);

// function area() {
//   console.log(ancho, alto);
//   var areaCanvas = document.getElementById("Canvas");
//   areaCanvas.setAttribute("width", ancho);
//   areaCanvas.setAttribute("height", alto);
//   console.log(areaCanvas);
// }

// A modo de ejemplo: Como desplegar los atributos de un div.
var t = document.getElementById("box");
console.log(t);

//* Definimos un objeto JSON (JavaScript Object Notation)
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

console.log(teclas);
document.addEventListener("keyup", dibujarTeclado);

var c = document.getElementById("area_de_dibujo");
var papel = c.getContext("2d");

// Inicializamos un par de variables para definir en el lienzo, el punto central desde el cual arranca todo el dibujo posterior.
// var x = 150;
// var y = 150;

// Dibujar el punto con estas coordenadas, es un truco, e indica que la dirección inicial: 149 y la final: 151; son así, porque el grosor de la línea es de 3px (ver lienzo.lineWidth)
// dibujarLinea("red", 149, 149, 151, 151, papel);

//* Modo2.-
var x = 100;
var y = 100;
dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);

//* Función que permite dibujar líneas en un lienzo canvas
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

//* Modo 1: Programando un nido de "if"
// function dibujarTeclado(evento) {
//   if (evento.keyCode == teclas.UP) {
//     console.log("vamos pa' arriba");
//   }
//   if (evento.keyCode == teclas.DOWN) {
//     console.log("vamos pa' abajo");
//   }
//   if (evento.keyCode == teclas.LEFT) {
//     console.log("vamos pa' izquierda");
//   }
//   if (evento.keyCode == teclas.RIGHT) {
//     console.log("vamos pa' derecha");
//   }
// }

//* Modo 2: Utilizando la instrucción "switch"
function dibujarTeclado(evento) {
  var colorcito = "aqua";
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;

    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;

    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;

    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
    default:
      console.log("otra tecla");
  }
}
