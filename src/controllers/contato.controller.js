import { getContatos } from "../models/contato.model.js"

class ContatoController{
    static index(req,res){
        res.json(getContatos())
    }

    //static findOne(req,res)
}

export default ContatoController