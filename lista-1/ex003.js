import input from 'readline-sync'

let n1=input.questionInt(" Digite o primeiro numero: ");
let n2=input.questionInt(" Digite o segundo numero: ");

n1 = (n1-2);
n2 = (n2+2);

console.log("Resposta 1 =", n1);
console.log("Resposta 2 =", n2);
