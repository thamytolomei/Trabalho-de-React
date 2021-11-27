function Menu() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a style={} className="navbar-brand" href="#">
          SerranoTec Eletrônicos
          </a>
          <a style={} className="navbar-brand" href="#">
            <button Link to = {"/home"}> Home</button>
          </a>
          <a style={} className="navbar-brand" href="#">
          <button Link to = {"/produtos"}>Produtos</button>
          </a>
          <a style={} className="navbar-brand" href="#">
          <button Link to = {"/carrinho"}> Carrinho </button>
          </a>
        </div>
      </nav>
    );
  }
  
  export default Menu;