// =============================================================
// 
// 	actions/fetchweather.js
//
// =============================================================

// includes our axios API
import axios from 'axios';

// new API call for darksky weather API
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// https://api.darksky.net/forecast/476d4cacd325216ea0fa53dc3b4fe5db/53.5444389,-113.4909267

var API_KEY = '476d4cacd325216ea0fa53dc3b4fe5db';

var ROOT_URL =`https://api.darksky.net/forecast/${API_KEY}`;

// we are creating the type value as a variable, so we can export this
// this is done to keep our action types consistent between our action creators and our reducers
// 
export const FETCH_WEATHER_SSL ='FETCH_WEATHER_SSL';

// no need to create this in another file, as it's the main action of this application
// also passing along an argument for the selected CITY
// 
// VERY important : WHEN EXPORTING MULTIPLE COMPONENTS, DO NOT SET A DEFAULT EXPORT, THIS CAUSES A BUG THAT DOES NOT ALLOW
// ANYTHING TO BE EXPORTED
// 
export function fetchWeather(city(this needs to be COORDS)){

	// this grabs the ROOT_URL placed above, which has our API and the base URL needed for the request
	// it then places the city argument (which will be the result of the search string) into the url const
	// creating our URL for the ajax request, more on this API's URL method here = https://openweathermap.org/forecast5
	// the last thing is the country code, which for the purposes of this application we will leave as the US
	const url = `${ROOT_URL}/${LATITUDE},${LONGITUDE}`;

	// calls the ajax request with axios
	// this returns a promise
	
	const request = axios.get(url);

	console.log('Request: ', request);

	// to avoid the convulted overkill application of jQuery for this small app, we will be using another library to generate our
	// AJAX request called axios
	// this library is made solely for making ajax requests to the browser
	// again, need to make sure that syntax is correct within EVERYTHING, otherwise it will cause bugs when exporting to another component
	// was missing commas in the object properties below, caused this component to be unfetchable as a result
	return {
		
		type: FETCH_WEATHER_SSL,
		
		// now that we have the DevOps figured out for the AJAX request, we can create the payload key value for this action
		// the request PROMISE is attached to this action creator's payload
		payload: request
	};

}

// we can also write it with EMC6 syntax
 function mapStateToProps({ weather }){

 	// this is how the function now looks
 	/*
	return { weather: weather }; */

	//this can be further condensed with ES6 like so:
	// because both the key and the value object have the same identifier
	return { weather };
}

// if we are adding a reducer, we use mapstate to props, which is the first argument of connect, the second argument can be left empty
// since there are no actions here
export default connect(mapStateToProps)(WeatherList);
