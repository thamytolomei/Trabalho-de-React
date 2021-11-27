import React from "react";
import Formulario from "./Formulario";
import {EstiloBotao,
  Nav,
  Navbar,
  NavbarGood,
  Header,
  Logo,
  FormDiv} 
from './GlobalStyle';

function Home() {
  return (
    <div>
      <Header/>
      <FormDiv>
      <Formulario/>
      </FormDiv>
    </div>
  );
}

export default Home;