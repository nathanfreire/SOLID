import Commands from "../interfaces/Commands";
import Cliente from "./Cliente";
import Produto from "./Produto";

class Exemplo implements Commands<Produto>{
    Listar(): Produto[] {
        throw new Error("Method not implemented.");
    }
    Apagar(id: number): string {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Produto): Produto {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Produto): Produto {
        throw new Error("Method not implemented.");
    }
   
    
}