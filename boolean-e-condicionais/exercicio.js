// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 23;
var idadeParente = 30;

if(minhaIdade > idadeParente) {
  console.log("É maior");
} else if(minhaIdade < idadeParente) {
  console.log("É menor");
} else {
  console.log("É igual");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //truthy
var idade = 28; //truthy
var possuiDoutorado = false; //falsy
var empregoFuturo; //falsy
var dinheiroNaConta = 0; //falsy
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if(china > brasil) {
  console.log("China tem " + (china - brasil) + " milhões de habitantes a mais que o Brasil.");
} else {
  console.log("Brasil tem " + (brasil - china) + " milhões de habitantes a mais que a China.");
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); //falso
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); //Cão
} else {
  console.log('Falso');
}