import React from "react";
import api from "./api";
import { useParams } from "react-router-dom";

function ProdutoDetalhe(props){
    const { id } = useParams();
    const [produto, setProduto] = React.useState({});
    const listar = (resposta) =>{
        console.dir(resposta)
        setProduto(resposta.data);
    } 

    React.useEffect(consultar, []);
    
    function consultar(){
        api.get(`/produto/${id}`).then(listar);
    }
     return(
         <>
         {produto &&
        <div>
            <h1>Detalhe do Produto</h1>
            <p>{produto.id}</p>
            <p>Produto: {produto.nome}</p>
            <img src={produto.fotoLink} />
        </div>}
        </>
    )
}

export default ProdutoDetalhe;