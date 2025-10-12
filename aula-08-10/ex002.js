const prompt = require('prompt-sync')();
let n = Number(prompt('Digite o número final: '));

for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i + ' é par');
  } else {
    console.log(i + ' é ímpar');
  }
}

//usando o 'for' pois o usuário define o limite final, mas o número de repetições é determinado
