import {Request, Response} from "express";
import AutorRepository from "../repositories/AutorRepository";

export default class AutorService{

    autRepository = new AutorRepository()

    async listarAutor(req:Request, res:Response){
        try {
            const rs = await this.autRepository.Listar();
            return res.status(200).json(rs);
        } 
        catch (erro) {
            return res.status(500).json(erro)
        }
    }

}