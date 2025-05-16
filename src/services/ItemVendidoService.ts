import {Request, Response} from "express";
import ItemVendidoRepository from "../repositories/ItemVendidoRepository";
import ItemVendido from "../classes/ItemVendido";

export default class ItemVendidoService{


    itnRepository = new ItemVendidoRepository();
    async cadastroItemVendido(req:Request, res:Response){
        const itn:ItemVendido = new ItemVendido();
        itn.venda = req.body.id_venda;
        itn.produto = req.body.id_produto;
        itn.quantidade = req.body.quantidade;
        try{
            const rs = await this.itnRepository.Cadastrar(itn);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }       
    }

    async listarItemVendidos(req:Request, res:Response){
        try {
            const rs = await this.itnRepository.Listar();
            return res.status(200).json(rs);
        } 
        catch (erro) {
            return res.status(500).json(erro)
        }
    }

}