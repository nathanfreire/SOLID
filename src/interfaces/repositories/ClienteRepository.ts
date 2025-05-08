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
            //Antes de cadastrar um cliente temos de cadastrar o endereço deste cliente e então obtemos o id 
            //do endereço cadastrado e alocamos em uma variavel para depois inserir na tabela clientes, no campo id_endereco
            conexao.query("INSERT INTO  endereco (tipo_logradouro,logradouro,numero,complemento,cep,bairro) Values (?,?,?,?,?,?)", [obj.endereco.tipo_logradouro,
                obj.endereco.logradouro,
                obj.endereco.numero,
                obj.endereco.complemento,
                obj.endereco.cep,
                obj.endereco.bairro],
                (erro,end)=>{
                                      
                }

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
