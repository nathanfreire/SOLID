import Cliente from "../../classes/Cliente";
import { conexao } from "../../database/config";
import CommandsPessoa from "../CommandsPessoa";
import { resolve } from "path";

export default class ClienteRepository implements CommandsPessoa<Cliente> {
    PesquisarCPF(cpf: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Cliente): Promise<Cliente> {

        return new Promise((resolve, reject) => {
            conexao.query("INSERT INTO  cliente SET ?", obj, (error, result) => {
                if (error) {
                    return reject(error);
                }
                else {
                    return resolve(obj)
                }
            })

        })


    }
    Listar(): Promise<Cliente[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from cliente",(erro, result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as Cliente[])
                }
            })
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Cliente): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }

}
