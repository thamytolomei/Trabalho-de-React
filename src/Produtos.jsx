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
        {produtos.map((p) => (
          <li key={p.id}>{p.title} <Link to={`produtos/${p.id}`}> </Link> 
            <div className="card" style="width: 18rem;">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </li>))}
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