import {Request, Response} from "express";
import FuncionarioRepository from "../repositories/FuncionarioRepository";

export default class FuncionarioService{

    funRepository = new FuncionarioRepository

    async listarFuncionarios(req:Request, res:Response){
        try {
            const rs = await this.funRepository.Listar();
            return res.status(200).json(rs);
        } 
        catch (erro) {
            return res.status(500).json(erro)
        }
    }

}