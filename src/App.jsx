import { useState, useEffect } from "react";
import Menu from "./Menu";
import Home from "./Home";
import Carrinho from "./Carrinho";
import Produtos from "./Produtos";
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <div className="App">
        <Menu />
        <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/produtos" component={Produtos} /> {/*exact*/}
            <Route path="/carrinho" component={Carrinho} />
            <Route path="/">
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
