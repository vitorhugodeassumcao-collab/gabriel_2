let totalCidades = 0;
let somaVeiculos = 0;
let somaAcidentesMenor2000 = 0;
let contMenor2000 = 0;
let maiorIndice = 0;

for (let codigo = Number(prompt("Código da cidade (0 para sair): "));
     codigo !== 0;
     codigo = Number(prompt("Código da cidade (0 para sair): "))) {

  let veiculos = Number(prompt("Número de veículos: "));
  let acidentes = Number(prompt("Número de acidentes: "));

  totalCidades++;
  somaVeiculos += veiculos;

  let indice = acidentes / veiculos;

  if (indice > maiorIndice) {
    maiorIndice = indice;
  }

  if (veiculos < 2000) {
    somaAcidentesMenor2000 += acidentes;
    contMenor2000++;
  }
}

console.log("Maior índice:", maiorIndice);
console.log("Média de veículos:", somaVeiculos / totalCidades);
console.log("Média de acidentes (<2000 veículos):",
  somaAcidentesMenor2000 / contMenor2000);