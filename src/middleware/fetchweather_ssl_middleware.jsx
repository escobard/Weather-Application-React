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

const API_KEY = 'cf662e8028029c2cbc6e32997778e46a';

const ROOT_URL =`https://api.darksky.net/forecast/${API_KEY}`;

import _ from 'lodash';

export var DataHandler = [];

export function fetchWeatherSSL(lat, lon){

		var latitude = lat;
		var longitude = lon;
		var url = `${ROOT_URL}/${latitude},${longitude}`
		
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
			  success: function(data){
				handleData(data);
			  }
			 })
		}
};

// handles and reduces AJAX data
function handleData(data){
        DataHandler = DataHandler;
          console.log('Fetch Weather SSL - Success!', data);
        DataHandler.push(data);
        // need to find a way to stop the data from flooding the reducer, or just transfer the data onto another fucking function to use here
            
 };