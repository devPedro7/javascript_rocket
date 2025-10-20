/*
    OBJETO
        - Uma coleção de dados e/ou funcionalidades;
        - Podem ter propiedades e métodos;
        - NO OBJETO ATRIBUIMOS COM 2 PONTOS, PODE SER CHAMADO DE CHAVE A PROPIEDADE;
        - PROPIEDADE COMPOSTA, É UMA PROPIEDADE QUE TEM OUTRAS PROPIEDADES DENTRO DELA;
        - NOS OBJETOS UTILIZAMOS SNAKE_CASE
*/

//CRIANDO UM OBJETO VAZIO
const objeto = {} 

//CRIANDO OBJETOS COM PROPIEDADES E MÉTODOS
const user = {
    email: "pedro@gmail.com", //
    age: 24,
    name: { //
        firstname: "Pedro",
        surname: "Ribeiro",
    },

    adress: {
        street: "Rua X",
        number: 380,
        city: "Fortaleza"
    },

    //CRIANDO UMA FUNCAO DENTRO DO OBJETO
    message: function(){
        console.log(`Oi, ${this.name.firstname} ${user.name.surname}`);
    },

    message_with_this: function(){
        console.log(`Oi, ${this.name.firstname} ${user.name.surname}. Este é um teste com o this sem Arrow Function`);
    }

}

//ACESSANDO O OBJETO
console.log(user.adress.city);
user.message()


//Acessando propiedades dentro do contexto do objeto: UTILIZAMOS O this POIS ELE REFERENCIA O OBJETO (SÓ NÃO FUNCIONA COM ARROW FUNCTION)
user.message_with_this()


//ATUALIZANDO UM OBJETO
const product = {
    name: "Teclado",
    quantity: 100
}

//ACESSANDO O OBJETO
console.log(`Antes da alteracao: ${product.name}`); //antes da alteracao

//ALTERANDO VALOR DO OBJETO
product.name = "Monitor"
console.log(`Depois da alteração: ${product.name}`); //depois da alteracao