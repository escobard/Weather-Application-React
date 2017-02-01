// =============================================================
// 
// 	reducer_geocode.js
//
// =============================================================

// imports the action.type of our fetchWeather component
import { FETCH_GEOCODE } from '../actions/action_fetchweather';

// creates the reducer for our weather data post middleware
function geocodeReducer(state = [], action){

	// this returns the RESOLVE state of the promise, thanks to the middleware 'redux-promise', which resolves the promise
	// then returns the data response as our action payload
	console.log('Action received', action);

	// creates the switch to handle the incoming data from the action
	switch (action.type){

		// if the case returned is FETCH_GEOCODE
		case FETCH_GEOCODE:

			// returns the payload's relevant data, in this case its the .data object property of payload that we want to keep
			// always have to make sure we are returning a new instance of state, not changing the current state with data. that messes up
			// the application state entirely
			// this is the accepted EMC5 method to do this : return state.concat([ action.payload.data ]); 
			// 
			// this is the accepted EMC6 method to do this:
			// 
			return [ action.payload, ...state ]; //[ city, city, city] NOT [city, [city, [city]]] which is BAD
			// the above explained below:
			// [ create a new array
			// put action.payload.data inside of it
			// take this new arrray and insert it inside the following array, state by using :
			// ...state
			// essentially it pushes the new array into an exsisting array which is defined by the variable after the ...

			// state.push([ action.payload.data ]); = DO NOT DO THIS, AS IT CHANGES ALL THE EXSISTING STATE TO THIS DATA, BAD BAD BAD
			// state.concat([ action.payload.data ]); = pushes a new array with the data, into the exsisting state, this is the accepted way
			// to add data to the application state
	};

	return state;
};

export default geocodeReducer;