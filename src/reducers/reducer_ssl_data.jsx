// =============================================================
// 
// 	reducer_weather.js
//
// =============================================================

// imports the action.type of our fetchWeather component
import { FETCH_DATA } from '../actions/action_fetch_ssl_data';
import _ from 'lodash';

function sslDataReducer(state = {}, action){
	switch (action.type){

		case FETCH_DATA:
			console.log("Reducer - SSL - Weather Data", action.payload);
			return action.payload;
		default: 
			return state;
	};
};

export default sslDataReducer;