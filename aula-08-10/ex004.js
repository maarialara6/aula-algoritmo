const prompt = require('prompt-sync')();
let n = Number(prompt('Digite um número: '));

while (n >= 0) {
  console.log(n);
  n--; 
}


//usando 'while' pois o número inicial vem do usuário e queremos ir até 0.
