import React from 'react';
import { Formulario } from './Formulario';
import { Categoria } from './Categoria';
import { Routes, Route } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
        <Route path = "bookApp/" element = { <Categoria /> }></Route>
        <Route path = "bookApp/libros" element = { <Formulario /> }></Route>
    </Routes>
  );
};
