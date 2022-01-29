import React from 'react';
import { NavRoute } from './NavRoute';
import { Router } from './Router';
import './formulario.css'

export const Main = () => {
  return(
    <>
        <NavRoute />
        <div className='main'>
          <Router />
          <div className='choco'></div>
        </div>
    </>
  );
};
