import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Botao } from "./GlobalStyle";

function Formulario(){
    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefone, setTelefone] = React.useState("");

    const api = axios.create({
        baseURL: "http://localhost:8080",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return ( 
    <div style={{margin:"20px"}}>
        <h2 style={{textAlign:"center"}}>Receba ofertas em seu e-mail!</h2>
        <form onSubmit={handleSubmit}>
        <div style={{margin:"20px"}}>
            <label style={{fontSize:"17px"}} htmlFor="">Nome</label>
            <br />
            <input
            style={{width:"60%", height: "1.3rem", borderRadius:"8px", borderColor:"2px solid black", backgroundColor:"white"}} 
            type="text"
            nome="nome"
            id="nome"
            value={nome}
            onChange={(event) => setNome("")}
            placeholder="Digite seu nome" />
        </div>
        <div style={{margin:"20px"}}>
            <label style={{fontSize:"17px"}} htmlFor="">E-mail</label>
            <br />
            <input 
             style={{width:"60%", height: "1.3rem", borderRadius:"8px", borderColor:"2px solid black", backgroundColor:"white"}} 
            type="text"
            nome="e-mail"
            id="email"
            value={email}
            onChange={(event) => setEmail("")}
            placeholder="Digite seu e-mail" />
        </div>
        <div style={{margin:"20px"}}>
            <label style={{fontSize:"17px"}} htmlFor="">Telefone</label>
            <br />
            <input 
             style={{width:"60%", height: "1.3rem", borderRadius:"8px", borderColor:"2px solid black", backgroundColor:"white"}} 
            type="text"
            nome="telefone"
            id="telefone"
            value={telefone}
            onChange={(event) => setTelefone("")}
            placeholder="Digite seu telefone" />
        </div>
        </form>
        <Botao>Enviar</Botao>
    </div>
    )
}

export default Formulario;