import React from "react";
import { Link } from "react-router-dom";

export default(props) =>{
    const {item, eventoModificar} = props;

    const handler = (event) =>{

    }

    return(
        <div className="item">
            <h3>{item.nome}</h3>
            <img src="" alt="" />
            <p>{item.descricao}</p>
            <p>{item.vl_unitario}</p>
            <Link to={`/produtos/${item.id}`}><button onClick={handler}>Especificações</button></Link>
        </div>
    )
}