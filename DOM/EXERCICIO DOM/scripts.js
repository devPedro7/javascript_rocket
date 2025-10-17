//VISUALIZANDO O CONTEUDO DO DOCUMENT
/*console.log(document) // ele mostra a estrutura do nosso HTML

//OBTER O TITLE DA PÁGINA
console.log(document.title)

//ACESSAR UM ELEMENTO PELO id
const guest = document.getElementById("guest-2")
console.log(guest);

//VERIFICANDO TODAS AS PROPIEDADDES DO ELEMENTO
console.dir(guest) */

//PEGANDO OS ELEMENTOS PELO QUERY SELECTOR
/*const guest = document.querySelector("#guest-1") //a # identifica que quero pegar o conteudo pelo id

console.log(guest);

//UTILIZANDO O QUERY SELECT PELA CLASSE
const guest2 = document.querySelector(".guest-2") //dessa forma ele retorna apenas o primeiro elemento apesar de existir um assim

console.log(guest2);

//PARA ISSO TEMOS QUE USAR O QUERY SELECT ALL (retorna uma lista)
const guestAll = document.querySelectorAll(".guest")

console.log(guestAll);*/

//-----------------------------------------
//MANIPULANDO OS ELEMENTOS
//selecionando o primeiro elemento da lista
/*const guest = document.querySelector("#guest-1 span")

//PEGAR O CONTEUDO DO TEXTO
console.log(guest.textContent);
guest.textContent = "Pedro" //modifica o valor mas apaga a tag dele só coloca um texto

console.log(guest.textContent); 
console.log()
*/

/*
//---------------------------------------------------
//ADICIONANDO ESTILO PELO JS 
const input = document.querySelector("#name")

//adicionando
input.classList.add("input-error") //adicionando uma classe css

//removendo a classe
input.classList.remove("input-error")

const button = document.querySelector("button")
//MUDANDO A COR DO BOTÃO PELO JS
button.style.background = "red"
*/

//Adicionando elementos no JS
const guests = document.querySelector("ul")

//CRIANDO UM ELEMENTO HTML
const newGuest = document.createElement("li")
newGuest.classList.add("guest")
const guestName = document.createElement("span")
guestName.textContent = "Pedro Lucas"

newGuest.append(guestName) //o append adiciona um novo conteudo em outro depois do ultimo filho que ja tem nele

guests.append(newGuest) //aqui ele adiciona na lista do html, mas ele vai sem as classes dos elementos 


//--------------------------------------------------------------------
//MANIPULANDO ATRIBUTOS
const input = document.querySelector("input")

//desabilitando o input text
input.setAttribute("disabled", true) //nome do atributo, valor do atributo

//MUDANDO O TIPO DO INPUT
//input.setAttribute("type", "file")

//removendo um atributo
input.removeAttribute("disabled")

//--------------------------------------------------------------------
//EVENTOS
window.addEventListener("load", ()=>{
    console.log("A página foi carregada") //TIPO DE EVENTO, Ação(fucao)
})//ESSE METODO OBSERVA O EVENTO QUE ACONTECE NA JANELA

//o EVENTLISTENER solto refere-se ao elemento DOM

//--------------------------------------------------------------------
//EVENTOS EM UM ELEMENTO ESPECIFICO
const ul = document.querySelector("ul")

//monitorando os eventos nesse elemento
ul.addEventListener("scroll", (event)=>{
    console.log(ul.scrollTop) //ver a distancia do topo;

    if(ul.scrollTop >= 230){
        console.log("Fim da lista");

        ul.scrollTo({ //levando o usuario de volta para o topo
            top: 0,
            behavior: "smooth",
        })
    }
})

