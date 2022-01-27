import React from 'react';


export const SendBook = (e) => {
    
    const handleSubmit = () => {
        e.preventDefault();
        console.log('handle')
    }
  
    return{
        handleSubmit,
    };
};
