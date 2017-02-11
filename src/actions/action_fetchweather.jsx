// =============================================================
// 
// 	action_fetchweather.jsx
//
// =============================================================

import axios from 'axios';

const API_KEY = '7588eeb65b45661378601702a0a9b7f1';

const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER ='FETCH_WEATHER';

export function fetchWeather(city){

	const url = `${ROOT_URL}&q=${city}`;

	const request = axios.get(url);

	console.log('Request: ', request);

	return {
		
		type: FETCH_WEATHER,

		payload: request
	};

}
