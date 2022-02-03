import React from 'react';
import { Card } from 'react-bootstrap';
import '../../Styles/Books.css'

export const Cards = ({ title, pages, thumbnail }) => {
  return(
      <Card style ={{ width: '14rem' }}>
          <Card.Img variant='top' className='img' src={ thumbnail } /> 
          <Card.Body>
						<Card.Title>{ title }</Card.Title>
						<Card.Text>
							Paginas: { pages }
						</Card.Text>
					</Card.Body>
      </Card>
  );
};
