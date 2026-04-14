algoritmo "Fatorial"

var
   n, i, fatorial: inteiro

inicio
   escreva("Digite um numero: ")
   leia(n)

   fatorial <- 1

   para i de 1 ate n faca
      fatorial <- fatorial * i
   fimpara

   escreval("Fatorial = ", fatorial)
fimalgoritmo