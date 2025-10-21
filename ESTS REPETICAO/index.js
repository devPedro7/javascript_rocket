/*
    O for in, SERVE PARA UTILIZAMOS EM OBJETOS E ARRAYS. 
    É UMA FORMA MAIS ENXUTA DE EXECUTARMOS A LEITURA DOS DADOS DESSAS ESTRUTURAS
    ELE RETORNA O INDICE

*/

const user = {
    name: "Pedro",
    surname: "Lucas",
    age: 24,

}

let vez = 0

for(let propiedade in user){
    //IMPRIMINDO A PROPIEDADE
    console.log(propiedade);

    //IMPRIMINDO O VALOR DA PROPIEDADE
    console.log(user[propiedade]);

    console.log(vez++);
}

let frutas = ["Maçã", "Uva", "Pêra"]

for(let acessador in frutas){
    console.log(frutas[acessador]);
}

/*
    O for of, RETORNA O VALOR DO OBJETO ITERAVEL, DIFERENTE DO in QUE RETORNA O INDICE
    - NÃO PODEMOS UTILIZAR EM OBJETOS
    - UTILIZAMOS EM LISTA
    - MAS PODEMOS UTILIZAR EM UMA LISTA DE OBJETOS
*/

let cores = ["preto", "vermelho", "verde"]

for(let cor of cores){
    console.log(cor)
}

let pessoa = { //da erro, mas se eu transformar em um array de objetos ele passa
    nome: "Pedro",
    idade: 24
}

for(p of pessoa){
    console.log(p)
}