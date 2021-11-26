import React from "react";
import Formulario from "./Formulario";

function Home(props) {

  return (
    <div style={{backgroundColor: "purple"}}>
      <h2>Bem-vindo a nossa loja</h2>
      <Formulario />
    </div>
  );
}

export default Home;