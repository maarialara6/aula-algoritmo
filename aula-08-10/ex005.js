const prompt = require('prompt-sync')();
let n = Number(prompt('Digite um número: '));

for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}

//usando o 'for' porque a tabuada tem um limite conhecido
