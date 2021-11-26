import { Link } from "react-router-dom";

function Menu() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a style={{padding: "10px", listStyle:"none"}} className="navbar-brand" href="#">
          SerranoTec Eletrônicos
          </a>
          <a style={{padding: "10px", listStyle:"none"}} className="navbar-brand" href="#">
            Home
          </a>
          <a style={{padding: "10px", listStyle:"none"}} className="navbar-brand" href="#">
            Produtos
          </a>
          <a style={{padding: "10px", listStyle:"none"}} className="navbar-brand" href="#">
            Carrinho
          </a>
        </div>
      </nav>
    );
  }
  
  export default Menu;