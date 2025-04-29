export default interface Commands <T>{
    Cadastrar(obj:T):T;
    Listar():T[];
    Apagar(id:number):string;
    Atualizar(obj:T):T;
    PesquisarId(id:string):T;
}