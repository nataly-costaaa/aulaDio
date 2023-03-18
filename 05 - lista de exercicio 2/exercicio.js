// function escrevaMeuNome(nome) {
//     return ('Meu nome é: Nataly');
// }

function escrevaMeuNome(nome) {
     return nome;
}

const nataly = escrevaMeuNome('Nataly');
console.log(nataly);
 
function escrevaMeuSobreNome(sobreNome) {
    console.log('Costa');
}

escrevaMeuSobreNome();

function escrevaMeuSobrenome(sobrenome) {
    console.log('Meu sobrenome é: ' + sobrenome);
}

escrevaMeuSobrenome('Santos');
escrevaMeuSobrenome('Oliveira');

//------------------------------------------------------

// function verificarMaiorIdade(idade) {
//     if (idade >= 18) {
//         return ('Você é maior de idade');
//     } else {
//         return ('Você é menor de idade');
//     }
// }

// function main() {
//     const idade = 19;
//     console.log(verificarMaiorIdade(idade));
// }

// main();



function verificarMaiorIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Nataly ') + 'você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
}

verificarMaiorIdade(19);