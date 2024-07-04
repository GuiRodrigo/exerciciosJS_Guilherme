peso = 10;
quant = 0;
var maior = 0;
var menor = 99999999;
var all = 0;

while (peso != 1) {
  quant++;
  peso = parseFloat(prompt("digite o peso do gado, ou encerre digitando 0"));
  all = all + peso;

  if (peso > maior) {
    maior = peso;
  }
  if (peso < menor && peso != 0) {
    menor = peso;
  }
}

media = all / (quant - 1);

window.alert("Média dos pesos: " + media);
window.alert("Maior Peso: " + maior);
window.alert("Menor Peso: " + menor);
