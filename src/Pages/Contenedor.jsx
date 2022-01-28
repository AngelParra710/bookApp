import React, { useState } from 'react';
import { useFetch } from '../Hooks/useFetch' 
import { Form, Container, Row, Col, Button } from 'react-bootstrap';


export const Contenedor = ({state, setState}) => {

    const { dataUrl } = useFetch('https://apibook.azurewebsites.net/categorias');

	const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: [e.target.value],
        })
    }


  return(
    <Container>
    <Form.Group className="mb-3" controlId='formBasicText'>
        <Form.Label>Titulo:</Form.Label>
        <Form.Control onChange={onChange} type='text' value={state.title} name = 'title'></Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId='formBasicText'>
        <Form.Label>Autor:</Form.Label>
        <Form.Control onChange={onChange} type='text' value={state.author} name = 'author'></Form.Control>
    </Form.Group> 
    <Form.Group className="mb-3" controlId='formBasicText'>
        <Form.Label>Descripcion:</Form.Label>
        <Form.Control onChange={onChange} type='text' value={state.content} name = 'content'></Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId='formBasicText'>
        <Form.Label>Descripcion Corta:</Form.Label>
        <Form.Control onChange={onChange} type='text' value={state.contenshort} name = 'contenshort'></Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId='formBasicText'>
        <Form.Label>Categoria:</Form.Label>
        <Form.Select aria-label='Seleccionar' onChange={onChange} value={state.idCategoria} name = 'idCategoria'>
            <option value="">Selecciona una opcion....</option>
            {
                dataUrl.map(i => {
                    return <option value={i.idCategoria} key={i.idCategoria}>{i.categoria}</option>
                })
            }
        </Form.Select>
    </Form.Group>
    <Row>
        <Col>
            <Form.Group className="mb-3" controlId='formBasicDate'>
                <Form.Label>Fecha publicacion:</Form.Label>
                <Form.Control onChange={onChange} type='date' value={state.publisherdate} name = 'publisherdate'></Form.Control>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3" controlId='formBasicNumber'>
                <Form.Label>Paginas:</Form.Label>
                <Form.Control onChange={onChange} type='number' value={state.pages} name = 'pages'></Form.Control>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3" controlId='formBasicText'>
                <Form.Label>Lenguaje:</Form.Label>
                <Form.Control onChange={onChange} type='text' value={state.language} name = 'language'></Form.Control>
            </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col>
            <Form.Group className="mb-3" controlId='formBasicText'>
                <Form.Label>URL de descarga:</Form.Label>
                <Form.Control onChange={onChange} type='text' value={state.urldonwload} name = 'urldonwload'></Form.Control>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3" controlId='formBasicText'>
                <Form.Label>URL de Imagen:</Form.Label>
                <Form.Control onChange={onChange} type='text' value={state.thumbmail} name = 'thumbmail'></Form.Control>
            </Form.Group>
        </Col>
    </Row>
  </Container>
  );
};
