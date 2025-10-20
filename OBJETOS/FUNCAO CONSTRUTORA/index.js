//FUNCAO CONSTRUTORA: CRIA UM OBJETO E RETORNA O OBJEOT QUANDO INSTANCIADA

//INSTANCIA É UMA NOVA CÓPIA EM MEMÓRIA DAQUELE OBJETO.

//FUNÇÃO PARA CRIAR UM NOVO PRODUTO
function createProduct(name){

    //CRIANDO UM OBJETO PRODUTO
    const product = {}

    //ADICIONANDO UMA PROPIEDADE AO OBJETO INPUTANDO O VALOR QUE FOI PASSADO QUANDO ELE FOI CRIADO
    product.name = name

    product.details = function(){
        console.log(`Nome do produto é: ${this.name}`);
    }

    //RETORNANDO O PROPRIO OBJETO QUANDO FOR CRIADO
    return product
}

//CRIANDO UMA NOVA INSTANCIA: new
const product1 = new createProduct("Monitor")
console.log(product1.name)
product1.details()

const product2 = new createProduct("Mouse")
console.log(product2.name)
product2.details()