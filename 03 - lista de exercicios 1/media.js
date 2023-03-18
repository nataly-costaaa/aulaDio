/* 1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Classificção:
 - Média menor que 5, reprovado;
 - Médeia entre 5 e 7, recuperação;
 - Média acima de 7, passou de semestre; */ 

 let nota1 = 10;
 let nota2 = 9;
 let nota3 = 5.5;
 let media = (nota1 + nota2 + nota3) / 3;

 if (media < 5) {
    console.log('REPROVADO!!!');
 }
 else if (media >= 5 && media <= 7) {
    console.log('Você está em recuperação');
 } else {
    console.log('APROVADOO!!! Passou de semestre');
 }

 console.log('Sua nota foi: ' + media.toFixed(1));