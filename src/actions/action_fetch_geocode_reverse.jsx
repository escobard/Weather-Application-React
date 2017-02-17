// =============================================================
// 
// 	action_fetch_geocode_reverse.jsx
//
// =============================================================

// original address sample:
// https://maps.googleapis.com/maps/api/geocode/json?address=edmonton&key=AIzaSyBwLKEtevVm7oTuA7UFJyB_3fZuD8cDxJ4

import axios from 'axios';

var API_KEY = 'AIzaSyBwLKEtevVm7oTuA7UFJyB_3fZuD8cDxJ4';

var ROOT_URL =`https://maps.googleapis.com/maps/api/geocode/json`;

export const FETCH_GEOCODE_REVERSE ='FETCH_GEOCODE_REVERSE';

export function fetchGeocodeReverse(lat, lng){

	const url = `${ROOT_URL}?latlng=${lat},${lng}&key=${API_KEY}`;

	const request = axios.get(url);

	// console.log('Request: ', request);

	return {
		
		type: FETCH_GEOCODE_REVERSE,

		payload: request
	};

}
