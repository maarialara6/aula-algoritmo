const input = require("readline-sync");

let palavra = input.question("Digite uma palavra: ").toLowerCase();
let vogais = 0;

for (let letra of palavra) {
  if ("aeiou".includes(letra)) vogais++;
}

console.log("Quantidade de vogais:", vogais);
