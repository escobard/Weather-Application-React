// =============================================================
// 
// 	reducer_weather.js
//
// =============================================================

// imports the action.type of our fetchWeather component
import { FETCH_DATA } from '../actions/action_fetch_ssl_data';

const initialState = {
	humidity: [],
	summary: '',
	pressure: [],
	weather: []
}

function sslDataReducer(state = initialState, action){
	console.log('ACTION - RECEIVED', action);
	switch (action.type){

		case FETCH_DATA:
			console.log("Action - SSL - Weather Data", action.payload);
			return action.payload;
			break;
		default: 
			return state;
			break;
	};
};

export default sslDataReducer;