import { getContatos } from "../models/contato.model.js"

class ContatoController{
    static index(req,res){
        res.json(getContatos())
    }

    static getOne(req,res){
        const index = req.params.index
    }

    //static findOne(req,res)
}

export default ContatoController