import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';

export const useFetch = ( url ) => {

		const [data, setJson] = useState({
			cargando: true,
			dataUrl:[],
		});

		useEffect(() => {
			async function getPeticion(){
				const peticion = await fetch(url);
				const result = await peticion.json();
				setJson({
					cargando: false,
					dataUrl: result,
				})
			} 
			getPeticion();
		}, [url]);

    return data;
};
