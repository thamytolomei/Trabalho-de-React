import React from "react";
import api from "./api";
import { Link } from "react-router-dom";


function Produtos(){
    const [item, setItem] =  React.useState([]);
    const [quantidade, setQuantidade] = React.useState([]);

    React.useEffect(verifica, []);

    function verifica(){
     const listar = (res) => setItem(res.data);
        api.get("/produto").then(listar);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

return (
    <div>
        <h1>Produtos</h1>
        {item.map((i) => (
          <li key={i.id}>{i.nome} <Link to={`produtos/${i.id}`}> </Link> 
            <div className="card" style="width: 18rem;">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </li>))}
        <form onSubmit={handleSubmit}>
            <label style={{margin:"10px"}} htmlFor="">Qntd</label>
            <input 
                style={{width:"4rem", margin:"10px"}}
                type="number"
                nome="quantidade"
                id="quantidade"
                value={quantidade}
                onChange={(event) => setQuantidade(1)}
                placeholder="0" />
        </form>
        <button type="submit">Enviar</button>
    </div>
   )
}

export default Produtos;