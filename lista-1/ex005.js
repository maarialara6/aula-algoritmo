import input from 'readline-sync';

let n1 = input.questionInt("Digite o primeiro numero: ")
let n2 = input.questionInt("Digite o segundo numero: ")

let resp = (n1 - n2) + 10;

console.log("Resposta = ", resp)
