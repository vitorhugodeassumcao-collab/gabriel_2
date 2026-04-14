algoritmo "Jogadores"

var
   idade, total, menores18, mais80: inteiro
   peso, altura, somaIdade, somaAltura: real

inicio
   total <- 0
   menores18 <- 0
   mais80 <- 0
   somaIdade <- 0
   somaAltura <- 0

   escreva("Digite a idade (0 para sair): ")
   leia(idade)

   enquanto (idade <> 0) faca
      escreva("Peso: ")
      leia(peso)
      escreva("Altura: ")
      leia(altura)

      total <- total + 1
      somaIdade <- somaIdade + idade
      somaAltura <- somaAltura + altura

      se (idade < 18) entao
         menores18 <- menores18 + 1
      fimse

      se (peso > 80) entao
         mais80 <- mais80 + 1
      fimse

      escreva("Digite a idade (0 para sair): ")
      leia(idade)
   fimenquanto

   escreval("Menores de 18: ", menores18)
   escreval("Media idade: ", somaIdade/total)
   escreval("Media altura: ", somaAltura/total)
   escreval("Mais de 80kg: ", mais80)
fimalgoritmo