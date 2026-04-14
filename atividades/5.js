algoritmo "Conceitos com contagem"

var
   i, contD, contAB, contE: inteiro
   nota: real

inicio
   contD <- 0
   contAB <- 0
   contE <- 0

   para i de 1 ate 10 faca
      escreva("Digite a nota: ")
      leia(nota)

      se (nota <= 2.9) entao
         contE <- contE + 1
      senao
         se (nota <= 4.9) entao
            contD <- contD + 1
         senao
            se (nota <= 6.9) entao
            senao
               se (nota <= 8.9) entao
                  contAB <- contAB + 1
               senao
                  contAB <- contAB + 1
               fimse
            fimse
         fimse
      fimse
   fimpara

   escreval("Quantidade D: ", contD)
   escreval("Quantidade A ou B: ", contAB)
   escreval("Percentual E: ", (contE/10)*100, "%")
fimalgoritmo