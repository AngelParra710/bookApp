import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Formulario } from './Formulario';
import { Categoria } from './Categoria';
import { Books } from './Books';

export const Router = () => {
  return (
    <Routes>
        <Route path = "bookApp/" element = { <Categoria /> }></Route>
        <Route path = "bookApp/altas" element = { <Formulario /> }></Route>
        <Route path = "bookApp/libros" element = { <Books /> }></Route>
    </Routes>
  );
};
