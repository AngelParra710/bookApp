import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React, { useEffect } from 'react';

export const SendCategories = async ( values, url ) => {

  //const url = 'http://localhost:5000/categoria/add';

  const sendJson = {
    method:'POST',
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values),    
  }

  useEffect(() => {
    async function sendCate(){
      const peticion = await fetch(url, sendJson);
      
    }
    sendCate();
  }, [url]);
};
