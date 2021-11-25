import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Formulario(){
    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefone, setTelefone] = React.useState("");

    const api = axios.create({
        baseURL: "http://localhost:8080"
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return ( 
    <div>
        <h2>Receba ofertas em seu e-mail!</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Nome</label>
            <input 
            type="text"
            nome="nome"
            id="nome"
            value={nome}
            onChange={(event) => setNome("")}
            placeholder="Digite seu nome" />
        </div>
        <div>
            <label htmlFor="">E-mail</label>
            <input 
            type="text"
            nome="e-mail"
            id="email"
            value={email}
            onChange={(event) => setEmail("")}
            placeholder="Digite seu e-mail" />
        </div>
        <div>
            <label htmlFor="">Telefone</label>
            <input 
            type="text"
            nome="telefone"
            id="telefone"
            value={telefone}
            onChange={(event) => setTelefone("")}
            placeholder="Digite seu telefone" />
        </div>
        </form>
        <button type="submit">Enviar</button>
    </div>
    )
}

export default Formulario;