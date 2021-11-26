import React from "react";
import api from "./api";
import { Link } from "react-router-dom";
import Item from "./Item";
import ProdutoComponent from "./ProdutoComponent";

function Produtos (){
    const [item, setItem] =  React.useState([]);

    React.useEffect(verifica, []);

    function verifica(){
     const listar = (res) => {
         console.dir(res.data)
        setItem(res.data);
     }

        api.get("/produto").then(listar);
    }

    return (
        <div>
            <h1>Produtos</h1>
           <ul>
                {item.map((i) => (
                    <ProdutoComponent key={i.id} produto= {i} />
             ))}
                </ul>
        </div>
       )
}

export default Produtos;