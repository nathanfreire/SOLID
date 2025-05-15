import  express  from "express";
import cors from "cors";
import ClienteServise from "./services/ClienteService";
import AutorService from "./services/AutorService";
import FuncionarioService from "./services/FuncionarioService";
import ProdutoService from "./services/ProdutoService";
import VendaService from "./services/VendaService";

const app = express();
app.use(express.json());
app.use(cors());

const cli = new ClienteServise();
const aut = new AutorService();
const fun = new FuncionarioService();
const prod = new ProdutoService();
const ven = new VendaService();

// ##################### cliente #################
app.get("/api/v1/cliente/listar",(req,res)=>{
    cli.listarClientes(req,res);
})

app.post("/api/v1/cliente/cadastro",(req,res)=>{
    cli.cadastroCliente(req,res);
})


// ##################### autor #################

app.get("/api/v1/autor/listar",(req,res)=>{
    aut.listarAutores(req,res);
})

app.post("/api/v1/autor/cadastro",(req,res)=>{
    aut.cadastroAutor(req,res);
})

// ##################### funcionario #################


app.get("/api/v1/funcionario/listar",(req,res)=>{
    fun.listarFuncionarios(req,res);
})

app.post("/api/v1/funcionario/cadastro",(req,res)=>{
   fun.cadastroFuncionario(req,res);
})

// ##################### produto #################


app.get("/api/v1/produto/listar",(req,res)=>{
    prod.listarProdutos(req,res);
})

app.post("/api/v1/produto/cadastro",(req,res)=>{
   prod.cadastroProduto(req,res);
})

// ##################### venda #################

app.get("/api/v1/venda/listar",(req,res)=>{
    ven.listarVendas(req,res);
})

app.post("/api/v1/venda/cadastro",(req,res)=>{
   ven.cadastroVenda(req,res);
})

// ######################################
app.listen(5000,()=>{
    console.log(`Online em: http://127.0.0.1:5000`)
})

