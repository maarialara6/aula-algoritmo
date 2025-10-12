const prompt = require('prompt-sync')();
let alunos = Number(prompt('Quantos alunos? '));

for (let a = 1; a <= alunos; a++) {
  let soma = 0;
  for (let n = 1; n <= 3; n++) {
    soma += Number(prompt(`Digite a ${n}ª nota do aluno ${a}: `));
  }
  let media = soma / 3;
  console.log(`Média do aluno ${a}: ${media.toFixed(2)} - ${media >= 7 ? 'Aprovado' : 'Reprovado'}`);
}

//usando o 'for' para quantidade fixa de alunos e notas
