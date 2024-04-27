export class Contato{
    constructor(nome, email, telefone){
        this.nome = nome
        this.email = email
        this.telefone = telefone
    }
}

export const getContatos = () => {
    return dbContatos
}

export const dbContatos = [
    new Contato("Teste","email@email",1234456)
]