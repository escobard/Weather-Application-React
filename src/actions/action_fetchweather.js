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

// MIDDLEWARES have the ability to block, modify or just let pass through actions BEFORE they hit a reducer (which contains App.state data)
// to re-iterate, we only change our application state through our reducers
var API_KEY = '7588eeb65b45661378601702a0a9b7f1';

// this is the API base url
// for EMC5 this will work : const ROOT_URL ='http://api.openweathermap.org/data/2.5/forecast?appid='+ API_KEY;
// 
// for EMC6 we can use the following: 
var ROOT_URL =`//api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// we are creating the type value as a variable, so we can export this
// this is done to keep our action types consistent between our action creators and our reducers
// 
export const FETCH_WEATHER ='FETCH_WEATHER';

// no need to create this in another file, as it's the main action of this application
// also passing along an argument for the selected CITY
// 
// VERY important : WHEN EXPORTING MULTIPLE COMPONENTS, DO NOT SET A DEFAULT EXPORT, THIS CAUSES A BUG THAT DOES NOT ALLOW
// ANYTHING TO BE EXPORTED
// 
export function fetchWeather(city){

	// this grabs the ROOT_URL placed above, which has our API and the base URL needed for the request
	// it then places the city argument (which will be the result of the search string) into the url const
	// creating our URL for the ajax request, more on this API's URL method here = https://openweathermap.org/forecast5
	// the last thing is the country code, which for the purposes of this application we will leave as the US
	const url = `${ROOT_URL}&q=${city}`;

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
		
		type: FETCH_WEATHER,
		
		// now that we have the DevOps figured out for the AJAX request, we can create the payload key value for this action
		// the request PROMISE is attached to this action creator's payload
		payload: request
	};

}
