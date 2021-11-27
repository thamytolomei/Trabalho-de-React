import { useState, useEffect } from "react";
import Home from "./Home";
import Carrinho from "./Carrinho";
import Produtos from "./Produtos";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProdutoDetalhe from "./ProdutoDetalhe";
import {EstiloBotao,
        Nav,
        Navbar,
        NavbarGood,
        Logo
      } 
from './GlobalStyle';
import { Link } from "react-router-dom";
import Formulario from "./Formulario";


function App() {
   return (
    <div>
      <div className="App">
        <BrowserRouter>
        <NavbarGood>
          <Logo>SerranoTec Eletrônicos</Logo>
          <Nav>
            <Link to="/home">
              <EstiloBotao>Home</EstiloBotao>
            </Link>
            <Link to="/produtos">
              <EstiloBotao>Produtos</EstiloBotao>
            </Link>
            <Link to="/carrinho">
              <EstiloBotao>Carrinho</EstiloBotao>
            </Link>
          </Nav>
        </NavbarGood>
          <Switch>
           <Route path="/home" component={Home} exact></Route>
           <Route path="/produtos" component={Produtos} exact></Route>
           <Route path="/produtoDetalhe/:id" component={ProdutoDetalhe} exact />
           <Route path="/carrinho" component={Carrinho} exact />
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
        <header className="App-header">
        </header>
      </div>
    </div>
  );
}

export default App;
