//COMO OBTER DATA E HORA

//DATA E HORA ATUAL
//console.log(new Date()) //2025-10-22T14:58:40.516Z RETORNA ESTE FORMATO

//console.log(new Date().getTime()) // RETORNA EM MILISEGUNDOS: 1761145170557

//METODOS PARA TRABALHAR COM DATA
let date = new Date("2025-10-07T12:01:00")
console.log(date);

//PEGANDO O DIA DA SEMANA:
console.log(date.getDay()); //ELE CONTA O DIA DA SEMANA DE 0 a 6 (DOMINGO É ZERO)

//PEGANDO O DIA DO MES
console.log(date.getDate())

//PEGANDO O MES
console.log(date.getMonth()+1); //RETORNA DA MESMA FORMA QUE OS DIAS DA SEMANA. TEM QUE COLOCAR O +1 PARA PEGAR CORRETAMENTE


//MODIFICANDO A DATA E A HORA

//MUDAR O ANO
date.setFullYear(2033)
console.log(date);

//MODIFICAR O MES
date.setMonth(7) //VAI PARA AGOSTO
console.log(date)

//MODIFICAR A HORA
date.setHours(8)
console.log(date)

//FORMATANDO DATA E HORA
console.log(date.getDate()) //retorna o 7

// QUEREMOS QUE ELE RETORNE DOIS DIGITOS PARA NAO FICAR SÓ O 7
let dia = date.getDate().toString().padStart(2, "0") //quero que tenha sempre dois digitos, se não tiver, coloque um 0 no inicio: 07

//MES
let mes = (date.getMonth() + 1).toString().padStart(2, "0") //quero que tenha sempre dois digitos, se não tiver, coloque um 0 no inicio: 07


//FORMATANDO NO TEMPLATE QUE EU QUERO:
let ano = date.getFullYear()

console.log(`${dia}/${mes}/${ano}`);

//FORMATAR A DATA E HORA NO LOCALE DA GENTE
console.log(date.toLocaleDateString()) //07/08/2033