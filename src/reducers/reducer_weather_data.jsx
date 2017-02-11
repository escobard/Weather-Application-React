// =============================================================
// 
// 	reducer_weather_data.jsx
//
// =============================================================

import { FETCH_DATA } from '../actions/action_fetch_weather_data';

function weatherData(state = [], action){

	switch (action.type){

		case FETCH_DATA:
			console.log("Action - SSL Weather -", action.payload);

			return [ action.payload, ...state ]; 

	};

	return state;
};

export default weatherData;