"use strict";

var nota1 = prompt("Escreva a sua primeira nota");
var nota2 = prompt("Escreva a sua segunda nota");
var nota3 = prompt("Escreva a sua terceira nota");

var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

window.alert(media);

if (media < 60) {
  window.alert("Você está reprovado!");
} else {
  window.alert("Você está aprovado!");
}
