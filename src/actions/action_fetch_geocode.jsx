// =============================================================
// 
// 	action_fetch_geocode.jsx
//
// =============================================================

// original address sample:
// https://maps.googleapis.com/maps/api/geocode/json?address=edmonton&key=AIzaSyBwLKEtevVm7oTuA7UFJyB_3fZuD8cDxJ4

import axios from 'axios';

var API_KEY = 'AIzaSyBwLKEtevVm7oTuA7UFJyB_3fZuD8cDxJ4';

var ROOT_URL =`https://maps.googleapis.com/maps/api/geocode/json`;

export const FETCH_GEOCODE ='FETCH_GEOCODE';

export function fetchGeocode(city){

	const url = `${ROOT_URL}?address=${city}&key=${API_KEY}`;

	const request = axios.get(url);

	// console.log('Request: ', request);

	return {
		
		type: FETCH_GEOCODE,

		payload: request
	};

}
