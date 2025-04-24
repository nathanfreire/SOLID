// Vriar a classe pai (superclasse) chamada Pessoa
// que passará todos os seus dados às classes filhas 
//
// A classe Pessoa segue o Principio O(Open/Close)
//do SOLID, onde, temos a classe fechada para modificaçõese aberta para extensões.
// O qualificador abstract(abstrato) mantém a classe Pessoa, sempre abstrata,
// não permitindo que ela seja materializada, ou seja não poderá ser uma instância.
//

import Endereco from "./Endereco";
export default abstract class Pessoa{
    id!: number;
    nome!: string;
    cpf!: string;
    email!: string;
    telefone?: string;
    endereco!: Endereco;
    
}
