import {Request, Response} from "express";
import Cliente from "../classes/Cliente";
import ClienteRepository from "../interfaces/repositories/ClienteRepository";

export default class ClienteServise{

    cliRepository = new ClienteRepository();
    async cadastroCliente(req:Request, res:Response){
        const cli:Cliente = new Cliente();
        cli.nome = req.body.nome;
        cli.email = req.body.email;
        cli.cpf = req.body.cpf;
        cli.telefone = req.body.telefone;
        cli.aniversario = req.body.aniversario;
        cli.endereco = req.body.endereco;
        const rs = await this.cliRepository.Cadastrar(cli);
        return rs;
    }
}