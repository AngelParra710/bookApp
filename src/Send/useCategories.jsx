import React, { useEffect } from 'react';
import axios from 'axios';
 
export const useCategories = async (values, url) => {
  
  const data = (await axios.post(url, values)).data
  return data;
};

