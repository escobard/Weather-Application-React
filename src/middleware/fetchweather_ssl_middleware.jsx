// =============================================================
// 
// 	actions/fetchweather.js
//
// =============================================================


// new API call for darksky weather API
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// https://api.darksky.net/forecast/476d4cacd325216ea0fa53dc3b4fe5db/53.5444389,-113.4909267

import jQuery from 'jquery';

import $ from 'jquery';

const API_KEY = 'b3bc903510184ddd38b76cd04bac96ed';

const ROOT_URL =`https://api.darksky.net/forecast/${API_KEY}`;

export function fetchWeatherSSL(lat, lon, handleData){

		var latitude = lat;
		var longitude = lon;
		var data;
		const url = `${ROOT_URL}/${latitude},${longitude}`
		
		if (lat <= 0){
			console.log('Fetch Weather SSL - Failed')
			return;
		}
		else {
			// calls the ajax request with jQuery
			$.ajax({
			  type: 'GET',
			  url: url,
			  dataType: "jsonp",
			  success: handleData
			 })
			return;
		}
};
