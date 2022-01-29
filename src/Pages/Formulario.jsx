import React, { useState } from 'react';
import { Form,Button, Alert } from 'react-bootstrap';
import { SendBook } from '../Send/SendBook';
import { Contenedor } from './Contenedor';
import Swal from 'sweetalert2';
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

const succesAlert = () => {
	Swal.fire({
		title: 'Guardado',
		text: 'El libro se ha guardado correctamente',
		icon: 'success',
		timer: '5000',
	})
}

export const Formulario = () => {
	const [libro, setLibro] = useState(initialState);
	const [isEnviado, setEnviado] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await SendBook(libro, 'https://apibook.azurewebsites.net/libros/add');
		if(data.send === 'Guardado'){ 
			succesAlert()
		}
	}

  return (
      <div className='contain'>
					{isEnviado?
								<Alert className='alerta' variant='primary'>EL libro se ha registrado</Alert>
								:
								<></>
					}
          <h1>Insertar libro</h1>
          <Form onSubmit={handleSubmit}>
              <Contenedor state = {libro} setState={setLibro}/>
              <Button className='btn' type='submit'>Guardar</Button>
          </Form>
      </div>
  );
};
