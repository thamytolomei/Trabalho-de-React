import React from "react";
import { useState, useEffect } from "react";
import api from "./api";

function Carrinho(){
    const [ carrinho, setCarrinho] = useState([]);

    useEffect(() => {
        api.get("/produtos").then(exibir);
        console.log("oi");
        function exibir(response) {
          setCarrinho(response.data);
          console.log(response.data);
        }
      }, []);


   
return


        
        
        
}

export default Carrinho;