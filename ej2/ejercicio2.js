const fecha = new Date();
const dia = fecha.getDate().toString().padStart(2, '0');
const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
const anio = fecha.getFullYear();
const hora = fecha.getHours().toString().padStart(2, '0');
const minutos = fecha.getMinutes().toString().padStart(2, '0');
const segundos = fecha.getSeconds().toString().padStart(2, '0');

const fechaActual = `${dia}/${mes}/${anio}`;

const horaActual = `${hora}:${minutos}:${segundos}`;

document.getElementById("fecha").innerHTML = fechaActual;
document.getElementById("hora").innerHTML = horaActual;
document.getElementById("fecha").style.color = "blue";
document.getElementById("hora").style.color = "red";
document.getElementById("fecha").style.fontSize = "20px";
document.getElementById("hora").style.fontSize = "20px";
document.getElementById("fecha").style.fontFamily = "Arial, sans-serif";
document.getElementById("hora").style.fontFamily = "Arial, sans-serif";
document.getElementById("fecha").style.fontWeight = "bold";
document.getElementById("hora").style.fontWeight = "bold";
