import React from "react";
import Menu from "./Menu"
import Home from "./Home";
import Produtos from "./Produtos";
import Sobre from "./Carrinho";

function PaginaInicial(props) {
 switch (props.Menu) {
    case "Home":
      return <Home />;
      break;
    case "Produtos":
      return <Produtos />;
      break;
    case "Carrinho":
      return <Carrinho />;
    default:
      return <h4>Clique num dos botões</h4>;
  }
}

export default PaginaInicial;