const { join } = require("@prisma/client/runtime/library");

const message = "Essa é uma mensagem"

//TRANSFORMANDO TEXTO EM MAIUSCULO E MINUSCULO
console.log(message.toUpperCase());
console.log(message.toLocaleLowerCase());

//OBTENDO O TAMANHO DE UMA STRING
console.log(message.length)

//SUBSTITUINDO E FATIANDO UMA STRING

//SUBSTITUINDO
console.log(message.replace("mensagem", "String"));

//EXTRAINDO a contagem começa do 1 
console.log(message.slice(0, 1)) // retorna: ESSA
console.log(message.slice(11, 19)) // retorna: ESSA


//REMOVENDO ESPAÇOS
const letrasComEspaco = "    espaaaco"
console.log(letrasComEspaco);
console.log(letrasComEspaco.trim());

//MASCARANDO VALORES
const numerosCartao = "1234567812344928"
const lasNumbers = numerosCartao.slice(-4)
console.log() //vai pegar os ultimos valores 4298

//PREENCHE A STRING A PARTIR DO INICIO: PARAMETROS: 1º tamanho, 2ºo valor que queremos preencher no lugar
const maskedNumber = lasNumbers.padStart(numerosCartao.length, "X")
console.log(maskedNumber); //XXXXXXXXX4928


//QUEBRANDO TEXTOS - split
let text = "Estudar, Aprender, Praticar"
let separate = text.split(",") //EM TODOS OS LUGARES QUE TIVER VIRGULA ELE VAI CORTAR O TEXTO E TRANSFORMA EM ARRAY
console.log(separate)
console.log(message.split(" "))

//JUNTANDO PALAVRAS - join (UNE PALAVRAS COM CARCTERES QUE PASSAMOS. SE NÃO PASSAR NADA ELE COLOCA A VIRGULA COMO PADRAO)
let joined = separate.join(" / ")
console.log(joined)


