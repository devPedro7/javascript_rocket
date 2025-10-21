/*
    PODEMOS CRIAR UM ARRAY DE DUAS FORMAS: 

    1º COM CONSTRUTOR: const array = new Array(10) PASSANDO POSIÇÕES OU VAZIO
    2º PASSANDO OS VALORES INTERNAMENTE: let nomes = ["Pedro", "Lucas"]
    */

//CRIANDO UM ARRAY COM UM CONSTRUTOR
const newArray = new Array(10) //criando um array com 10 posições vazias 
//console.log(newArray.length);

//CRIANDO E ACESSANDO UM ARRAY
let fruits = ["Maçã", "Banana", "Uva"]
console.log(fruits)

//VERIFICANDO O VALOR PELO INDICE
console.log(fruits[0]) //retorna MAÇÃ

//CONVERTENDO UMA STRING PARA UM ARRAY
let nomeCompleto = "Pedro Lucas de Sousa Ribeiro"

//CRIA UM ARRAY COM OS NOMES SEPARADO POR ESPAÇO
console.log(nomeCompleto.split(" "));

//CRIA UM ARRAY COM AS LETRAS
console.log(Array.from(nomeCompleto));



//ADICIONANDO E REMOVENDO UM ARRAY
let users = []

//ADICIONA UM ELEMENTO NO FIM DO ARRAY
users.push("Pedro", "Lucas", "Ribeiro") //PODE SER ASSIM DE UMA VEZ, OU SEPARADAMENTE 
console.log(users);

//ADICIONANDO UM ELEMENTO NO INICIO DO ARRAY
users.unshift("Ricardo", "Vinicius")
console.log(users);


//REMOVENDO O PRIMEIRO ITEM DA LISTA
users.shift()
console.log(users);

//REMOVENDO O ULTIMO ITEM DA LISTA
users.pop()
console.log(users)


//SABER O INDICE DO ARRAY PELO ELEMENTO - QUANDO ELE NÃO ENCONTRA, ELE RETORNA -1
console.log(fruits.indexOf("Uva"));


//ATIVIDADE - EXCLUIR UM ELEMENTO NO ARRAY, SE ELE NÃO TIVER RETORNAR UMA MENSAGEM DE ERRO AO USER
let fruta = "Goiaba"

//RETORNANDO O VALOR DO INDICE PASSADO PELO USUARIO DENTRO DA LISTA
let index = fruits.indexOf(fruta)

//REALIZANDO A OPERAÇÃO
if(index > -1){
    fruits.splice(index, 1)
    console.log("Fruta removida com sucesso!");
    console.log(fruits)
}else{
    console.log("Não possui essa fruta solicitada:", fruta);
}


//VERIFICAR SE UM CONTEUDO EXISTE NO ARRAY: RETORNA false SE NÃO TIVER. RETORNA true SE TIVER
console.log(fruits.includes("Goiaba"))
