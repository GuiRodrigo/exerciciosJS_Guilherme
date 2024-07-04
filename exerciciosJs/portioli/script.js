var nome = prompt("Escreva o nome");
var dia = parseFloat(prompt("Escreva o dia"));
var mes = parseFloat(prompt("Escreva o mês"));

if (nome === "Celso Portiolli" && dia === 11 && mes === 9) {
  window.alert("Celso Portiolli não tem nada a ver com o 11 de Setembro");
} else if (nome === "Guilherme" && dia === 19 && mes === 7) {
  window.alert("Faça a prova com atenção");
} else {
  window.alert("Não é Celso Portiolli nem Guilherme");
}
