const prompt = require('prompt-sync')();
let num = Number(prompt('Digite um número (0 para sair): '));
let maior = num, menor = num;

while (num !== 0) {
  if (num > maior) maior = num;
  if (num < menor) menor = num;
  num = Number(prompt('Digite outro número (ou 0 para sair): '));
}

console.log(`Maior número: ${maior}, Menor número: ${menor}`);

//usei o 'while' porque não sei quantos números o usuário vai digitar
