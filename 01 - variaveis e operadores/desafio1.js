/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:  
1 - Preço do combustivel;
2 - Gasto médio do combustivel do carro por KM*; 
3 - Distância em KM da viagem;

*/
const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));