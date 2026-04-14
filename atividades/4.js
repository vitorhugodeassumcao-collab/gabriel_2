algoritmo "Conceitos"

var
   i: inteiro
   nota: real

inicio
   para i de 1 ate 10 faca
      escreva("Digite a nota do aluno: ")
      leia(nota)

      se (nota >= 0 e nota <= 2.9) entao
         escreval("Conceito: E")
      senao
         se (nota <= 4.9) entao
            escreval("Conceito: D")
         senao
            se (nota <= 6.9) entao
               escreval("Conceito: C")
            senao
               se (nota <= 8.9) entao
                  escreval("Conceito: B")
               senao
                  escreval("Conceito: A")
               fimse
            fimse
         fimse
      fimse
   fimpara
fimalgoritmo