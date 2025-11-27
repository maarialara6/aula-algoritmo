let jogadores = [
    {nome: "Lucas", pontos: 150},
    {nome: "Eduarda", pontos: 300},
    {nome: "Ana", pontos: 250},
    {nome: "João", pontos: 50},
    {nome: "Gabriela", pontos: 100},
    {nome: "Bruno", pontos: 200}
];

function ranking(jogadores) {
    return jogadores.sort((a, b) => b.pontos - a.pontos);
}

console.log(ranking(jogadores));
