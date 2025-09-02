import input from 'readline-sync'

let N1=input.questionInt(" Digite o primeiro numero ");
let N2=input.questionInt(" Digite o segundo numero ");

N1 = (N1-2);
N2 = (N2+2);

console.log("Resposta 1 =", N1);
console.log("Resposta 2 =", N2);
