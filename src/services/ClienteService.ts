
import Cliente from "../classes/Cliente";
import ClienteRepository from "../repositories/ClienteRepository";
import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";

export default class ClienteServise{
    listarAutor(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
        throw new Error("Method not implemented.");
    }

    cliRepository = new ClienteRepository();
    async cadastroCliente(req:Request, res:Response){
        const cli:Cliente = new Cliente();
        cli.nome = req.body.nome;
        cli.email = req.body.email;
        cli.cpf = req.body.cpf;
        cli.telefone = req.body.telefone;
        cli.aniversario = req.body.aniversario;
        cli.endereco = req.body.endereco;
        try{
            const rs = await this.cliRepository.Cadastrar(cli);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }       
    }

    async listarClientes(req:Request, res:Response){
        try {
            const rs = await this.cliRepository.Listar();
            return res.status(200).json(rs);
        } 
        catch (erro) {
            return res.status(500).json(erro)
        }
    }

}