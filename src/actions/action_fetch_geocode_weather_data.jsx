// =============================================================
// 
// 	action_fetch_geocode_weather_data.jsx
//
// =============================================================

import fetchJsonp from 'fetch-jsonp';

const API_KEY = 'a078200d2fe7ea7267d2ddd3d461cb72';

const ROOT_URL =`https://api.darksky.net/forecast/${API_KEY}`;

export const FETCH_GEOCODE_DATA ='FETCH_GEOCODE_DATA';

export function fetchGeocodeWeather(lat, lon){

	const url = `${ROOT_URL}/${lat},${lon}`;
	
	const request = fetchJsonp(url)
	  .then(function(response) {
	    return response.json()
	  }).then(function(json) {
	    return json;
	  }).catch(function(ex) {
	    console.log('parsing failed', ex);
	});

	// console.log('Request: ', request);
	
	return {
		type: FETCH_GEOCODE_DATA,
		payload: request
	};

}
