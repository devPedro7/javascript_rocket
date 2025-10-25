//ADICIONANDO METODOS NA CLASSE
//PARA CRIARMOS FURÇÕES NAS CLASSES NÃO PODEMOS UTILIZAR A PALAVRA RESERVADA function POIS ELE RECLAMA PASSAMOS O NOME DA FUNCAO APENAS

class User{
    constructor(name, email){
        this.name = name
        this.email = email
    }
    
    sedEmail(){
        console.log("Email enviado para o:", this.name,". No endereço:", this.email);
    }
}

const user1 = new User("Pedro", "pedro@gmail.com")
user1.sedEmail()