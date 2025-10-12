const prompt = require('prompt-sync')();
const senhaCorreta = '1234';
let senha = prompt('Digite a senha: ');

while (senha !== senhaCorreta) {
  console.log('Senha incorreta!');
  senha = prompt('Tente novamente: ');
}

console.log('Acesso permitido!');

//usei o 'while' porque será repetido até acertar a senha
