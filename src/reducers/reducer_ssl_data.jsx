// =============================================================
// 
// 	reducer_weather.js
//
// =============================================================

// imports the action.type of our fetchWeather component
import { FETCH_DATA } from '../actions/action_fetch_ssl_data';

function sslDataReducer(state = [], action){
	console.log('ACTION', action);
	switch (action.type){

		case FETCH_DATA:
			console.log("Action - SSL -", action.payload);
			return action.payload;
		default: 
			return state;
	};
};

export default sslDataReducer;