import React from 'react';
import { Formulario } from './Formulario';
import { Categoria } from './Categoria';
import { Routes, Route } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
        <Route path = "/" element = { <Categoria /> }></Route>
        <Route path = "/libros" element = { <Formulario /> }></Route>
    </Routes>
  );
};
