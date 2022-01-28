import axios from 'axios';
import React from 'react';


export const SendBook = async (book, url) => {
    
    const send = (await axios.post(url,book)).data
  
    return{
        send,
    };
};
