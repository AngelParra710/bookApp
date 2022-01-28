import React from 'react';
import { useFetch } from '../Hooks/useFetch' 
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

export const Contenedor = ({state, setState}) => {

    const { dataUrl } = useFetch('http://localhost:5000/categorias');
    console.log(dataUrl)

    const handleChange = (e) => {
		state.title = e.target.value;
		setState({
			...state,
			title: state.title
		})
	}

  return(
    <Container>
    <Form.Group className="mb-3" controlId='formBasicText'>
        <Form.Label>Titulo:</Form.Label>
        <Form.Control type='text' onChange={handleChange}></Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId='formBasicText'>
        <Form.Label>Autor:</Form.Label>
        <Form.Control type='text'></Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId='formBasicText'>
        <Form.Label>Descripcion:</Form.Label>
        <Form.Control type='text'></Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId='formBasicText'>
        <Form.Label>Descripcion Corta:</Form.Label>
        <Form.Control type='text'></Form.Control>
    </Form.Group>
    <Row>
        <Col>
            <Form.Group className="mb-3" controlId='formBasicDate'>
                <Form.Label>Fecha publicacion:</Form.Label>
                <Form.Control type='date'></Form.Control>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3" controlId='formBasicNumber'>
                <Form.Label>Paginas:</Form.Label>
                <Form.Control type='number'></Form.Control>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3" controlId='formBasicText'>
                <Form.Label>Lenguaje:</Form.Label>
                <Form.Control type='text'></Form.Control>
            </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col>
            <Form.Group className="mb-3" controlId='formBasicText'>
                <Form.Label>URL de descarga:</Form.Label>
                <Form.Control type='text'></Form.Control>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3" controlId='formBasicText'>
                <Form.Label>URL de Imagen:</Form.Label>
                <Form.Control type='text'></Form.Control>
            </Form.Group>
        </Col>
    </Row>
    <Form.Group className="mb-3" controlId='formBasicText'>
        <Form.Label>Categoria:</Form.Label>
        <Form.Select aria-label='Seleccionar'>
            <option value="">Selecciona una opcion....</option>
            {
                dataUrl.map(i => {
                    return <option value={i.idCategoria} key={i.idCategoria}>{i.categoria}</option>
                })
            }
        </Form.Select>
    </Form.Group>
  </Container>
  );
};
