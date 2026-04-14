let contD = 0;
let contAB = 0;
let contE = 0;

for (let i = 1; i <= 10; i++) {
  let nota = Number(prompt("Digite a nota: "));

  if (nota <= 2.9) {
    contE++;
  } else if (nota <= 4.9) {
    contD++;
  } else if (nota <= 6.9) {
    // C (não conta)
  } else {
    contAB++;
  }
}

console.log("Quantidade D:", contD);
console.log("Quantidade A ou B:", contAB);
console.log("Percentual E:", (contE / 10) * 100 + "%");