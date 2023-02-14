document.getElementById("termoterereverde");
document.getElementById("precioproducto");
document.getElementById("cantidad");

let nuevoElemento = document.createElement("p");
nuevoElemento.innerHTML = "";

/**/
//estas lineas de codigo crean un elemento "hijo" y lo adhieren a un "padre"
//que en este caso es el parrafo vacio de mas arriba
let padre = document.getElementById("parrafo");

let hijo = crearParrafo("Soy el elemento hijo del parrafo");

padre.appendChild(hijo);

console.log(document.body.children.length);

function retornarElemento(elem) {
  //retorna un elemento cuya id pasamor por parametro
  return document.getElementById(elem);
}

function crearParrafo(texto) {
  //esta funcion crea un elemento html tipo <p> que contiene
  //el texto que le pasamos por parametro
  let parrafoNuevo = document.createElement("p");
  parrafoNuevo.innerHTML = texto;
  return parrafoNuevo;
}

function agregarElemento() {
  document.body.appendChild(crearParrafo("Elemento agregado"));
}

function guardarComentario() {
  //retorna un texto guardado en el input "comentarios"
  let coment = document.getElementById("comentarios").value;
  return coment;
}

function postearComentario() {
  //agrega al documento un parrafo de texto guardado
  //de un comentario (ver funcion anterior)
  let aPostear = crearParrafo(guardarComentario());
  document.body.appendChild(aPostear);
}

/*agregar menu*/

function comprarprod1() {
  let nombre1 = document.getElementById("nombre1").innerHTML;
  let precio1 = parseInt(document.getElementById("precio1")).innerHTML;
  let cant1 = parseInt(document.getElementById("cant1")).value;
  let confirmado = confirm(
    "Quieres comprar " + cant1 + " " + nombre1 + " por " + precio1
  );
  if (confirmado) {
    let pedidoconfirmado = document.createElement("p");
    pedidoconfirmado.innerHTML =
      "tu pedido de " + cant1 + " " + nombre1 + " costara " + precio1 * cant1;
    let pedidoAgre = document.getElementById("nuevopedido");
    pedidoAgre.appendChild(pedidoconfirmado);
  }
}
