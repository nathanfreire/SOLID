import Venda from "./Produto";
import Produto from "./Venda";

export default class ItemVendido{
    id!: number;
    venda!: Venda;
    produto!: Produto;
    quantidade!: number;
}