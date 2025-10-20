/*

OPERADOR DE COALESCÊNCIA NULA (??)

- Operador lógico que retorna o seu operando do lado direito (valor padrão que definimos)
quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna
o seu operando do lado esquerdo.

*/

//Prática
let content = null
console.log(content ?? "Valor padrão"); // AQUI ELE VAI RETORNAR O VALOR PADRÃO

let notNull = "Teste"
console.log(notNull ?? "Valor padrão 2"); // AQUI ELE VAI RETORNAR O VALOR DA VARIAVEL QUE ESTA PREENCHIDA