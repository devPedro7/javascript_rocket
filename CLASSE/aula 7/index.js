//LIDANDO COM EXCECOES ATRAVÉS DE CLASSES

let obj = [17]
let index = 300

try {
    //obj.execute()

    if(!obj.includes(17)){
        throw new Error("O número 17 não está indisponível")
    }

    if(index > 99){
        throw new RangeError("Número está fora do intervalo")//classe para utilizar em caso de range 
    }

} catch (error) {
    if(error instanceof TypeError){ //capturando a classe de erro para criar um output especifico para ela
        console.log("Método indisponível")
    }else if(error instanceof RangeError){
        console.log(error.message)
    }else{
        console.log("Não foi possível realizar a operação");
    }
}