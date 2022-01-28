import axios from 'axios';
import React, { useEffect } from 'react';
 
export const useCategories = async (values, url) => {
  
  const data = (await axios.post(url, values)).data
  return data;
};

