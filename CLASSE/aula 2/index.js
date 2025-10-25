class Product{
    constructor(name){
        this.name = name //ESTAMOS NOS REFERINDO NO this À PROPIEDADE name DA CLASSE, E O SEGUNDO name É O PARAMETRO QUE PASSAMOS
    }

}

const product = new Product("Geladeira")
console.log(product.name)

const product2 = new Product("Mouse")
console.log(product2.name)