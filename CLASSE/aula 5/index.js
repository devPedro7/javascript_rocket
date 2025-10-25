/*
    - HERANÇA: CONCEITO DE UMA CLASSE HERDAR ATRIBUTOS E METODOS DE OUTRA CLASSE (super classe / classe mãe)
    - PARA UMA CLASSE HERDAR ALGO DE OUTRA CLASSE, TEMOS QUE UTILIZAR  APLAVRA RESERVADA: extends (EXTENDER)
*/

class Animal{
    constructor(name){
        this.name = name
    }

    makeNoise(){ //"fazer barulho"
        console.log("Algum som genérico do animal");
    }
}

class Dog extends Animal{
    //nessa classe não tem nada, porem...
    

    //TENTANDO FAZER UMA SOBRESCRITA DO METODO
    makeNoise(){ //peguei um metodo da superclasse e adaptei ela para o cachorro
        console.log("Fazendo o barulho do cachorro: AUAU")
    }
}

const dog = new Dog()
dog.makeNoise()