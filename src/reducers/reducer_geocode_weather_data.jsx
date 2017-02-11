// =============================================================
// 
// 	reducer_geocode_weather_data.jsx
//
// =============================================================

import { FETCH_GEOCODE_DATA } from '../actions/action_fetch_geocode_weather_data';

function sslDataReducer(state = [], action){

	switch (action.type){

		case FETCH_GEOCODE_DATA:
			// console.log("Action - SSL Weather -", action.payload);

			return [ action.payload, ...state ];

	};

	return state;
};

export default sslDataReducer;