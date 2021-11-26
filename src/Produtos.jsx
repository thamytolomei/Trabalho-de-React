import React from "react";
import api from "./api";
import { Link } from "react-router-dom";

function Produtos(){
    const [produtos, setProdutos] =  React.useState([]);
    const [quantidade, setQuantidade] = React.useState();

    React.useEffect(consultar, []);

    function consultar(){
     const listar = (res) => setProdutos(res.data);
    api.get("/produtos").then(listar);
  }
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

return (
    <div>
        <h1>Produtos</h1>
        <ul>
          {produtos.map((p) => (
          <li key={p.id}>{p.title}</li>))}
        </ul>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Quantidade</label>
            <input 
                style={{margin:"10px"}}
                type="number"
                nome="quantidade"
                id="quantidade"
                value={quantidade}
                onChange={(event) => setQuantidade(1)}
                placeholder="Quantidade" />
        </form>
        <button type="submit">Enviar</button>
    </div>
)
}

export default Produtos;