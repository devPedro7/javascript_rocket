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
const guest = document.querySelector("#guest-1") //a # identifica que quero pegar o conteudo pelo id

console.log(guest);

//UTILIZANDO O QUERY SELECT PELA CLASSE
const guest2 = document.querySelector(".guest-2") //dessa forma ele retorna apenas o primeiro elemento apesar de existir um assim

console.log(guest2);

//PARA ISSO TEMOS QUE USAR O QUERY SELECT ALL (retorna uma lista)
const guestAll = document.querySelectorAll(".guest")

console.log(guestAll);
