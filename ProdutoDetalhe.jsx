import React from "react";
//import api from "./api";
//import styled from "styled-components";
import { useParams } from "react-router-dom";

function ProdutoDetalhe(){
    const { id } = useParams();
    const [produtos, setProdutos] = React.useState([]);

    React.useEffect(consultar, []);

    function consultar(){
        const listar = (resposta) => setProdutos(resposta.data);
        api.get("/produtos").then(listar);
    }
     return(
        <>
        <h1>Detalhe do Produto</h1>
        <p>{id}</p>
        <p>Produto: {produto.title}</p>
        <img src={produto.imagem} />
        </>
    );
}

export default ProdutoDetalhe;