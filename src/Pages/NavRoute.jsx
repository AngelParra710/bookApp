import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FacebookShareButton, FacebookIcon } from 'react-share';

export const NavRoute = () => {
  return(
    <>
      <Navbar bg = 'dark' variant='dark'>
          <Container>
            <Navbar.Brand>ApiBooks</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as = { Link } to='/bookApp/'>Categorias</Nav.Link>
              <Nav.Link as = { Link } to='/bookApp/altas'>Altas</Nav.Link>
              <Nav.Link as = { Link } to='/bookApp/libros'>Libros</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
    </>
  );
};
