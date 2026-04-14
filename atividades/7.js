algoritmo "Transito"

var
   codigo, totalCidades: inteiro
   veiculos, acidentes: inteiro
   somaVeiculos, somaAcidentesMenor2000: real
   maiorIndice, indice: real
   contMenor2000: inteiro

inicio
   totalCidades <- 0
   somaVeiculos <- 0
   somaAcidentesMenor2000 <- 0
   contMenor2000 <- 0
   maiorIndice <- 0

   escreva("Codigo da cidade (0 para sair): ")
   leia(codigo)

   enquanto (codigo <> 0) faca
      escreva("Numero de veiculos: ")
      leia(veiculos)
      escreva("Numero de acidentes: ")
      leia(acidentes)

      totalCidades <- totalCidades + 1
      somaVeiculos <- somaVeiculos + veiculos

      indice <- acidentes / veiculos

      se (indice > maiorIndice) entao
         maiorIndice <- indice
      fimse

      se (veiculos < 2000) entao
         somaAcidentesMenor2000 <- somaAcidentesMenor2000 + acidentes
         contMenor2000 <- contMenor2000 + 1
      fimse

      escreva("Codigo da cidade (0 para sair): ")
      leia(codigo)
   fimenquanto

   escreval("Maior indice: ", maiorIndice)
   escreval("Media veiculos: ", somaVeiculos/totalCidades)
   escreval("Media acidentes (<2000 veiculos): ", somaAcidentesMenor2000/contMenor2000)
fimalgoritmo