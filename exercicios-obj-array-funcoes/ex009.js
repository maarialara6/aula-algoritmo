const prompt = require("prompt-sync")();

let conta = {
  agencia: "1234",
  numero: "56789-7",
  senha: "1510",
  saldo: 3500,
  historico: []
};

function validarAcesso(agencia, numero, senha) {
  return (
    conta.agencia === agencia &&
    conta.numero === numero &&
    conta.senha === senha
  );
}

function exibirSaldo() {
  return conta.saldo;
}

function realizarSaque(valor) {
  if (valor > conta.saldo) {
    return "Saldo insuficiente";
  }

  let notas = [100, 50, 20, 10];
  let entrega = {};
  let restante = valor;

  for (let i = 0; i < notas.length; i++) {
    let qtd = Math.floor(restante / notas[i]);
    if (qtd > 0) {
      entrega[notas[i]] = qtd;
      restante -= notas[i] * qtd;
    }
  }

  if (restante > 0) {
    return "Não é possível sacar este valor com as cédulas disponíveis";
  }

  conta.saldo -= valor;
  conta.historico.push(`Saque: R$${valor}`);

  return entrega;
}

console.log("=========== CAIXA ELETRÔNICO ===========");

let agencia = prompt("Digite sua agência: ");
let numero = prompt("Digite o número da conta: ");
let senha = prompt("Digite sua senha: ");

if (!validarAcesso(agencia, numero, senha)) {
  console.log("Acesso negado! Dados incorretos.");
  process.exit();
}

console.log("Login realizado com sucesso!");

while (true) {
  console.log(`
-----------------------------------
1 - Ver saldo
2 - Sacar dinheiro
3 - Ver histórico
4 - Sair
-----------------------------------
`);

  let opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      console.log(`Seu saldo atual é: R$${exibirSaldo()}`);
      break;

    case "2":
      let valor = Number(prompt("Valor para sacar: R$"));
      let resultado = realizarSaque(valor);

      if (typeof resultado === "string") {
        console.log(" ❌ " + resultado);
      } else {
        console.log(" Saque realizado com sucesso!");
        console.log("Notas entregues:");
        console.log(resultado);
      }
      break;

    case "3":
      console.log(" Histórico:");
      console.log(conta.historico.length > 0 ? conta.historico : "Nenhuma operação ainda.");
      break;

    case "4":
      console.log("Obrigado por usar o caixa eletrônico!");
      process.exit();

    default:
      console.log(" Opção inválida!");
  }
}
