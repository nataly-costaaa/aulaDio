function quadrado(valor) {
    return valor * valor;
}
// chama a função 'quadrado(10)' atribuiu 10 a função 'valor' retorna o resultado no console
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

//--------------------------------------------------

//função é pequeno trecho de codigo q vc consegue invocar pra ser executado varias vezes
function incrementarJuros(valor, percentualJuros) {
    const valorAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorAcrecimo; 
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));


//---------------------------------------------------

//essa declaração de função ira processar o q tem dentro, não executar, só processar. 'main' irá virar uma variavel
function main() {
    console.log('Programa principal');
}

//essa variavel será invocada aqui abaixo
main();

//iremos usar a função 'main' para organizar o codigo ela sera a função principal. Emcima dessa função criaremos outras funções auxiliares e comforme precizar colocar dentro da principal.

//EXEMPLO:

function caucularJuros() {

}

function main() {
    console.log('Programa principal');
    caucularJuros();
}

main();

