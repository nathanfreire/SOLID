import { ifError } from "assert";
import Cliente from "../../classes/Cliente";
import { conexao } from "../../database/config";
import CommandsPessoa from "../CommandsPessoa";

export default class ClienteRepository implements CommandsPessoa<Cliente>{
    PesquisarCPF(cpf: string): Cliente {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Cliente {
        throw new Error("Method not implemented.");
    }

    

    Cadastrar(obj: Cliente): Cliente {
    
        conexao.query("INSERT INTO cliente SET ?",obj,(erro,result)=>{
            if(erro) return erro;
            else{
                return result;
            }
        })



    }
    Listar(): Cliente[] {
        throw new Error("Method not implemented.");
    }
    Apagar(id: number): string {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Cliente): Cliente {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: string): Cliente {
        throw new Error("Method not implemented.");
    }
    
}
