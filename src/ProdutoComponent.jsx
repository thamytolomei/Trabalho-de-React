import React from "react";
import { Link } from 'react-router-dom'
import { Botao, Botaozinho, Card, CardContainer} from "./GlobalStyle"


export default (props) => {
    const { produto } = props;
    const [quantidade, setQuantidade] = React.useState([]);

    function espec(){
        <Link to={`ProdutoDetalhe/${props.id}`}> </Link>
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
return (
    <li>
        <CardContainer>
        <Card>
        <div>
            <img src= {props.produto.fotoLink} style={{width:"100%", margin:"0 auto"}}/>
            <div className="nome">{props.produto.nome} {props.produto.valor}</div>
            <div className="bottom">
                <p className="descricao"> {props.produto.descricao} </p>
                <Link to={`ProdutoDetalhe/${props.produto.id}`}>
                    <Botao>Especificações</Botao>
                </Link>
                <label htmlFor="">Quantidade:</label>
                <br />
                <form onSubmit={handleSubmit}>
                    <input 
                        type="number"
                        name="quantidade"
                        id="quantidade"
                        value={quantidade}
                        onChange={(event) => setQuantidade()}
                            placeholder="0" />
                        <Botaozinho>Enviar</Botaozinho>    
                </form>
            </div>
        </div>
        </Card>
        </CardContainer>
    </li>
)
}