import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { SendBook } from '../Send/SendBook';
import { Contenedor } from './Contenedor';
import './formulario.css'

const initialState = {
	title: '',
	author:'',
	content:'',
	contenshort:'',
	publisherdate:'',
	pages: 0,
	language: '',
	urldonwload: '',
	thumbmail: '',
	idCategoria: 0,
}

export const Formulario = () => {
	const [libro, setLibro] = useState(initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(libro)
	}

  return (
      <div className='container'>
          <h1>Insertar libro</h1>
          <Form onSubmit={handleSubmit}>
              <Contenedor state = {libro} setState={setLibro}/>
              <Button className='btn' type='submit'>Guardar</Button>
          </Form>
      </div>
  );
};
