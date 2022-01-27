import React from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap'
import './formulario.css'

export const Categoria = () => {
  return(
    <div className='container'>
        <h1>Registrar Categoria</h1>
        <Form>
            <Container>
                <Form.Group className="mb-3" controlId='formBasicText'>
                    <Form.Label>Categoria:</Form.Label>
                    <Form.Control type='text'></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formBasicTextArea'>
                    <Form.Label>Descripcion:</Form.Label>
                    <Form.Control as='textarea' rows={3} ></Form.Control>
                </Form.Group>
            </Container>
            <Button className='btn' type='submit'>Guardar</Button>
        </Form>
    </div>
  );
};
