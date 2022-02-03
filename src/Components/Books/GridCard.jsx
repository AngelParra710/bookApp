import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useFetch } from '../../Hooks/useFetch';
import { Cards } from './Card';
import '../../Styles/Books.css'

export const GridCard = () => {
    //https://rickandmortyapi.com/api
    //https://apibook.azurewebsites.net/libros
    const { dataUrl } = useFetch('https://apibook.azurewebsites.net/libros')
    return(
      <Container className='contain' >
          <Row className='mt-4'>
          {
              dataUrl && dataUrl.map( i => {
                  return(
                    <Col key= {i.idLibro} xl={ 3 } lg ={ 4 } md = { 6 }>
                        <Cards title = { i.title } pages = { i.pages } thumbnail = { i.thumbnail }/>
                    </Col>
                  )
              })
          }
          </Row>
      </Container>
  );
};
