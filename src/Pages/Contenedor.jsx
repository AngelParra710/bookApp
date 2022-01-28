import React, { useState } from 'react';
import { useFetch } from '../Hooks/useFetch' 
import { Form, Container, Row, Col, Button } from 'react-bootstrap';


const useField = ({ type }, setState) => {
	const [value, setValue] = useState('');

	const onChange = event => {
		setValue(event.target.value);
	} 
	
	return {
		type,
		value,
		onChange,
	}
}


export const Contenedor = ({state, setState}) => {

  const { dataUrl } = useFetch('http://localhost:5000/categorias');
	console.log(dataUrl)

	const title = useField( { type: 'text' }, setState )
	const author = useField( { type: 'text' }, setState )
	const content = useField( { type: 'text' }, setState )
	const contenshort = useField( { type: 'text' }, setState )
	const publisherdate = useField( { type: 'date' }, setState )
	const pages = useField( { type: 'number' }, setState )
	const language = useField( { type: 'text' }, setState )
	const urldonwload = useField( { type: 'text' }, setState )
	const thumbmail = useField( { type: 'text' }, setState )
	const idCategoria = useField( { type: 'number' }, setState )


  return(
    <Container>
    <Form.Group className="mb-3" controlId='formBasicText'>
        <Form.Label>Titulo:</Form.Label>
        <Form.Control { ...title }></Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId='formBasicText'>
        <Form.Label>Autor:</Form.Label>
        <Form.Control { ...author }></Form.Control>
    </Form.Group> 
    <Form.Group className="mb-3" controlId='formBasicText'>
        <Form.Label>Descripcion:</Form.Label>
        <Form.Control { ...content }></Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId='formBasicText'>
        <Form.Label>Descripcion Corta:</Form.Label>
        <Form.Control { ...contenshort }></Form.Control>
    </Form.Group>
    <Row>
        <Col>
            <Form.Group className="mb-3" controlId='formBasicDate'>
                <Form.Label>Fecha publicacion:</Form.Label>
                <Form.Control { ...publisherdate }></Form.Control>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3" controlId='formBasicNumber'>
                <Form.Label>Paginas:</Form.Label>
                <Form.Control { ...pages }></Form.Control>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3" controlId='formBasicText'>
                <Form.Label>Lenguaje:</Form.Label>
                <Form.Control { ...language }></Form.Control>
            </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col>
            <Form.Group className="mb-3" controlId='formBasicText'>
                <Form.Label>URL de descarga:</Form.Label>
                <Form.Control { ...urldonwload }></Form.Control>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3" controlId='formBasicText'>
                <Form.Label>URL de Imagen:</Form.Label>
                <Form.Control { ...thumbmail }></Form.Control>
            </Form.Group>
        </Col>
    </Row>
    <Form.Group className="mb-3" controlId='formBasicText'>
        <Form.Label>Categoria:</Form.Label>
        <Form.Select aria-label='Seleccionar' { ...idCategoria }>
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
