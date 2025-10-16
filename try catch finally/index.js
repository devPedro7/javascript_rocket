try {
  console.log(result);
} catch (error) {
  //o erro é uma variavel temporaria onde a linguagem coloca o erro dentro
  //console.log("Não foi possível processar seu pedido: ", error);
} finally {
  //serve para ser executado independente do que aconteceu antes
 // console.log("Fim do bloco");
}
// EXEMPLO: CRIAR UM REGISTRO NO BANCO DE DADOS, QUANDO INICIAMOS NO TRY E ELE DA ERRO OU SUCESSO, NO FINALLY
// IREMOS FECHAR A CONEXÃO COM O BANCO DE DADOS

let resultado = 0;

try {

    if(resultado === 0){
        throw new Error("O valor é igual a zero")
    }else{
        console.log('Sucesso, não é 0');
    }
} catch (error) {
    console.log(error);
} finally {
    console.log("Operação finalizada com sucesso");
}
