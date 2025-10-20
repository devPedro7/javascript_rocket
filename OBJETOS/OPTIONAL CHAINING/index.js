/*

OPTIONAL CHAINING - ENCADEAMENTO OPICIONAL

- SE A PROPIEDADE OU FUNÇÃO CHAMADA É nullish (null ou undefined), a expressão (quando não existe a gatantia de que ela existe)
retorna undefined em vez de gerar um erro

- Útil ao explorar o conteúdo de um objeto quando não existe garantia
da existência de determinada propiedades obrigatórias

- Como utilizamos: Inserindo uma " ? " entre os objetos. É mesmo que dizer que "Javascript eu não sei se tá disponível, mas veja aí"

- Pode ser utilizado em funções também

*/

const user = {
  id: 1,
  name: "Pedro",
 /* address: {
    street: "Misericórdia",
    number: 180,
    city: "Fortaleza",
  },*/

  message: function () {
    console.log(`Olá, ${this.name}!`);
  },
};

//SIMULANDO O OPTIONAL CHAINING
console.log(user?.address?.street) //AQUI ELE VAI DAR undefined POR CONTA DO OPTIONAL CHANING
