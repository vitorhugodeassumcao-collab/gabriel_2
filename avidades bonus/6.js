let menores18 = 0;
let mais80 = 0;
let somaIdade = 0;
let somaAltura = 0;
let total = 0;

for (let idade = Number(prompt("Digite a idade (0 para sair): "));
     idade !== 0;
     idade = Number(prompt("Digite a idade (0 para sair): "))) {

  let peso = Number(prompt("Peso: "));
  let altura = Number(prompt("Altura: "));

  total++;
  somaIdade += idade;
  somaAltura += altura;

  if (idade < 18) {
    menores18++;
  }

  if (peso > 80) {
    mais80++;
  }
}

console.log("Menores de 18:", menores18);
console.log("Média idade:", somaIdade / total);
console.log("Média altura:", somaAltura / total);
console.log("Mais de 80kg:", mais80);