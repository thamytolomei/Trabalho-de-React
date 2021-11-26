import React from "react";
import api from "./api";
import { Link } from "react-router-dom";
import Item from "./Item";

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

        <ul>
        {item.map((i) => (
            
            <li key={i.id}><Link to={`produtos/${i.id}`}> Detalhes</Link> 

            <div className="card" style="width: 18rem;">
                <img className="card-img-top" src= {i.foto} alt="Card image cap" />
                <div className="card-body">{i.nome} {i.valor} 

                    <p className="card-text"> {i.descricao} </p>
                </div>
            </div>
            
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
        
        
        </li>))}
     </ul>
    </div>
   )
}

export default Produtos;