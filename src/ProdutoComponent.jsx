import React from "react";
import { Link } from 'react-router-dom'


export default (props) => {
    const { produto } = props;
    const [quantidade, setQuantidade] = React.useState([]);

    function espec(){
        <Link to={`/ProdutoDetalhe/${props.id}`}></Link>
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    
return (
    <li>
    <div className="card">
        <img className="card-img-top" src= {props.produto.fotoLink} alt="Card image cap" />
        <div className="card-body">{props.produto.nome} {props.produto.valor} 
            <p className="card-text"> {props.produto.descricao} </p>
        </div>
        <button onClick={espec()}>Especificações</button>
    <label htmlFor="">Qntd</label>
    <form onSubmit={handleSubmit}>
        <input 
            type="number"
            name="quantidade"
            id="quantidade"
            value={quantidade}
            onChange={(event) => setQuantidade()}
                placeholder="0" />
            <button type= "submit">Enviar</button>    
    </form>
    </div>
    </li>
)
}