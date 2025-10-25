/*
- PARA CRIAR UMA CLASSE UTILIZAMOS A PALAVRA RESERVADA: class 
- A primeira letra é sempre maiúscula (PASCAL CASE)

*/
class Person {

    constructor(name){ //toda vez que criamos a classe esse metodo é instanciado
        console.log("Olá: ",name)
    }

}

const person = new Person("Pedro")
