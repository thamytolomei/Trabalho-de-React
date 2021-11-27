import React from "react";
import {Button, Form, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from "react";
import api from "./api";

function Carrinho(){
    const [ carrinho, setCarrinho] = useState([]);

    useEffect(() => {
        api.get("/produtos").then(exibir);
        function exibir(response) {
          setCarrinho(response.data);
          console.log(response.data);
        }
      }, []);


   
return(
  <>
    <Form >
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control/>
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2">
            Adicionar ao carrinho
          </Button>
        </Col>
      </Row>
    </Form>
  </>
);
        
        
        
}

export default Carrinho;