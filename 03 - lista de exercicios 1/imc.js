/* 2) O IMC - Indice de Massa Corporal é um critério de Organização Mundial de Saúde para dar uma indicação sobre e condição de peso de uma pessoa adulta.

Formula do IMC:
IMC - peso / (altura * altura) 

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
 - Abaixo de 18.5 Abaixo do peso;
 - Entre 18.5 e 25 Peso normal;
 - Entre 25 e 30 acima do peso;
 - Entre 30 e 40 Obeso;
 - Acima de 40 Obesidade Grave; */

let altura = 1.61;
let peso = 63;
let imc = peso / Math.pow(altura,2);
//Math.pow: biblioteca de utilitarios de fuções matematicas
// potencia ao quadrado da altura


if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}

console.log('Seu IMC é: ' + imc.toFixed(1));
