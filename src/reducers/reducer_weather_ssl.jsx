// =============================================================
// 
// 	reducer_weather_ssl.js
//
// =============================================================
// 
import { FETCH_WEATHER_SSL } from '../actions/action_post_weather_ssl';


function sslWeatherReducer(state = [], action){

	switch (action.type){

		case FETCH_WEATHER_SSL:

			return [ action.payload, ...state ]; 
			console.log("Action - SSL -", action.payload);
	};

	return state;
};

export default sslWeatherReducer;