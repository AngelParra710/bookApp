import React, { useState } from 'react';
import { SendCategories } from '../Send/SendCategories';
import { Form, Container, Row, Col, Button } from 'react-bootstrap'
import './formulario.css'

export const Categoria = () => {

	const [values, setValues] = useState({
		categoria: '',
		descripcion:'',
	});

	const { categoria, descripcion } = values

	const handleChangeCate = (e) => {
		setValues({
			...values,
			categoria: e.target.value,
		})
	}

	const handleChangeDescrip = (e) => {
		setValues({
			...values,
			descripcion: e.target.value,
		})
	}

	const setInputs = (e) => {
		e.preventDefault();
		SendCategories(values)
	}

  return(
    <div className='container'>
        <h1>Registrar Categoria</h1>
        <Form onSubmit={ setInputs }>
            <Container>
                <Form.Group className="mb-3" controlId='formBasicText'>
                    <Form.Label>Categoria:</Form.Label>
                    <Form.Control type='text' value={ categoria } onChange={handleChangeCate}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formBasicTextArea'>
                    <Form.Label>Descripcion:</Form.Label>
                    <Form.Control as='textarea' rows={3}value={descripcion} onChange={ handleChangeDescrip } ></Form.Control>
                </Form.Group>
            </Container>
            <Button className='btn' type='submit'>Guardar</Button>
        </Form>
    </div>
  );
};
