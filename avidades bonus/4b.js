for (let i = 1; i <= 10; i++) {
  let nota = Number(prompt("Digite a nota do aluno: "));

  if (nota <= 2.9) {
    console.log("Conceito: E");
  } else if (nota <= 4.9) {
    console.log("Conceito: D");
  } else if (nota <= 6.9) {
    console.log("Conceito: C");
  } else if (nota <= 8.9) {
    console.log("Conceito: B");
  } else {
    console.log("Conceito: A");
  }
}