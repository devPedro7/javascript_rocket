//FUNCAO ANONIMA: FUNCAO QUE NÃO POSSUI UM NOME (NORMALMENTE PRECISA SER UMA VARIAVEL)
//ex: 
    let mostrarMensagem = function () {
        return 'Função anonima'
    }

    let funcaoAnonimaComParametro = function(nome){
        return(`Função anonima: Olá, ${nome}`)
    }

    //chamando ela: 
    console.log(mostrarMensagem()) //desta forma conseguimos ver o que tem dentro dela vê-la como função
    console.log(funcaoAnonimaComParametro("Pedro")) //aqui estamos chamando o seu conteúdo


//---------------------------------------------------------------------------------------------------------

//Arrow function (função de seta)
//ex:
const mostrarMensagem2 = ()=>{
    return('Arrow function')
}

const arrowFunctionComParametro = (nome)=>{
    return(`Arrow Function: Olá, ${nome}`)
}

//chamando ela: 
console.log(mostrarMensagem2) //desta forma conseguimos ver o que tem dentro dela vê-la como função
console.log(mostrarMensagem2()) //aqui estamos chamando o seu conteúdo
console.log(arrowFunctionComParametro("Pedro")) //aqui estamos chamando o seu conteúdo