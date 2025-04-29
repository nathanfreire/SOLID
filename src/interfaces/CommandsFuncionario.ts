import CommandsPessoa from "./CommandsPessoa";

export default interface CommandsFuncionario<T> extends CommandsPessoa<T>{
    PesquisarCargo(cargo:string):Promise<T[]>
    PesquisarSalario(salario:number):Promise<T[]>

}
