peso = 10;
allPessos = [];
quant = 0;
var maior = 0;
var menor = 99999999;
var all = 0;
somaPesos = 0;

while (peso >= 1) {
  quant++;
  peso = parseFloat(prompt("digite o peso do gado, ou encerre digitando 0"));
  allPessos.push(peso);
}

var menor = Math.min.apply(null, allPessos);
var maior = Math.max.apply(null, allPessos);
for (var i = 0; i < allPessos.length; i++) {
  somaPesos += allPessos[i];
}
media = somaPesos / (quant - 1);

window.alert("Média dos pesos: " + media);
window.alert("Maior Peso: " + maior);
window.alert("Menor Peso: " + menor);
