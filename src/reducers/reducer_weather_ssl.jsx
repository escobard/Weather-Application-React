// =============================================================
// 
// 	reducer_weather_ssl.js
//
// =============================================================
// 
import { FETCH_WEATHER_SSL } from '../actions/action_fetchweather_ssl';


function sslWeatherReducer(state = [], action){

	switch (action.type){

		case FETCH_WEATHER_SSL:

			return [ action.payload, ...state ]; 

	};

	return state;
};

export default sslWeatherReducer;