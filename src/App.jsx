import { useState, useEffect } from "react";
import Menu from "./Menu";
import Home from "./Home";
import Carrinho from "./Carrinho";
import Produtos from "./Produtos";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProdutoDetalhe from "./ProdutoDetalhe";


function App() {

  return (
    <div>
      <div className="App">
        <Menu />
        <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} exact />
            <Route path="/produtos" component={Produtos} exact />
            <Route path="/produtoDetalhe/:id" component={ProdutoDetalhe} exact />
            <Route path="/carrinho" component={Carrinho} exact />
            <Route path="/" exact>
              <Home />
            </Route>
            
          </Switch>
        </BrowserRouter>
        </header>
      </div>
    </div>
  );
}

export default App;
